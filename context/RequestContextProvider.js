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
  const [allRequests, setAllRequests] = useState([]);
  const [dataIsSent, setDataIsSent] = useState(false);
  const [sessionRequest, setSessionRequest] = useState({})

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
      const { studentId, tutorId, subjects, topics, requestDate, startTime, endTime, location, additionalDetails } = requestData;

      // Create a request object using the RequestBuilder
      const request = RequestBuilder()
        .withStudentId(studentId)
        .withTutorId(tutorId)
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
      setDataIsSent(true)
    } catch (error) {
      console.error("Error while sending a request:", error.message);
    }
  };

  // Function to get all requests
  const getAllRequests = async () => {
    try {
      const requestRef = collection(db, "requests");
      const querySnapshot = await getDocs(requestRef);
      const requests = querySnapshot.docs.map((doc) => doc.data());
      setAllRequests(requests);
    } catch (error) {
      console.error("Error while getting all requests:", error.message);
    }
  };

  // Function to get all confirmed requests
  const getAllConfirmedRequests = async (studentId, tutorId) => {
    try {
      const requestRef = collection(db, "requests");
      const querySnapshot = await getDocs(requestRef.where("studentId", "==", studentId).where("tutorId", "==", tutorId));
      const confirmedRequests = querySnapshot.docs.map((doc) => doc.data());
      return confirmedRequests;
    } catch (error) {
      console.error("Error while getting all confirmed requests:", error.message);
      return [];
    }
  };

  return (
    <SessionContext.Provider
      value={{
        user,
        sendARequest,
        allRequests,
        getAllRequests,
        getAllConfirmedRequests,
        dataIsSent,
        sessionRequest,
        setSessionRequest
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export { SessionContext, SessionProvider};
