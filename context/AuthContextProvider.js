import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../services/firebaseConfig";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";

import RequestBuilder from "../builders/RequestBuilder"
import StudentBuilder from "../builders/StudentBuilder";

const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext)
// }

function AuthProvider({ children }) {
  const [activeUser, setActiveUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [isTutor, setIsTutor] = useState(false);

  // This function is used to login the current user into there account

  function login(auth_, email, password) {
    signInWithEmailAndPassword(auth_, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        const userName = getUserName(user.uid);
        checkIfUserIsTutor(user.uid);
        console.log("The current user signed in is: ", userName);
        setActiveUser(userName);
        console.log("User logged in:", user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Login error:", errorMessage);
      });
  }

  // sign user out of their account
  function signOut() {
    return auth.signOut();
  }
 // create a new student
const signUp = async (email, password, userName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const userId = user.uid;

    // Create a new Student object using the StudentBuilder
    const student = new StudentBuilder()
      .withUid(userId)
      .withEmail(email)
      .withDisplayName(userName)
      .withRole('student')
      .build();

    // Add the student data to Firestore with user ID as the document ID
    const studentRef = doc(db, "students", userId);
    await setDoc(studentRef, student);

    return userCredential;
  } catch (error) {
    console.error("Registration error:", error.message);
    // Handle the error as needed
  }
}; 


  // Get the tutor status
  const checkIfUserIsTutor = async (currentUserId) => {
    try {
      // Fetch the user data from Firestore based on the provided user ID
      const userRef = doc(db, `users/${currentUserId}`);
      const userDoc = await getDoc(userRef);

      // Check if the user document exists and has the isTutor field set to true
      if (userDoc.exists && userDoc.data().isTutor === true) {
        console.log("User is a tutor", userDoc.data().isTutor);
        setIsTutor(true);

        return true;
      } else {
        console.log("User is not a tutor", userDoc.data().isTutor);
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

  const getUserName = async (currentUserId) => {
    try {
      // Fetch the user data from Firestore based on the provided user ID
      const userRef = doc(db, `users/${currentUserId}`);
      const userDoc = await getDoc(userRef);

      // Check if the user document exists and has the display_name field
      if (userDoc.exists && userDoc.data().display_name) {
        const name = userDoc.data().display_name;
        return name
      } else {
        // Return a default value or throw an error
        return "Unknown user";
        // Or: throw new Error("User document does not exist or has no display_name");
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
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // const value = {
  //   currentUser,
  //   getUser,
  //   login,
  //   signOut,
  //   signUp
  // }

  return (
    <AuthContext.Provider
      value={{ signUp, login, signOut, checkIfUserIsTutor, isTutor }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
