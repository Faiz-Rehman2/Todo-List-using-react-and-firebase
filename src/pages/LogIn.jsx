import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

const LogIn = () => {
  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();
  const logInUser = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <>
      <h1 className="font-bold text-center">Log In</h1>
      <form  className="m-3 flex  flex-col" onSubmit={logInUser}>
        <input className="m-3 text-center" type="email" placeholder="enter your email" ref={email} />
        <input className="m-3 text-center"type="password" placeholder="enter your password" ref={password}/>
        <button className="m-3 rounded-sm border-2 border-black border-solid">Log In</button>
        <Link to={"/"}>  <button className="m-3">Home</button></Link>
      </form>
    </>

  );
}

export default LogIn;


