import React from "react";
import styles from ".././App.module.css";
import { Timer, TimeSelectorProps } from "../utils/types";

const TimerSelector = ({ setTimer, timer }: TimeSelectorProps) => {
  return (
    <>
      <div className={styles.dropdownGroup}>
        <label htmlFor="duration" className={styles.dropdownLabel}>
          Duration:
        </label>
        <select
          id="duration"
          onChange={({ target }) => setTimer(target.value as unknown as Timer)}
          value={timer}
          className={styles.dropdown}
          aria-label="Duration in seconds"
        >
          <option value={1000}>1s</option>
          <option value={2000}>2s</option>
          <option value={3000}>3s</option>
        </select>
      </div>
    </>
  );
};

export default TimerSelector;
