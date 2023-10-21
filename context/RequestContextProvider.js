import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../services/firebaseConfig";
import {
  doc,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  query,
  where,
  runTransaction,
  writeBatch,
  onSnapshot,
} from "firebase/firestore";

import RequestBuilder from "../builders/RequestBuilder";
import { AuthContext } from "./AuthContextProvider";

const SessionContext = createContext();

function SessionProvider({ children }) {
  const { isTutor } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [dataIsSent, setDataIsSent] = useState(false);
  const [sessionRequest, setSessionRequest] = useState({});
  const [upcomingSessions, setUpcomingSessions] = useState([]);
  const [tutorUpcomingSessions, setTutorUpcomingSessions] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const sendARequest = async (requestData) => {
    try {
      const request = RequestBuilder()
        .withRequestId(requestData.requestId)
        .withStudentId(requestData.studentId)
        .withStudentName(requestData.studentName)
        .withTutorId(requestData.tutorId)
        .withTutorName(requestData.tutorName)
        .withSubjects(requestData.subjects)
        .withTopics(requestData.topics)
        .withStatus("pending")
        .withRequestDate(requestData.requestDate)
        .withStartTime(requestData.startTime)
        .withEndTime(requestData.endTime)
        .withLocation(requestData.location)
        .withAdditionalDetails(requestData.additionalDetails)
        .build();

      const requestRef = collection(db, "requests");
      const batch = writeBatch(db);
      addDoc(requestRef, request, batch);
      await batch.commit();

      setDataIsSent(true);
    } catch (error) {
      console.error("Error while sending a request:", error.message);
    }
  };

  const addPendingRequestsListener = (userId, userType) => {
    const requestsRef = collection(db, "requests");
    const fieldToCheck = userType === "tutor" ? "tutorId" : "studentId";

    const pendingRequestsQuery = query(
      requestsRef,
      where(fieldToCheck, "==", userId),
      where("status", "==", "pending")
    );

    const unsubscribe = onSnapshot(pendingRequestsQuery, (snapshot) => {
      const pendingRequestsData = [];
      snapshot.forEach((doc) => {
        pendingRequestsData.push(doc.data());
      });
      setPendingRequests(pendingRequestsData);
    });

    return unsubscribe;
  };

  const addUpcomingSessionsListener = (userId, userType) => {
    const requestsRef = collection(db, "requests");
    const fieldToCheck = userType === "tutor" ? "tutorId" : "studentId";

    const upcomingSessionsQuery = query(
      requestsRef,
      where(fieldToCheck, "==", userId),
      where("status", "==", "upcoming")
    );

    const unsubscribe = onSnapshot(upcomingSessionsQuery, (snapshot) => {
      const upcomingSessionsData = [];
      snapshot.forEach((doc) => {
        upcomingSessionsData.push(doc.data());
      });

      if (userType === "student") {
        setUpcomingSessions(upcomingSessionsData);
      } else if (userType === "tutor") {
        setTutorUpcomingSessions(upcomingSessionsData);
      }
    });

    return unsubscribe;
  };

  const updateRequestStatus = async (requestId, newStatus) => {
    try {
      const requestRef = collection(db, "requests");
      const requestQuery = query(
        requestRef,
        where("requestId", "==", requestId)
      );

      await runTransaction(db, async (transaction) => {
        const querySnapshot = await getDocs(requestQuery);
        const doc = querySnapshot.docs[0];
        const docRef = doc.ref;
        transaction.update(docRef, { status: newStatus });
      });

      console.log(`Request status updated to ${newStatus}`);
    } catch (error) {
      console.error("Error while updating request status:", error.message);
    }
  };

  const updateRequestLocation = async (requestId, newLocation) => {
    try {
      const requestRef = collection(db, "requests");
      const requestQuery = query(
        requestRef,
        where("requestId", "==", requestId)
      );

      await runTransaction(db, async (transaction) => {
        const querySnapshot = await getDocs(requestQuery);
        const doc = querySnapshot.docs[0];
        const docRef = doc.ref;
        transaction.update(docRef, { location: newLocation });
      });

      console.log("Request location updated");
    } catch (error) {
      console.error("Error while updating request location:", error.message);
    }
  };

  useEffect(() => {
    let userType;
    let pendingRequestsUnsubscribe;
    let upcomingSessionsUnsubscribe;

    if (user) {
      const userId = auth.currentUser.uid;
      if (isTutor) {
        userType = "tutor";
        pendingRequestsUnsubscribe = addPendingRequestsListener(
          userId,
          userType
        );
        upcomingSessionsUnsubscribe = addUpcomingSessionsListener(
          userId,
          userType
        );
      } else {
        userType = "student";
        pendingRequestsUnsubscribe = addPendingRequestsListener(
          userId,
          userType
        );
        upcomingSessionsUnsubscribe = addUpcomingSessionsListener(
          userId,
          userType
        );
      }
    }

    return () => {
      if (pendingRequestsUnsubscribe) {
        pendingRequestsUnsubscribe();
      }
      if (upcomingSessionsUnsubscribe) {
        upcomingSessionsUnsubscribe();
      }
    };
  }, [user]);

  return (
    <SessionContext.Provider
      value={{
        user,
        sendARequest,
        dataIsSent,
        sessionRequest,
        setSessionRequest,
        setDataIsSent,
        upcomingSessions,
        tutorUpcomingSessions,
        addPendingRequestsListener,
        addUpcomingSessionsListener,
        updateRequestLocation,
        updateRequestStatus,
        pendingRequests,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export { SessionContext, SessionProvider };
