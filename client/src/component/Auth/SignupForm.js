import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFormValidation from "../../hooks/useFormValidation";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "../../App.css"

const SignupForm=()=> {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form validation hook
  const { formIsValid, formError } = useFormValidation(
    firstName,
    lastName,
    email,
    mobileNumber,
    password,
    confirmPassword
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      console.log("Form is not valid. Cannot submit.");
      return;
    }
    // Perform validation and submit logic here
    navigate("/auth/verify");
  };

  return (
    <form onSubmit={handleSubmit} className="text-center m-auto form_holder">
      <h4 className="mt-4 fw-bold fs-2 fst-italic" style={{color:" #FC8A06"}}>SignUp To Get Started</h4>
      {formError && (
        <div className="alert alert-danger mt-5" role="alert">
          {typeof formError === "string" ? formError : JSON.stringify(formError)}
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
      <div className="mb-4">
        <input
          type="tel"
          className="form-control fw-bold"
          name="mobile"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(event) => setMobileNumber(event.target.value)}
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
      <button type="submit" className="btn fw-medium fs-6 " style={{backgroundColor:" #FC8A06", color:"white", width:"40%", margin:"auto", borderRadius:"5px", }}>
        Signup
      </button>
      <p className="mt-3 fw-medium ">
        Already have an account?{" "}
        <a className="text-decoration-none fs-6" href="/auth/login">Login</a>
      </p>
    </form>
  );
}

export default SignupForm;
