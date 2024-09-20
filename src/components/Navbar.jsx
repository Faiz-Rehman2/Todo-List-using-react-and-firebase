import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-5 m-5">
      <h3>
        <Link to="">Home</Link>
      </h3>
      <h3>
        <Link to="addtodo">Add Todo List</Link>
      </h3>
      <h3>
        <Link to="login">Login</Link>
      </h3>
      <h3>
        <Link to="signup">Register</Link>
      </h3>
    </div>
  );
};

export default Navbar;
