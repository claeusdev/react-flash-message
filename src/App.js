import React, { useState } from "react";
import Toast from "./Toast";
import "./App.scss";
import "./tailwind.generated.css";

function App() {
  const [active, setActive] = useState(false);
  const [type, setType] = useState("default");
  const [position, setPosition] = useState("default");
  const [message, setMessage] = useState("");

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
        <textarea
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
          placeholder="Add a message to display in the component"
        ></textarea>

        <div className="mt-6">
          <span className="block w-full rounded-md shadow-sm">
            <button
              type="submit"
              onClick={() => {
                console.log("here");
                setActive(true);
              }}
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Show Notification
            </button>
          </span>
        </div>

        {active ? (
          <Toast
            type={type}
            message={message}
            position={position}
            duration={3000}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
