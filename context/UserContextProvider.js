import React, { createContext, useContext, useState } from "react";
import { auth, db } from "../services/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { updatePassword, updateEmail } from "firebase/auth";
import { AuthContext } from "./AuthContextProvider";
import { LogBox } from "react-native";
const UserContext = createContext();

function UserProvider({ children }) {
  const { setActiveUser } = useContext(AuthContext);
  const userId = auth.currentUser?.uid;

  const updateUserProfile = async (name) => {
    try {
      await updateDoc(doc(db, "users", userId), {
        name: name,
      });
      setActiveUser(name);
    } catch (error) {
      console.error("Error updating user profile:", error.message);
    }
  };

  const updateUserEmail = async (newEmail) => {
    try {
      await updateEmail(auth.currentUser, newEmail);
      console.log(" your email has been updated");
    } catch (error) {
      console.error("Error updating user email:", error.message);
    }
  };

  const updateUserPassword = async (newPassword) => {
    try {
      await updatePassword(auth.currentUser, newPassword);

      console.log(" your password  has been updated");
    } catch (error) {
      console.error("Error updating user password:", error.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        updateUserProfile,
        updateUserEmail,
        updateUserPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
