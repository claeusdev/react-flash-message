import React, { useState } from "react";
import Toast from "./Toast";
import styles from "./App.module.css";

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
    hideToast();
    e.preventDefault();
    if (message) {
      setActive(true);
      window.setTimeout(hideToast, timer);
    }
  };

  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <h1 classNAme={styles.heading}>React flash notifications</h1>
        <p classNAme={styles.paragraph}>
          A simple React component to display flash messages
        </p>
        <a
          href="https://github.com/claeusdev/react-flash-message"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          View on Github
        </a>
      </header>
      <form onSubmit={handleShowToast} className={styles.testForm}>
        <div className={styles.options}>
          <select
            id="lang"
            onChange={({ target }) => setType(target.value)}
            value={type}
            className={styles.dropdown}
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
            className={styles.dropdown}
          >
            <option value="default">Position</option>
            <option value="tleft">Top Left</option>
            <option value="tright">Top Right</option>
            <option value="tcenter">Top Center</option>
            <option value="bleft">Bottom Left</option>
            <option value="bright">Bottom Right</option>
            <option value="bcenter">Bottom Center</option>
          </select>
          <select
            id="lang"
            onChange={({ target }) => setTimer(target.value)}
            value={timer}
            className={styles.dropdown}
          >
            <option value="2000">Duration</option>
            <option value="1000">1s</option>
            <option value="2000">2s</option>
            <option value="3000">3s</option>
          </select>
        </div>
        <textarea
          required
          cols="20"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
          placeholder="Add a message to display in the component"
          className={styles.formControl}
        />

        <div>
          <button type="submit" className={styles.button}>
            Show Notification
          </button>
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
          width="full"
        />
      )}
    </main>
  );
}

export default App;
