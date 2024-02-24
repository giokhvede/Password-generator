import React from "react";

const PasswordStrengthindicator = ({ password = "" }) => {
  const getPasswordStrength = () => {
    const passwordLenght = password.length;

    if (passwordLenght < 1) {
      return "";
    } else if (passwordLenght < 6) {
      return "Poor";
    } else if (passwordLenght < 8) {
      return "Normal";
    } else if (passwordLenght < 10) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  };

  const passwordStrength = getPasswordStrength();
  if (!passwordStrength) return <React.Fragment />;

  return (
    <div className="password-strength">
      Password Strength: <span>{passwordStrength}</span>
    </div>
  );
};

export default PasswordStrengthindicator;
