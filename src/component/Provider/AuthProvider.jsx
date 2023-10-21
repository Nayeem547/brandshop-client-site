import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import app from "../../firebase/firebase.config";
import { useEffect } from "react";

 export const AuthContext = createContext(null);

export const auth = getAuth(app);

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
};

const signIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
   }


   
const logOut = () => {
    setLoading(true);
    return signOut(auth);
}

  useEffect(()=>{
    const unSbscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false);
    });
    return()=>{
        unSbscribe();
    }

  }, [])        

    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        signIn,
        
     }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                   {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;