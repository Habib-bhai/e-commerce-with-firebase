"use client";
import React, { useContext, createContext, ReactNode, useEffect } from "react";
import {   onAuthStateChanged, User } from "firebase/auth";
import  { auth } from "@/app/firebase/config";
import Loading from "@/app/loading";




// Define the shape of the context value
interface AuthContextType {
  user: User | null | undefined;

}

// Create the context with a proper default value
const AuthContext = createContext<AuthContextType >({user: null});

// Custom hook to use the AuthContext
export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthContextProvider");
  }
  return context;
};

// AuthContextProvider component
export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState<User | null>(null);
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }
        setLoading(false);
    });

    return () => unsubscribe();
}, [user]);


  return (
    <AuthContext.Provider value={{ user }}>
      {loading ?  <Loading /> : children}
    </AuthContext.Provider>
  );
};