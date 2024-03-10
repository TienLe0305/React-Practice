import React, { useState } from "react";
import "./PasswordStrength.css";

const PasswordStrength = () => {
  const [password, setPassword] = useState("");

  const calculateStrength = () => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    if (
      password.length >= 8 &&
      hasUpperCase &&
      hasLowerCase &&
      hasDigit &&
      hasSpecialChar
    ) {
      return "Mạnh";
    } else if (
      password.length >= 6 &&
      (hasUpperCase || hasLowerCase) &&
      (hasDigit || hasSpecialChar)
    ) {
      return "Trung bình";
    } else {
      return "Yếu";
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="password-strength-checker">
      <label htmlFor="passwordInput">Password: </label>
      <input
        type="password"
        id="passwordInput"
        value={password}
        onChange={handlePasswordChange}
      />
      <p>Password Strength: {calculateStrength()}</p>
    </div>
  );
};

export default PasswordStrength;
