import React, { useState } from "react";
import Toast from "./Toast";
import "./App.scss";

function App() {
  const [active, setActive] = useState(false);
  const [type, setType] = useState("default");
  const [position, setPosition] = useState("default");
  const [timer, setTimer] = useState(1000);
  const [message, setMessage] = useState("");

  const hideToast = () => {
    setActive(false);
  };

  const handleShowToast = (e) => {
    e.preventDefault();
    setActive(true);
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <p>React flash notifications</p>
              <p>A simple React component to display flash messages</p>
              <p>
                <a
                  href="https://github.com/claeusdev/react-flash-message"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  View on Github
                </a>
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={handleShowToast}>
          <div>
            <select
              id="lang"
              onChange={({ target }) => setType(target.value)}
              value={type}
            >
              <option value="default">Type</option>
              <option value="warning">Warning</option>
              <option value="success">Success</option>
              <option value="error">Error</option>
            </select>
            <select
              id="lang"
              onChange={({ target }) => setPosition(target.value)}
              value={position}
            >
              <option value="default">Position</option>
              <option value="tleft">Left</option>
              <option value="tright">Right</option>
              <option value="bleft">Bottom Left</option>
              <option value="bright">Bottom Right</option>
            </select>
            <select
              id="lang"
              onChange={({ target }) => setTimer(target.value)}
              value={timer}
            >
              <option value="2000">Duration</option>
              <option value="1000">1s</option>
              <option value="2000">2s</option>
              <option value="3000">3s</option>
            </select>
          </div>
          <textarea
            cols="20"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
            placeholder="Add a message to display in the component"
          />

          <div>
            <span>
              <button type="submit">Show Notification</button>
            </span>
          </div>
        </form>

        {active && (
          <Toast
            type={type}
            message={message}
            duration={3000}
            active={active}
            setActive={setActive}
            position={position}
          />
        )}
      </div>
    </div>
  );
}

export default App;
