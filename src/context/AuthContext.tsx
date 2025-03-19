"use client";
import React, { useContext, createContext, ReactNode } from "react";
import {  getAuth, User } from "firebase/auth";
import firebase_app from "@/app/firebase/config";
import Loading from "@/app/loading";

import {useAuthState} from "react-firebase-hooks/auth"

const auth = getAuth(firebase_app);

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
  const [loading] = React.useState(false);
  const [user] = useAuthState(auth);
  console.log(user)

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ?  <Loading /> : children}
    </AuthContext.Provider>
  );
};