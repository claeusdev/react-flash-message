import React, { useState } from "react";
import Toast from "./Toast";
import styles from "./App.module.css";

function App() {
  const [active, setActive] = useState(false);
  const [type, setType] = useState("default");
  const [width, setWidth] = useState("default");
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
        <h1 className={styles.heading}>React flash notifications</h1>
        <p className={styles.paragraph}>
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
          <div className={styles.dropdownGroup}>
            <label htmlFor="type" className={styles.dropdownLabel}>Type:</label>
            <select
                id="type"
                onChange={({ target }) => setType(target.value)}
                value={type}
                className={styles.dropdown}
            >
                <option value="default">Default</option>
                <option value="warning">Warning</option>
                <option value="success">Success</option>
                <option value="error">Error</option>
            </select>
          </div>
          <div className={styles.dropdownGroup}>
            <label htmlFor="width" className={styles.dropdownLabel}>Width:</label>
            <select
                id="width"
                onChange={({ target }) => setWidth(target.value)}
                value={width}
                className={styles.dropdown}
            >
                <option value="default">Default</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="full">Full</option>
            </select>
          </div>
          <div className={styles.dropdownGroup}>
            <label htmlFor="position" className={styles.dropdownLabel}>Position:</label>
            <select
                id="position"
                onChange={({ target }) => setPosition(target.value)}
                value={position}
                className={styles.dropdown}
            >
                <option value="default">Default</option>
                <option value="tleft">Top Left</option>
                <option value="tright">Top Right</option>
                <option value="tcenter">Top Center</option>
                <option value="bleft">Bottom Left</option>
                <option value="bright">Bottom Right</option>
                <option value="bcenter">Bottom Center</option>
            </select>
          </div>
          <div className={styles.dropdownGroup}>
            <label htmlFor="duration" className={styles.dropdownLabel}>Duration:</label>
            <select
                id="duration"
                onChange={({ target }) => setTimer(target.value)}
                value={timer}
                className={styles.dropdown}
                aria-label="Duration in seconds"
            >                
                <option value="1000">1s</option>
                <option value="2000">2s</option>
                <option value="3000">3s</option>
            </select>
          </div>
        </div>
        <textarea
          required
          cols="20"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
          placeholder="Add a message to display in the component"
          className={styles.formControl}
          aria-label="Add message"
          aria-required
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
          width={width}
        />
      )}
    </main>
  );
}

export default App;
