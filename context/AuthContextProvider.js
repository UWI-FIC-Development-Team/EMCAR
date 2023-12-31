import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

import { TutorContext } from "./TutorContextProvider";
import createStudent from "../builders/StudentBuilder";
import createTutor from "../builders/TutorBuilder";
import { auth, db } from "../services/firebaseConfig";
import { produce } from "immer";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const { getTutors } = useContext(TutorContext);

  const [activeUser, setActiveUser] = useState({
    name: "",
    isActive: false,
  });
  const [isTutor, setIsTutor] = useState(false);

  // This function is used to login the current user into there account

  async function login(auth_, email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth_,
        email,
        password
      );
      const user = userCredential.user;

      // Fetching user data, role, tutors, and current tutor in parallel
      await getUserRole(user.uid);
      await getUserName(user.uid);
      await getTutors();

      return true;
    } catch (error) {
      const errorMessage = error.message;
      console.error("Login error:", errorMessage);
      return false;
    }
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
      const currentUser = auth.currentUser;

      updateProfile(currentUser, {
        displayName: userName, // Set the desired display name
      })
        .then(() => {
          // Display name updated successfully
          console.log("Display name updated:", user.displayName);
        })
        .catch((error) => {
          // Handle errors, if any
          console.error("Error updating display name:", error);
        });

      const userId = user.uid;

      console.log("This is start of the function before execution");
      // Create a new Student object using the StudentBuilder
      const studentToStudentCollection = createStudent()
        .withUid(userId)
        .withEmail(email)
        .withDisplayName(userName)
        .build();

      //Todo: use updateProfile method to
      // add the properties difined below.
      const studentToUserCollection = {
        name: userName,
        email,
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
      const user = userCredential.user;

      // Update the user's display name
      const currentUser = auth.currentUser;

      updateProfile(currentUser, {
        displayName: name, // Set the desired display name
      })
        .then(() => {
          // Display name updated successfully
          console.log("Display name updated:", user.displayName);
        })
        .catch((error) => {
          // Handle errors, if any
          console.error("Error updating display name:", error);
        });

      const userId = user.uid;

      // Create a tutor object using the TutorBuilder
      const tutorToTutorCollection = createTutor()
        .withTutorId(userId)
        .withName(name)
        .withEmail(email)
        .build();

      const tutorToUserCollection = {
        name,
        email,
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
        setActiveUser({});
        setActiveUser(
          produce(activeUser, (draft) => {
            draft.name = name;
            draft.isActive = true;
          })
        );
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
        getUserName,
        getTutors,

        // loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
