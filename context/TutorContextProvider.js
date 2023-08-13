import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../services/firebaseConfig";
import {
  collection,
  getDocs,
  query,
  where,
  getDoc,
  updateDoc,
  doc,
  arrayUnion,
  arrayRemove
} from "firebase/firestore";

const TutorContext = createContext();

function TutorProvider({ children }) {
  const [user, setUser] = useState(null);
  const [tutors, setTutors] = useState([]);
  const [tutorId, setTutorId] = useState(""); // Set the tutor ID here
  const [pendingRequests, setPendingRequests] = useState([]);
  const [currentTutor, setCurrentTutor] = useState({});
  const [updateUI, setUpdateUI] = useState(0);


  //Todo: move this function
  const getPendingRequests = async (tutorId) => {
    try {
      const requestsRef = collection(db, "requests");
      const pendingRequestsQuery = query(
        requestsRef,
        where("tutorId", "==", tutorId),
        where("status", "==", "pending")
      );
      const querySnapshot = await getDocs(pendingRequestsQuery);
      const pendingRequestsData = querySnapshot.docs.map((doc) => doc.data());
      setPendingRequests([]);
      setPendingRequests((prev) => {
        return [...prev, ...pendingRequestsData];
      });
    } catch (error) {
      console.error("Error while fetching pending requests:", error.message);
      console.log("No request");
    }
  };

  // TODO: add custom claims to both tutor and student.
  // having custom claims for user will allow us
  // to call this function based on role.

  // Function to get all tutors
  const getTutors = async () => {
    try {
      const tutorsRef = collection(db, "tutors");
      const querySnapshot = await getDocs(tutorsRef);
      const tutors = querySnapshot.docs.map((doc) => doc.data());
      setTutors(tutors);
    } catch (error) {
      console.error("Error while getting all tutors:", error.message);
    }
  };

  // Function to get the current tutor
  const getCurrentTutor = async (tutorId) => {
    try {
      console.log('This is tutor Id', tutorId );
      const tutorRef = doc(db, "tutors", tutorId);
      const tutorDoc = await getDoc(tutorRef);

      if (tutorDoc.exists()) {
        setCurrentTutor({});
        setCurrentTutor((prev) => {
          return { ...prev, ...tutorDoc.data() };
        });
        return tutorDoc.data()
      } else {
        throw new Error("Tutor not found");
        
      }
    } catch (error) {
      console.error("Error while fetching tutor:", error.message);
      return null;
    }
  };

  // Function to update the tutor's bio
  const updateTutorBio = async (tutorId, bio) => {
    try {
      const tutorRef = doc(db, "tutors", tutorId);
      await updateDoc(tutorRef, {
        Bio: bio,
      });
      console.log("Tutor bio updated successfully");
    } catch (error) {
      console.error("Error while updating tutor bio:", error.message);
    }
  };

  // Function to add available times to the tutor
  const addAvailableTimesToTutor = async (tutorId, availableTimes) => {
    try {
      const tutorRef = doc(db, "tutors", tutorId);
      await updateDoc(tutorRef, {
        availableTimes: arrayUnion(availableTimes),
      });
      setUpdateUI(updateUI + 1)
      console.log("Available times added to tutor successfully");
    } catch (error) {
      console.error(
        "Error while adding available times to tutor:",
        error.message
      );
    }
  };

  // Function to add new courses to the tutor
  const addNewCoursesToTutor = async (tutorId, course) => {
    try {
      const tutorRef = doc(db, "tutors", tutorId);
      await updateDoc(tutorRef, {
        subjects: arrayUnion(course),
      });
      console.log("New courses added to tutor successfully");
    } catch (error) {
      console.error("Error while adding new courses to tutor:", error.message);
    }
  };

  // Function to add new courses to the tutor
  const deleteCourseFromTutor = async (tutorId, course) => {
    try {
      const tutorRef = doc(db, "tutors", tutorId);
      await updateDoc(tutorRef, {
        subjects: arrayRemove(course),
      });
      console.log("courses deleted to tutor successfully");
    } catch (error) {
      console.error("Error while adding new courses to tutor:", error.message);
    }
  };

  return (
    <TutorContext.Provider
      value={{
        tutors,
        getTutors,
        getPendingRequests,
        pendingRequests,
        currentTutor,
        getCurrentTutor,
        addNewCoursesToTutor,
        addAvailableTimesToTutor,
        deleteCourseFromTutor,
        updateUI,
        setCurrentTutor
      }}
    >
      {children}
    </TutorContext.Provider>
  );
}

export { TutorContext, TutorProvider };
