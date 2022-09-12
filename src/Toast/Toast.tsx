import React from "react";
import { CSSTransition } from "react-transition-group";
// @ts-ignore
import classnames from "classnames";
import styles from "./toast.module.css";
import { ToastProps } from "../utils/types";

function Toast({
  message,
  width,
  type,
  duration,
  position,
  active,
  setActive,
}: ToastProps) {
  const ToastClassNames = {
    [styles.error]: type === "error",
    [styles.warning]: type === "warning",
    [styles.success]: type === "success",
    [styles.default]: type === "default",
    [styles.bleft]: position === "bleft",
    [styles.bright]: position === "bright",
    [styles.tright]: position === "tright",
    [styles.tleft]: position === "tleft",
    [styles.tcenter]: position === "tcenter",
    [styles.bcenter]: position === "bcenter",
    [styles.bcenter]: position === "bcenter",
    [styles.fullWidth]: width === "full",
    [styles.smallWidth]: width === "small",
    [styles.mediumWidth]: width === "medium",
    [styles.largeWidth]: width === "large",
  };
  return (
    // @ts-ignore
    <CSSTransition
      in={active}
      timeout={duration}
      classNames="toast"
      unmountOnExit
      onExit={() => setActive(!active)}
    >
      <div className={classnames(styles.toast, ToastClassNames)}>
        <div className={styles.toastMessage}>{message}</div>
        <button
          className={styles.toastDismiss}
          onClick={() => setActive(!active)}
        >
          &#10005;
        </button>
      </div>
    </CSSTransition>
  );
}

export default Toast;
