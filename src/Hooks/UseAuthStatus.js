import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React from "react";

const UseAuthStatus = () => {
  const [logedIn, setLogedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogedIn(true);
        setCheckingStatus(false);
      } else {
        setLogedIn(false);
        setCheckingStatus(false);
      }
    });
  }, []);

  return { logedIn, checkingStatus };
};

export default UseAuthStatus;

//https://stackoverflow.com/quastion/65505665/protected-routes-with-react-router-v6

//https://stackoverflow.com/quastion/59780268/cleanup-memory-leaks-on-an-unmounted-component-in-react-hooks
