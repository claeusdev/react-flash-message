import React, { useContext } from "react";
import Toast from "./Toast";
import styles from "./App.module.css";
import { ToastContext } from "./context/ToastContext";

function App() {
  const { state, dispatch } = useContext(ToastContext);

  const { active, type, width, position, timer, message } = state;

  const hideToast = () => {
    dispatch({ type: "SET_ACTIVE", payload: false });
  };

  const handleShowToast = (e) => {
    hideToast();
    e.preventDefault();
    if (message) {
      dispatch({ type: "SET_ACTIVE", payload: true });
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
                dispatch({ type: "SET_TYPE", payload: target.value })
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
                dispatch({ type: "SET_WIDTH", payload: target.value })
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
          <div className={styles.dropdownGroup}>
            <label htmlFor="position" className={styles.dropdownLabel}>
              Position:
            </label>
            <select
              id="position"
              onChange={({ target }) =>
                dispatch({ type: "SET_POSITION", payload: target.value })
              }
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
            <label htmlFor="duration" className={styles.dropdownLabel}>
              Duration:
            </label>
            <select
              id="duration"
              onChange={({ target }) =>
                dispatch({ type: "SET_TIMER", payload: target.value })
              }
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
          onChange={(e) =>
            dispatch({ type: "SET_MESSAGE", payload: e.target.value })
          }
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
      {active && <Toast />}
    </main>
  );
}

export default App;
