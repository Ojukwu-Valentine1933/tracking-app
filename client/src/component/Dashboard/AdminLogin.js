import React, { useState, useEffect } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import { useLoginUserMutation } from "../../lib/apis/authapi";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const [loginUser, { isLoading,  isSuccess,  }] = useLoginUserMutation();


  const handleSubmit = (e) => {
    e.preventDefault();

   return loginUser({email, password})

    // Perform login logic here
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);

  return (
    <form
      onSubmit={handleSubmit}
      className="text-center m-auto mt-5 form_holder"
    >
      <h3 className="mt-4 mb-4 fw-bold fs-2 fst-italic">
        Login To Get Started
      </h3>
  
      <div className="mb-3">
        <input
          type="email"
          className="form-control fw-bold"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className="mb-3 position-relative">
        <input
          type={showPassword ? "text" : "password"}
          className="form-control fw-bold"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button
          type="button"
          className="btn btn-transparent position-absolute end-0 top-0 mt-1 me-2"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
        </button>
      </div>
      <button
        type="submit"
        className="btn fw-medium fs-6 "
        style={{
          backgroundColor: " #FC8A06",
          color: "white",
          width: "40%",
          margin: "auto",
          borderRadius: "5px",
        }}
        disabled={isLoading}
      >
        {isLoading ? "Login In..." : "Login"}
      </button>{" "}
      <p className="mt-3 fw-medium ">
        Don't have an account?{" "}
        <a className="text-decoration-none fs-6" href="/auth/signup">
          Signup
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
