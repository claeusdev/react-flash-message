import React, { useState } from "react";
import Toast from "./Toast";
import "./App.scss";

function App() {
  const [active, setActive] = useState(false);
  const [type, setType] = useState("default");
  const [message, setMessage] = useState("");

  return (
    <div className="App">
      <select
        id="lang"
        onChange={({ target }) => {
          setType(target.value);
          setActive(false);
        }}
        value={type}
      >
        <option value="default">Select a type</option>
        <option value="warning">Warning</option>
        <option value="success">Success</option>
        <option value="error">Error</option>
      </select>
      <textarea
        cols="30"
        rows="10"
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
        placeholder="Add a message to display in the component"
      ></textarea>
      <button
        className="button"
        onClick={() => {
          console.log("here");
          setActive(true);
        }}
      >
        Show Toast
      </button>

      {active ? <Toast type={type} message={message} duration={3000} /> : ""}
    </div>
  );
}

export default App;
