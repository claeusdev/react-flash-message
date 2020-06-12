import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./App.scss";

function Toast({ message, type, duration }) {
  const [active, setActive] = useState(true);

  return (
    <CSSTransition
      in={active}
      timeout={duration}
      classNames="toast"
      unmountOnExit
      onExit={() => setActive(false)}
    >
      <div className={`toast ${type ? type : "default"} `}>
        <div className="toast__message">{message}</div>
        <button className="toast__dismiss" onClick={() => setActive(false)}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
}
function App() {
  const [active, setActive] = useState(false);
  const [type, setType] = useState("default");

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
      <button
        className="button"
        onClick={() => {
          console.log("here");
          setActive(true);
        }}
      >
        Show Toast
      </button>

      {active ? (
        <Toast type={type} message="Warning message" duration={3000} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
