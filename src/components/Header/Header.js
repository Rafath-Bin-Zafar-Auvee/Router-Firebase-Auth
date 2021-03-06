import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import "../hooks/useFirebase.js";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "firebase.init";
// import useFirebase from "../hooks/useFirebase.js";

const auth = getAuth(app)

const Header = () => {
  // const { user, handleSignOut } = useFirebase();
  const [user] = useAuthState(auth);
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        
        <Link to="/account">Account</Link>
        <Link to="/register">Register</Link>
     
        {user?.uid ? (
          <button onClick={() => signOut(auth)}>Sign Out</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
      <br />
      <br />
      <span>Hello! {user?.displayName && user.displayName}</span>
    </div>
  );
};

export default Header;
