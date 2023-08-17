import React, { createContext, useContext, useState } from "react";
import { auth, db } from "../services/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { updatePassword, updateEmail } from "firebase/auth";
import { AuthContext } from "./AuthContextProvider";
const UserContext = createContext();

function UserProvider({ children }) {
  const { setActiveUser } = useContext(AuthContext);
  // !important: fix error error: can't read uid
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
    } catch (error) {
      console.error("Error updating user email:", error.message);
    }
  };

  const updateUserPassword = async (newPassword) => {
    try {
      await updatePassword(auth.currentUser, newPassword);
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

// function useUser() {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error("useUser must be used within a UserProvider");
//   }
//   return context;
// }

export { UserProvider, UserContext };
