import React from "react";
import { CSSTransition } from "react-transition-group";
import classnames from "classnames";
import styles from "./toast.module.css";

function Toast({ message,width, type, duration, position, active, setActive }) {
  const ToastClassNames = {
    [styles.error]: type === "error",
    [styles.warning]: type === "warning",
    [styles.success]: type === "success",
    [styles.bleft]: position === "bleft",
    [styles.bright]: position === "bright",
    [styles.tright]: position === "tright",
    [styles.tleft]: position === "tleft",
    [styles.tcenter]: position === "tcenter",
    [styles.bcenter]: position === "bcenter",
    [styles.bcenter]: position === "bcenter",
    [styles.fullWidth]: width === "full"
  };
  return (
    <CSSTransition
      in={active}
      timeout={duration}
      classNames="toast"
      unmountOnExit
      onExit={() => setActive((state) => !state)}
    >
      <div className={classnames(styles.toast, ToastClassNames)}>
        <div className={styles.toastMessage}>{message}</div>
        <button
          className={styles.toastDismiss}
          onClick={() => setActive((state) => !state)}
        >
          &#10005;
        </button>
      </div>
    </CSSTransition>
  );
}

export default Toast;
