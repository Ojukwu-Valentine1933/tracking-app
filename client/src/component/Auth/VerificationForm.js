import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VerificationForm = () => {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState("");

  const handleChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform verification logic here
    navigate("/auth/login");
  };

  return (
    <form onSubmit={handleSubmit} className="text-center">
        <b className="mt-4 fst-italic ">Check your Email for  Verification Code </b>
      <div className="mb-3 mt-4">
        <input
          type="text"
          className="form-control fw-bold"
          placeholder="Verification Code "
          value={verificationCode}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary fw-medium fs-6 " style={{ color:"white", width:"40%", margin:"auto", borderRadius:"5px", }}>
        Login
      </button>  
    </form>
  );
};

export default VerificationForm;
