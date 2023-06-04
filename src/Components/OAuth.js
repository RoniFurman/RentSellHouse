import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import GoogleIcon from "../assets/svg/googleIcon.svg";

function OAuth() {
  const Location = useLocation();
  const Navigate = useNavigate();
  const OnGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timeStamp: serverTimestamp(),
        });
      }
      Navigate("/");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="socialLogin">
      <p>Sing {Location.pathname === "/Sign-Up" ? "Up" : "In"} With</p>
      <button className="socialIconDiv" onClick={OnGoogleClick}>
        <img className="socialIconImg" src={GoogleIcon} alt="Google" />
      </button>
    </div>
  );
}

export default OAuth;
