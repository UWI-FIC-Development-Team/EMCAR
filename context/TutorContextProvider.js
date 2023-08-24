import { createContext, useState } from "react";
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
  arrayRemove,
} from "firebase/firestore";

const TutorContext = createContext();

function TutorProvider({ children }) {
  const [tutors, setTutors] = useState([]);
  const [currentTutor, setCurrentTutor] = useState({});

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
      console.log("This is tutor Id", tutorId);
      const tutorRef = doc(db, "tutors", tutorId);
      const tutorDoc = await getDoc(tutorRef);

      if (tutorDoc.exists()) {
        setCurrentTutor({});
        setCurrentTutor((prev) => {
          return { ...prev, ...tutorDoc.data() };
        });
        return tutorDoc.data();
      } else {
        throw new Error("Tutor not found");
      }
    } catch (error) {
      console.error("Error while fetching tutor:", error.message);
      return null;
    }
  };

  const fetchCurrentTutor = async () => {
    try {
      const userId = auth.currentUser.uid;
      await getCurrentTutor(userId);
    } catch (error) {
      console.log("Failed to fetch the current tutor: ", error);
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

  const deleteAvailableTimesFromTutor = async (tutorId, dayToDelete) => {
    try {
      const tutorRef = doc(db, "tutors", tutorId);

      // Get the tutor document data
      const tutorDoc = await getDoc(tutorRef);
      if (!tutorDoc.exists()) {
        throw new Error("Tutor not found");
      }

      // Extract the existing availableTimes array from the document data
      const existingAvailableTimes = tutorDoc.data().availableTimes;

      // Filter out the object with the specified day to delete
      const updatedAvailableTimes =
        existingAvailableTimes > 0
          ? existingAvailableTimes.filter((time) => time.day !== dayToDelete)
          : [];

      // Update the tutor's availableTimes in Firestore
      await updateDoc(tutorRef, {
        availableTimes: updatedAvailableTimes,
      });

      console.log("Available times deleted from tutor successfully");
    } catch (error) {
      console.error(
        "Error while deleting available times from tutor:",
        error.message
      );
    }
  };
  //

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
        currentTutor,
        getCurrentTutor,
        addNewCoursesToTutor,
        addAvailableTimesToTutor,
        deleteCourseFromTutor,
        setCurrentTutor,
        deleteAvailableTimesFromTutor,
        updateTutorBio,
        fetchCurrentTutor,
      }}
    >
      {children}
    </TutorContext.Provider>
  );
}

export { TutorContext, TutorProvider };
