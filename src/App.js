import React, { useContext } from "react";
import Toast from "./Toast";
import styles from "./App.module.css";
import { ToastContext } from "./context/ToastContext";
import Option from "./components/Option";

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

  const handleDispatch = (type, payload) => {
    dispatch({ type, payload });
  };

  const alertOptions = [
    { title: "Default", value: "default" },
    { title: "Warning", value: "warning" },
    { title: "Success", value: "success" },
    { title: "Error", value: "error" },
  ];

  const widthOptions = [
    { title: "Default", value: "default" },
    { title: "Small", value: "small" },
    { title: "Medium", value: "medium" },
    { title: "Large", value: "large" },
    { title: "Full", value: "full" },
  ];

  const positionOptions = [
    { title: "Default", value: "default" },
    { title: "Top Left", value: "tleft" },
    { title: "Top Right", value: "tright" },
    { title: "Top Center", value: "tcenter" },
    { title: "Bottom Left", value: "bleft" },
    { title: "Bottom Right", value: "bright" },
    { title: "Bottom Center", value: "bcenter" },
  ];

  const durationOptions = [
    { title: "1s", value: "1000" },
    { title: "2s", value: "2000" },
    { title: "3s", value: "3000" },
  ];

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
                handleDispatch("SET_TYPE", target.value)
              }
              value={type}
              className={styles.dropdown}
            >
              {alertOptions.map((option) => (
                <Option value={option.value} title={option.title} />
              ))}
            </select>
          </div>
          <div className={styles.dropdownGroup}>
            <label htmlFor="width" className={styles.dropdownLabel}>
              Width:
            </label>
            <select
              id="width"
              onChange={({ target }) =>
                handleDispatch("SET_WIDTH", target.value)
              }
              value={width}
              className={styles.dropdown}
            >
              {widthOptions.map((option) => (
                <Option value={option.value} title={option.title} />
              ))}
            </select>
          </div>
          <div className={styles.dropdownGroup}>
            <label htmlFor="position" className={styles.dropdownLabel}>
              Position:
            </label>
            <select
              id="position"
              onChange={({ target }) =>
                handleDispatch("SET_POSITION", target.value)
              }
              value={position}
              className={styles.dropdown}
            >
              {positionOptions.map((option) => (
                <Option value={option.value} title={option.title} />
              ))}
            </select>
          </div>
          <div className={styles.dropdownGroup}>
            <label htmlFor="duration" className={styles.dropdownLabel}>
              Duration:
            </label>
            <select
              id="duration"
              onChange={({ target }) =>
                handleDispatch("SET_TIMER", target.value)
              }
              value={timer}
              className={styles.dropdown}
              aria-label="Duration in seconds"
            >
              {durationOptions.map((option) => (
                <Option value={option.value} title={option.title} />
              ))}
            </select>
          </div>
        </div>
        <textarea
          required
          cols="20"
          rows="5"
          value={message}
          onChange={(e) => handleDispatch("SET_MESSAGE", e.target.value)}
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
          message={message}
          width={width}
          type={type}
          timer={timer}
          position={position}
          active={active}
          setActive={hideToast}
        />
      )}
    </main>
  );
}

export default App;
