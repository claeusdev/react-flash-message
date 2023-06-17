import React, { createContext, useReducer } from "react";

const initialState = {
  active: false,
  type: "default",
  width: "default",
  position: "default",
  timer: 1000,
  message: "",
};

const toastReducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE":
      return {
        ...state,
        active: action.payload,
      };
    case "SET_TYPE":
      return {
        ...state,
        type: action.payload,
      };
    case "SET_WIDTH":
      return {
        ...state,
        width: action.payload,
      };
    case "SET_POSITION":
      return {
        ...state,
        position: action.payload,
      };
    case "SET_TIMER":
      return {
        ...state,
        timer: action.payload,
      };
    case "SET_MESSAGE":
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export const ToastContext = createContext();

export const ToastContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, initialState);

  return (
    <ToastContext.Provider value={{ state, dispatch }}>
      {children}
    </ToastContext.Provider>
  );
};
