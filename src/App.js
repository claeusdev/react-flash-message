import React, { useState } from "react";
import Toast from "./Toast";
import "./App.scss";
import "./tailwind.generated.css";

function App() {
  const [active, setActive] = useState(false);
  const [type, setType] = useState("default");
  const [position, setPosition] = useState("default");
  const [timer, setTimer] = useState(2000);
  const [message, setMessage] = useState("");

  const hideToast = () => {
    setActive(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="py-12 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                React flash notifications
              </p>
              <p className="mt-4 max-w-2xl text-xl leading-7 lg:mx-auto">
                A simple React component to display flash messages
              </p>
              <p className="mt-4 max-w-2xl text-xl leading-7 lg:mx-auto">
                <a
                  href="https://github.com/claeusdev/react-flash-message"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Github
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          <select
            className="block appearance-none mb-6 w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="lang"
            onChange={({ target }) => {
              setType(target.value);
              setActive(false);
            }}
            value={type}
          >
            <option value="default">Select a type of Notification</option>
            <option value="warning">Warning</option>
            <option value="success">Success</option>
            <option value="error">Error</option>
          </select>
          <select
            className="block appearance-none mb-6 w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="lang"
            onChange={({ target }) => {
              setPosition(target.value);
              setActive(false);
            }}
            value={position}
          >
            <option value="default">Select Notification Position</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
            <option value="bleft">Bottom Left</option>
            <option value="bright">Bottom Right</option>
          </select>
          <select
            className="block appearance-none mb-6 w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="lang"
            onChange={({ target }) => {
              setTimer(target.value);
              setActive(false);
            }}
            value={timer}
          >
            <option value="2000">Select Notification Duration</option>
            <option value="4000">4000s</option>
            <option value="6000">6000s</option>
            <option value="8000">8000s</option>
          </select>
        </div>
        <textarea
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
          placeholder="Add a message to display in the component"
        />

        <div className="mt-6">
          <span className="block w-full rounded-md shadow-sm">
            <button
              type="submit"
              onClick={() => {
                console.log("here");
                hideToast();
                if (message) {
                  setActive(true);
                  window.setTimeout(hideToast, timer);
                }
              }}
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Show Notification
            </button>
          </span>
        </div>

        {active && (
          <Toast
            type={type}
            message={message}
            position={position}
            duration={8000}
          />
        )}
      </div>
    </div>
  );
}

export default App;
