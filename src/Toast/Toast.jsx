import React from "react";
import { CSSTransition } from "react-transition-group";
import classnames from "classnames";
import styles from "./toast.module.css";
console.log(styles);

function Toast({ message, type, duration, position, active, setActive }) {
  const ToastClassNames = {
    [styles.error]: type === "error",
    [styles.warning]: type === "warning",
    [styles.success]: type === "success",
    [styles.bleft]: position === "bleft",
    [styles.bright]: position === "bright",
    [styles.tright]: position === "tright",
    [styles.tleft]: position === "tleft",
  };
  return (
    <CSSTransition
      in={active}
      timeout={duration}
      classNames="toast"
      unmountOnExit
      onExit={() => setActive((state) => !state)}
    >
      <div
        className={classnames(styles.toast, ToastClassNames)}
        // className={`toast ${type ? type : "default"} toast__${
        //   position ? position : "default"
        // } `}
      >
        <div className="toast__message">{message}</div>
        <button
          className="toast__dismiss"
          onClick={() => setActive((state) => !state)}
        >
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
}

export default Toast;
