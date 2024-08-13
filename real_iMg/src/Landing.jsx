import React from "react";
import { useState } from "react";
import "./index.css";

export const Landing = () => {
  // set Prompt for searching...
  const [prompt, setPrompt] = useState("");
  const [response200, setResponse200] = useState(false);
  const [createdIMG, setCreatedIMG] = useState(
    "https://bsmedia.business-standard.com/_media/bs/img/article/2022-09/08/full/1662657385-7641.jpg"
  );

  // checking for correct flow.
  const check = () => {
    setResponse200(true);
    console.log(prompt);
  };

  // generateImage
  const generateImage = async () => {
    try {
      // iske andar ka bas code lena hai ui wala kaam ho gya h!
    } catch (err) {}
  };

  return (
    <>
      <h1> Write the prompt</h1>
      <textarea
        name="Prompt"
        id="promptText"
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>
      <br />
      <button onClick={check}> Generate</button>
      <br />
      {response200 && <img src={createdIMG} className="createdimg"></img>}
    </>
  );
};
