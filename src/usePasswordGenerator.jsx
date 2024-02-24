import { useState } from "react";

const usePasswordGenerator = () => {
  const [password, Setpassword] = useState("");
  const [errorMessage, SetErrorMessage] = useState("");

  const generatePassword = (checkBoxData, length) => {
    let charSet = "";
    let generatedPassword = "";
    const selectedOptions = checkBoxData.filter((checkbox) => checkbox.state);

    if (selectedOptions.length === 0) {
      SetErrorMessage("Select at least one option.");
      Setpassword("");
      return;
    }

    selectedOptions.forEach((option) => {
      switch (option.title) {
        case "inclide UpperCase Letters":
          charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "inclide LowerCase Letters":
          charSet += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "inclide Numbers":
          charSet += "0123456789";
          break;
        case "inclide Symbols":
          charSet += "!@#$%^&*()_-+=[]{}|;:,.<>?";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }

    Setpassword(generatedPassword);
    SetErrorMessage("");
  };

  return { password, errorMessage, generatePassword };
};

export default usePasswordGenerator;
