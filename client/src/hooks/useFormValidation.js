import { useEffect, useState, useCallback } from "react";

const useFormValidation = (
  firstName = "",
  lastName = "",
  email = "",
  password = "",
  confirmPassword = "",
  type = ""
) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [formError, setFormError] = useState("");

  const checkIfFormIsValid = useCallback(() => {
    const errors = [];

    if (!firstName.trim()) {
      errors.push("First name is required");
    }

    if (!lastName.trim()) {
      errors.push("Last name is required");
    }

    if (!email.trim()) {
      errors.push("Email is required");
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(email)
    ) {
      errors.push("Invalid email address");
    }

    if (!password.trim()) {
      errors.push("Password is required");
    } else if (password.length < 8) {
      errors.push("Password must be at least 8 characters");
    } else if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter");
    } else if (!/[a-z]/.test(password)) {
      errors.push("Password must contain at least one lowercase letter");
    } else if (!/[0-9]/.test(password)) {
      errors.push("Password must contain at least one number");
    }

    if (!confirmPassword.trim()) {
      errors.push("Confirm password is required");
    } else if (confirmPassword !== password) {
      errors.push("Passwords do not match");
    }
    if (!type.trim()) {
      errors.push("Type is required");
    }

    setFormError(errors.join(", "));
    setFormIsValid(errors.length === 0);
  }, [firstName, lastName, email, password, confirmPassword, type]);

  useEffect(() => {
    checkIfFormIsValid();
  }, [checkIfFormIsValid]);

  return { formIsValid, formError };
};

export default useFormValidation;
