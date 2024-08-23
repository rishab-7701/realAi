import React,{forwardRef} from "react";
import { useState } from "react";
import { Button, CircularProgress, Container, TextField, Typography } from "@mui/material";
import "./Landing.css";

export const Landing = forwardRef((props,ref) => {
  // set Prompt for searching...
  const [prompt, setPrompt] = useState("");
  const [response200, setResponse200] = useState(false);
  const [loading,setLoading] = useState(false);
  const [createdIMG, setCreatedIMG] = useState(
    "https://bsmedia.business-standard.com/_media/bs/img/article/2022-09/08/full/1662657385-7641.jpg"
  );

  // checking for correct flow.
  const check = () => {
    setLoading(true);
    setTimeout(() => {
      setResponse200(true);
      setLoading(false);
      console.log(prompt);
    }, 2000); // Simulate an Api call
  };

  // generateImage
  const generateImage = async () => {
    try {
      // iske andar ka bas code lena hai ui wala kaam ho gya h!
    } catch (err) {}
  };

//   return (
//     <div ref={ref} className="main-body">  
//      <Container className="landing-container">
//         <div className="typography-header"> Enter the Prompt here </div>
//         <TextField
//           label="Prompt"
//           variant="outlined"
//           fullWidth
//           multiline
//           rows={4}
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           // sx={{ mb : 2 }}
//           className="textField"
//         />

//          <br />
//          <Button
//            className="button"
//            onClick={check}
//            disabled={loading} 
//          >
//           {loading ? <CircularProgress size ={24} /> : "Generate"}
//          </Button>
          
//          <br />
//          <br />

//           {response200 && (
//             <img src={createdIMG} alt="Generated" className="createdimg"/>
//           )}
//      </Container>
//      </div> 
//   );
// });


// export default Landing;

return (
  <div ref={ref} className="main-body">
    <div className="landing-container">
      <div className="typography-header">Enter Prompt </div>
      <textarea
        placeholder="Input text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="textField"
        rows={4}
      />
      <br />
      <button
        className="button"
        onClick={check}
        disabled={loading}
      >
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