import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

function Toast({ message, type, duration }) {
  const [active, setActive] = useState(true);

  return (
    <CSSTransition
      in={active}
      timeout={duration}
      classNames="toast"
      unmountOnExit
      onExit={() => setActive(false)}
    >
      <div className={`toast ${type ? type : "default"} `}>
        <div className="toast__message">{message}</div>
        <button className="toast__dismiss" onClick={() => setActive(false)}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
}

export default Toast;
