import React, { createContext, useContext, useState } from "react";
import { auth, db } from "../services/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { updatePassword, updateEmail } from "firebase/auth";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const updateUserProfile = async (name) => {
    try {
      await updateDoc(doc(db, "users", user.uid), {
        name: name,
      });
      setUser((prevUser) => ({ ...prevUser, name }));
    } catch (error) {
      console.error("Error updating user profile:", error.message);
    }
  };

  const updateUserEmail = async (newEmail) => {
    try {
      await updateEmail(auth.currentUser, newEmail);
      setUser((prevUser) => ({ ...prevUser, email: newEmail }));
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
        user,
        updateUserProfile,
        updateUserEmail,
        updateUserPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUser };
