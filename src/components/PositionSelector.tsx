import React from "react";
import styles from ".././App.module.css";
import { Position, PositionSelectorProps } from "../utils/types";

const PositionSelector = ({ setPosition, position }: PositionSelectorProps) => {
  const positions = [
    { value: "default", title: "Default" },
    { value: "tleft", title: "Top Left" },
    { value: "tright", title: "Top Right" },
    { value: "tcenter", title: "Top Center" },
    { value: "bleft", title: "Bottom left" },
    { value: "bright", title: "Bottom Right" },
    { value: "bcenter", title: "Bottom Center" },
  ];

  return (
    <>
      {" "}
      <div className={styles.dropdownGroup}>
        <label htmlFor="position" className={styles.dropdownLabel}>
          Position:
        </label>
        <select
          id="position"
          onChange={({ target }) =>
            setPosition(target.value as unknown as Position)
          }
          value={position}
          className={styles.dropdown}
        >
          {positions.map(
            ({ value, title }: { value: string; title: string }) => (
              <option value={value}>{title}</option>
            )
          )}
        </select>
      </div>{" "}
    </>
  );
};

export default PositionSelector;
