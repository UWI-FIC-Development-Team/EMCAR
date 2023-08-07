import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../services/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const TutorContext = createContext();

function TutorProvider({ children }) {
  const [user, setUser] = useState(null);
  const [tutors, setTutors] = useState([]);

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

 

  

  return (
    <TutorContext.Provider value={{ tutors, getTutors}}>
      {children}
    </TutorContext.Provider>
  );
}

export { TutorContext, TutorProvider };
