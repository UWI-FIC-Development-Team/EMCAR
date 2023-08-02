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

import RequestBuilder from "../builders/RequestBuilder";
import createStudent from "../builders/StudentBuilder";

const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext)
// }

function AuthProvider({ children }) {
  const [activeUser, setActiveUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTutor, setIsTutor] = useState(false);

  // This function is used to login the current user into there account

  function login(auth_, email, password) {
    signInWithEmailAndPassword(auth_, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // setLoading(true)
        console.log('start');
        getUserName(user.uid)
        getUserRole(user.uid);
        console.log('end');
        return true
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
  // create a new student
  const signUp = async (email, password, userName) => {
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

      const studentToUserCollection = createStudent()
        .withEmail(email)
        .withDisplayName(userName)
        .build();

      console.log(
        "This is the student object: ",
        studentToStudentCollection,
        studentToUserCollection
      );

      // Add the student student to the student collection
      const studentToStudentRef = doc(db, "students", userId);
      await setDoc(studentToStudentRef, studentToStudentCollection);

      // add the student to the user collection
      const studentTutorRef = doc(db, "users", userId);
      await setDoc(studentTutorRef, studentToUserCollection);

      return userCredential;
    } catch (error) {
      console.error("Registration error:", error.message);
      // Handle the error as needed
    }
  };

  // Get the tutor status
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

  const getUserName = async (currentUserId) => {
    try {
      // Fetch the user data from Firestore based on the provided user ID
      const userRef = doc(db, `users/${currentUserId}`);

      const userDoc = await getDoc(userRef);

      // Check if the user document exists and has the display_name field
      if (userDoc.exists && userDoc.data().displayName) {
        const name = userDoc.data().displayName;
        setActiveUser(name)
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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in:", user.uid);
        // Redirect or navigate to the home screen
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
      value={{ signUp, login, signOut, getUserRole, isTutor,activeUser , setActiveUser, loading}}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
