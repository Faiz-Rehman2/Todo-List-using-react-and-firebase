import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from "react";
import { auth } from "../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();


  const SignUpUser = (event) => {
    event.preventDefault();
    // console.log(email.current.value);
    // console.log(password.current.value);

    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/login");

      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <>
      <h1 className="font-bold text-center">Sign Up</h1>
      <form  className="m-3 flex  flex-col" onSubmit={SignUpUser}>
        <input className="m-3 text-center" type="email" placeholder="enter your email" ref={email} />
        <input className="m-3 text-center" type="password" placeholder="enter your password" ref={password}/>
        <button  className="m-3 rounded-sm border-2 border-black border-solid" >SignUp</button>
        <Link to={"/"}>  <button className="m-3">Home</button></Link>

      </form>
    </>
  );
};

export default SignUp;
