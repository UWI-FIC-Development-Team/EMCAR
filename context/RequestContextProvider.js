import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../services/firebaseConfig";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

import RequestBuilder from "../builders/RequestBuilder";

const SessionContext = createContext();

function SessionProvider({ children }) {
  const [user, setUser] = useState(null);
  const [dataIsSent, setDataIsSent] = useState(false);
  const [sessionRequest, setSessionRequest] = useState({});
  const [upcomingSessions, setUpcomingSessions] = useState([]);
  const [tutorUpcomingSessions, setTutorUpcomingSessions] = useState([]);

  useEffect(() => {
    // Listen for changes in the authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  // Function to send a request
  const sendARequest = async (requestData) => {
    try {
      const {
        studentName,
        tutorId,
        subjects,
        topics,
        requestDate,
        startTime,
        endTime,
        location,
        additionalDetails,
        studentId,
        tutorName,
        requestId,
      } = requestData;

      // Create a request object using the RequestBuilder
      const request = RequestBuilder()
        .withRequestId(requestId)
        .withStudentId(studentId)
        .withStudentName(studentName)
        .withTutorId(tutorId)
        .withTutorName(tutorName)
        .withSubjects(subjects)
        .withTopics(topics)
        .withStatus("pending")
        .withRequestDate(requestDate)
        .withStartTime(startTime)
        .withEndTime(endTime)
        .withLocation(location)
        .withAdditionalDetails(additionalDetails)
        .build();

      // Add the request object to the "requests" collection in Firestore
      const requestRef = collection(db, "requests");
      await addDoc(requestRef, request);
      setDataIsSent(true);
    } catch (error) {
      console.error("Error while sending a request:", error.message);
    }
  };

  // get all upcoming sessions
  const getStudentUpcomingSessions = async (studentId) => {
    try {
      const requestsRef = collection(db, "requests");
      const upcomingSessionsQuery = query(
        requestsRef,
        where("studentId", "==", studentId),
        where("status", "==", "upcoming")
      );
      const querySnapshot = await getDocs(upcomingSessionsQuery);
      const upcomingSessionsData = querySnapshot.docs.map((doc) => doc.data());
      setUpcomingSessions((prev) => {
        return [...prev, ...upcomingSessionsData];
      });
    } catch (error) {
      console.error("Error while fetching upcoming requests:", error.message);
      console.log("No request");
    }
  };

  const getTutorUpcomingSessions = async (tutorId) => {
    try {
      const requestsRef = collection(db, "requests");
      const upcomingSessionsQuery = query(
        requestsRef,
        where("tutorId", "==", tutorId),
        where("status", "==", "upcoming")
      );
      const querySnapshot = await getDocs(upcomingSessionsQuery);
      const upcomingSessionsData = querySnapshot.docs.map((doc) => doc.data());
      setTutorUpcomingSessions((prev) => {
        return [...prev, ...upcomingSessionsData];
      });
    } catch (error) {
      console.error("Error while fetching upcoming requests:", error.message);
      console.log("No request");
    }
  };
  
  const updateRequestStatusToUpcoming = async (requestId) => {
    try {
      const requestRef = collection(db, "requests");

      const upcomingSessionsQuery = query(
        requestRef,
        where("requestId", "==", requestId)
      );

      const querySnapshot = await getDocs(upcomingSessionsQuery);
      const doc = querySnapshot.docs[0]; // Assuming there's only one matching document
      const data = doc.data();
      console.log("this is the doc", data);

      const docRef = doc.ref;
      await updateDoc(docRef, {
        status: "upcoming",
      });
      console.log("Request status updated to upcoming");
    } catch (error) {
      console.error("Error while updating request status:", error.message);
    }
  };

  const updateRequestLocation = async (requestId, newLocation) => {
    try {
      const requestRef = collection(db, "requests");
      const upcomingSessionsQuery = query(
        requestRef,
        where("requestId", "==", requestId)
      );

      const querySnapshot = await getDocs(upcomingSessionsQuery);
      const doc = querySnapshot.docs[0]; // Assuming there's only one matching document
      const data = doc.data();
      console.log("this is the doc", data);

      const docRef = doc.ref;
      await updateDoc(docRef, {
        location: newLocation,
      });
      console.log("Request location updated", querySnapshot);
    } catch (error) {
      console.error("Error while updating request location:", error.message);
    }
  };

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
        getStudentUpcomingSessions,
        getTutorUpcomingSessions,
        updateRequestLocation,
        updateRequestStatusToUpcoming,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export { SessionContext, SessionProvider };
