import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Landing } from "./Landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>
        An ai generated web application for Realistic Images with user defined
        prompts!!
      </h1>
      <Landing />
    </>
  );
}

export default App;
