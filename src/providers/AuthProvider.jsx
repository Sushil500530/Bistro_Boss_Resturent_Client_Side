/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading,setIsLoading] = useState(true)

    const createUser = (email,password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    
    const loginUser = (email,password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
     
    const updateUserProfile = (name,photo) => {
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL:photo
        })
    }

    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const logoutUser = () => {
        setIsLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            setIsLoading(false)
            console.log('current user is ---->', currentUser);
        })
        return () => {
            unSubscriber()
        }
    },[])

    const authInfo = {
        user,
        isLoading,
        createUser,
        loginUser,
        logoutUser,
        updateUserProfile,
        googleSignIn,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;