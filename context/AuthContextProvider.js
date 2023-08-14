import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

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

import createStudent from "../builders/StudentBuilder";
import createTutor from "../builders/TutorBuilder";

import { TutorContext } from "./TutorContextProvider";

const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext)
// }

function AuthProvider({ children }) {
  const { getTutors, getCurrentTutor } = useContext(TutorContext);

  const [activeUser, setActiveUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTutor, setIsTutor] = useState(false);
  const [dataSent, setDataSent] = useState(false);

  // This function is used to login the current user into there account

  function login(auth_, email, password) {
    signInWithEmailAndPassword(auth_, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        getUserName(user.uid);
        getUserRole(user.uid);

        getTutors();

        console.log("this user is a tutor", isTutor);
        getCurrentTutor(user.uid);

        return true;
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error("Login error:", errorMessage);
      });
  }

  // sign user out of their account
  function signOut() {
    return auth.signOut();
  }

  // create a new student account
  const createStudentAccount = async (email, password, userName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userId = user.uid;

      console.log("This is start of the function before execution");
      // Create a new Student object using the StudentBuilder
      const studentToStudentCollection = createStudent()
        .withUid(userId)
        .withEmail(email)
        .withDisplayName(userName)
        .build();

      const studentToUserCollection = {
        name: userName,
        email: email,
      };

      console.log(
        "This is the student object: ",
        studentToStudentCollection,
        studentToUserCollection
      );

      // Add the student student to the student collection
      const studentToStudentRef = doc(db, "students", userId);
      await setDoc(studentToStudentRef, studentToStudentCollection);

      // add the student to the user collection
      const studentToUserRef = doc(db, "users", userId);
      await setDoc(studentToUserRef, studentToUserCollection);

      await getUserName(userId);
      return userCredential;
    } catch (error) {
      console.error("Registration error:", error.message);
      // Handle the error as needed
    }
  };

  // Get the user role
  const getUserRole = async (currentUserId) => {
    try {
      // Fetch the user data from Firestore based on the provided user ID
      const userRef = doc(db, `users/${currentUserId}`);
      const userDoc = await getDoc(userRef);

      // Check if the user document exists and has the isTutor field set to true
      if (userDoc.exists && userDoc.data().role === "tutor") {
        setIsTutor(true);
        return true;
      } else {
        setIsTutor(false);
        return false;
      }
    } catch (error) {
      console.error(
        "Error while checking if the user is a tutor:",
        error.message
      );
      return false;
    }
  };

  // Function to create a tutor account
  const createTutorAccount = async (email, password, name) => {
    try {
      // Create the tutor account in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userId = userCredential.user.uid;
      // Create a tutor object using the TutorBuilder
      const tutorToTutorCollection = createTutor()
        .withTutorId(userId)
        .withName(name)
        .withEmail(email)
        .build();

      const tutorToUserCollection = {
        name: name,
        email: email,
        role: "tutor",
      };

      // Add the tutor data to the "tutors" collection in Firestore with the user ID as the document ID
      const tutorToTutorRef = doc(db, "tutors", userId);
      await setDoc(tutorToTutorRef, tutorToTutorCollection);

      // Add the tutor data to the "tutors" collection in Firestore with the user ID as the document ID
      const tutorToUserRef = doc(db, "users", userId);
      await setDoc(tutorToUserRef, tutorToUserCollection);

      return userCredential;
    } catch (error) {
      console.error("Error while creating tutor account:", error.message);
      // Handle the error as needed
    }
  };

  const getUserName = async (currentUserId) => {
    try {
      // Fetch the user data from Firestore based on the provided user ID
      const userRef = doc(db, `users/${currentUserId}`);

      const userDoc = await getDoc(userRef);

      // Check if the user document exists and has the display_name field
      if (userDoc.exists && userDoc.data().name) {
        const name = userDoc.data().name;
        setActiveUser(name);
      }
    } catch (error) {
      console.error(
        "Error while checking if the user is a tutor:",
        error.message
      );
      return false;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
      } else {
        console.log("User is signed out");
      }
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        createStudentAccount,
        createTutorAccount,
        login,
        signOut,
        getUserRole,
        isTutor,
        activeUser,
        setActiveUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
