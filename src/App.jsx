import { useState } from "react";
import "./App.css";
import usePasswordGenerator from "./usePasswordGenerator";
import PasswordStrengthindicator from "./components/StrenghChecker";

function App() {
  const [length, setlength] = useState(8);
  const [checkBoxData, setCheckBoxData] = useState([
    { title: "inclide UpperCase Letters", state: false },
    { title: "inclide LowerCase Letters", state: false },
    { title: "inclide Numbers", state: false },
    { title: "inclide Symbols", state: false },
  ]);

  const [copied, setCopied] = useState(false);

  const handleCheckboxChange = (i) => {
    const updatedCheckBoxData = [...checkBoxData];
    updatedCheckBoxData[i].state = !updatedCheckBoxData[i].state;
    setCheckBoxData(updatedCheckBoxData);
  };

  const hanldeCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  return (
    <div className="container">
      {password && (
        <div className="header">
          <div className="title">{password}</div>
          <button className="copyBtn" onClick={hanldeCopy}>
            {copied ? "copied" : "copy"}
          </button>
        </div>
      )}
      <div className="charLength">
        <span>
          <label htmlFor="">Character Length</label>
          <label htmlFor="">{length}</label>
        </span>
        <input
          type="range"
          min={4}
          max={20}
          onChange={(e) => setlength(e.target.value)}
          value={length}
        />
      </div>
      <div className="checkboxses">
        {checkBoxData.map((item, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(index)}
                checked={item.state}
              />
              <label htmlFor="">{item.title}</label>
            </div>
          );
        })}
      </div>
      <PasswordStrengthindicator password={password} />
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      <button
        className="generateBtn"
        onClick={() => generatePassword(checkBoxData, length)}
      >
        Generate Password
      </button>
    </div>
  );
}

export default App;
