import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const checkBoxData = [
    { title: "inclide UpperCase Letters", state: false },
    { title: "inclide LowerCase Letters", state: false },
    { title: "inclide Numbers", state: false },
    { title: "inclide Symbols", state: false },
  ];

  return (
    <div className="container">
      <div className="header">
        <div className="title">dsf#4fd</div>
        <button className="copyBtn" onClick={() => {}}>
          Copy
        </button>
      </div>
      <div className="charLenght">
        <span>
          <label htmlFor="">Character Lenght</label>
          <label htmlFor="">4</label>
        </span>
        <input
          type="range"
          min={4}
          max={20}
          // onChange={}
          // value={}
        />
      </div>
      <div className="checkboxses">
        {checkBoxData.map((item, index) => {
          return (
            <div key={index}>
              <input type="checkbox" checked={item.state} />
              <label htmlFor="">{item.title}</label>
            </div>
          );
        })}
      </div>
      {/* <div></div> strenght */}
      <button
        className="generateBtn"
        // onClick={}
      >
        Generate Password
      </button>
    </div>
  );
}

export default App;
