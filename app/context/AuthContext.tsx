"use client";
import { auth, provider } from "@/firebase/config";
import {
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
  createUser: any;
  logout: any;
  loginUser: any;
  user: {
    logged: boolean;
    email: string | null;
    uid: string | null;
  };
  googleLogin: any
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState({
    logged: false,
    email: null,
    uid: null,
  });

  //TODO: Add types possibly (values: { email: string, password: string }): Promise<void>
  const createUser = async (values: any) => {
    await createUserWithEmailAndPassword(auth, values.email, values.password);
  };

  const loginUser = async (values: any) => {
    await signInWithEmailAndPassword(auth, values.email, values.password).catch((err) => {
      console.log(err);
    }
    );
  };

  const logout = () => {
    signOut(auth);
  };

  const googleLogin = async () => {
    await signInWithPopup(auth, provider);
  }


  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setUser({
          logged: true,
          email: user.email,
          uid: user.uid,
        });
      } else {
        setUser({
          logged: false,
          email: null,
          uid: null,
        });
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        createUser,
        loginUser,
        logout,
        googleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
