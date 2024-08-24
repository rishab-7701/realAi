import React, { forwardRef, useState } from "react";
import * as fal from "@fal-ai/serverless-client";
import "./Landing.css";

export const Landing = forwardRef((props, ref) => {
  const [prompt, setPrompt] = useState("");
  const [response200, setResponse200] = useState(false);
  const [loading, setLoading] = useState(false);
  const [createdIMG, setCreatedIMG] = useState("");

  const generateImage = async () => {
    setLoading(true);
    try {
      // Configure the API key using import.meta.env
      fal.config({
        credentials: import.meta.env.VITE_FAL_KEY,
      });

      // Submit the request
      const result = await fal.subscribe("fal-ai/lora", {
        input: {
          model_name: "stabilityai/stable-diffusion-xl-base-1.0",
          prompt: prompt,
        },
        logs: true,
        onQueueUpdate: (update) => {
          if (update.status === "IN_PROGRESS") {
            update.logs.map((log) => log.message).forEach(console.log);
          }
        },
      });

      if (result?.images && result.images.length > 0) {
        setCreatedIMG(result.images[0].url);
        setResponse200(true);
      } else {
        console.error("No image URL found in the response", result);
      }
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={ref} className="main-body">
      <div className="landing-container">
        <div className="typography-header">Enter Prompt</div>
        <textarea
          placeholder="Input text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="textField"
          rows={4}
        />
        <br />
        <button className="button" onClick={generateImage} disabled={loading}>
          {loading ? <div className="loader"></div> : "Generate"}
        </button>
        <br />
        <br />
        {response200 && (
          <img src={createdIMG} alt="Generated" className="createdimg" />
        )}
      </div>
    </div>
  );
});

export default Landing;
