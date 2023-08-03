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

const SessionContext = createContext();



function SessionProvider({ children }) {


 

  


  return (
    <AuthContext.Provider
      value={{}}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { SessionContext, SessionProvider };
