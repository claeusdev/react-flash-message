import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

function Toast({ message, type, duration, position, active, setActive }) {
  return (
    <CSSTransition
      in={active}
      timeout={duration}
      classNames="toast"
      unmountOnExit
      onExit={() => setActive((state) => !state)}
    >
      <div
        className={`toast ${type ? type : "default"} toast__${
          position ? position : "default"
        } `}
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
