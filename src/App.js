import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [Tnc, setTnc] = useState(false);

  function handleData(e) {
    e.preventDefault();
    console.warn("all data", name, interest, Tnc);
  }
  return (
    <div className="main-dev">
      <div className="child-div">
        <h1> Basic Form </h1>
        <form onSubmit={handleData}>
          <input
            type="text"
            placeholder="Enter Name..."
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br /> <br />
          <select onChange={(e) => setInterest(e.target.value)}>
            <option> Netflix </option>
            <option> Amazon </option>
            <option> Hotstar </option>
            <option> Zee </option>
            <option> Mx Player </option>
          </select>
          <br />
          <br />
          <input
            type="checkbox"
            onChange={(e) => setTnc(e.target.checked)}
          />{" "}
          <span> Agree with terms & Conditions </span> <br />
          <br />
          <button type="submit"> Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
