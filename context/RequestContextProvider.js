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
} from "firebase/firestore";

import RequestBuilder from "../builders/RequestBuilder";

const SessionContext = createContext();

function SessionProvider({ children }) {
  const [user, setUser] = useState(null);
  const [dataIsSent, setDataIsSent] = useState(false);
  const [sessionRequest, setSessionRequest] = useState({});
  const [upcomingSessions, setUpcomingSessions] = useState([]);

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
  const getupcomingSessions = async (studentId) => {
    try {
      const requestsRef = collection(db, "requests");
      const upcomingSessionsQuery = query(
        requestsRef,
        where("tutorId", "==", studentId),
        where("status", "==", "upcoming")
      );
      const querySnapshot = await getDocs(upcomingSessionsQuery);
      const upcomingSessionsData = querySnapshot.docs.map((doc) => doc.data());
      setUpcomingRequests((prev) => {
        return [...prev, ...upcomingSessionsData];
      });
    } catch (error) {
      console.error("Error while fetching upcoming requests:", error.message);
      console.log("No request");
    }
  };

  const updateRequestStatusToUpcoming = async (requestId) => {
    try {
      const requestRef = doc(db, "requests", requestId);
      await updateDoc(requestRef, {
        status: "upcoming",
      });
      console.log("Request status updated to upcoming");
    } catch (error) {
      console.error("Error while updating request status:", error.message);
    }
  };

  const updateRequestLocation = async (requestId, newLocation) => {
    try {
      const requestRef = doc(db, "requests", requestId);
      await updateDoc(requestRef, {
        location: newLocation,
      });
      console.log("Request location updated");
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
        getupcomingSessions,
        updateRequestLocation,
        updateRequestStatusToUpcoming
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export { SessionContext, SessionProvider };
