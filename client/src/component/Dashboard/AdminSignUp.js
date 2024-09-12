import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFormValidation from "../../hooks/useFormValidation";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "../../App.css";
import { useCreateNewUserMutation } from "../../lib/apis/userApi";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [type, setType] = useState("");

  const navigate = useNavigate();

  const [createNewUser, { isLoading, error, isSuccess, isError }] = useCreateNewUserMutation();

  const { formIsValid, formError } = useFormValidation(
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    type
  );

  const submitFormHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      console.log("Form is not valid. Cannot submit.");
      return;
    }
    return createNewUser({firstName, lastName, email, password, confirmPassword, type});
  }

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);


  return (
    <form onSubmit={submitFormHandler} className="text-center m-auto form_holder">
      <h4 className="mt-4 fw-bold fs-2 fst-italic" style={{ color: " #FC8A06" }}>
        SignUp To Get Started
      </h4>
      {formError && (
        <div className="alert alert-danger mt-5" role="alert">
          {typeof formError === "string" ? formError : JSON.stringify(formError)}
        </div>
      )}
      {isError && (
        <div className="alert alert-danger mt-5" role="alert">
          {typeof error === "string" ? error : JSON.stringify(error)}
        </div>
      )}
      <div className="mb-4">
        <input
          type="text"
          className="form-control fw-bold"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          className="form-control fw-bold"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          required
        />
      </div>
      <div className="mb-4">
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

      <div className="mb-4 position-relative">
        <input
          type={showPassword ? "text" : "password"}
          className="form-control fw-bold"
          id="password"
          placeholder="Create password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button
          type="button"
          className="btn btn-transparent position-absolute end-0 top-0 mt-auto me-2"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
        </button>
      </div>
      <div className="mb-4 position-relative">
        <input
          type={showConfirmPassword ? "text" : "password"}
          className="form-control fw-bold"
          id="confirmPassword"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />
        <button
          type="button"
          className="btn btn-transparent position-absolute end-0 top-0 mt-auto me-2"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
        </button>
      </div>
      <div className="mb-4">
        <select
          className="form-select fw-bold"
          name="type"
          value={type}
          onChange={(event) => setType(event.target.value)}
          required
        >
          <option value="admin">Customer</option>
          <option value="rider">Rider</option>
        </select>
      </div>
      
      <button
        type="submit"
        className="btn fw-medium fs-6 "
        style={{ backgroundColor: " #FC8A06", color: "white", width: "40%", margin: "auto", borderRadius: "5px" }}
        disabled={isLoading}
      >
        {isLoading ? "Signing Up..." : "Signup"}
      </button>
    
      <p className="mt-3 fw-medium ">
        Already have an account?{" "}
        <Link className="text-decoration-none fs-6" to="/auth/login">
          Login
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
