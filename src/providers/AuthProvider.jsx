/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading,setIsLoading] = useState(true)

    const createUser = (email,password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logoutUser = () => {
        setIsLoading(true);
        return signOut()
    }

    const userLogin = (email,password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth,currentUser)
    },[])

    const authInfo = {
        user,
        isLoading,
        createUser,
        userLogin,
        logoutUser,
        

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;