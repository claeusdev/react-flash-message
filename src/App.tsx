import React, { useState } from "react";
import Toast from "./Toast";
import styles from "./App.module.css";
import { Position, Width, Timer, Type } from "./utils/types";
import TimerSelector from "./components/TimerSelector";
import PositionSelector from "./components/PositionSelector";

function App() {
  const [active, setActive] = useState<boolean>(false);
  const [type, setType] = useState<Type>("default");
  const [width, setWidth] = useState<Width>("default");
  const [position, setPosition] = useState<Position>("default");
  const [timer, setTimer] = useState<Timer>(1000);
  const [message, setMessage] = useState<string>("");

  const hideToast = () => {
    setActive(false);
  };

  const handleShowToast = (e: React.FormEvent<HTMLFormElement>) => {
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
            <label htmlFor="type" className={styles.dropdownLabel}>
              Type:
            </label>
            <select
              id="type"
              onChange={({ target }) =>
                setType(target.value as unknown as Type)
              }
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
            <label htmlFor="width" className={styles.dropdownLabel}>
              Width:
            </label>
            <select
              id="width"
              onChange={({ target }) =>
                setWidth(target.value as unknown as Width)
              }
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
          <PositionSelector setPosition={setPosition} position={position} />

          <TimerSelector setTimer={setTimer} timer={timer} />
        </div>
        <textarea
          required
          cols={20}
          rows={5}
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
