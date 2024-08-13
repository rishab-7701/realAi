import React from "react";
import { useState } from "react";
// import "./index.css";
import { Button, CircularProgress, Container, TextField, Typography } from "@mui/material";
import Header from "./Header";
import "./Landing.css";

export const Landing = () => {
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

  return (
    <>
    
    <div className="main-body">  
     <Container className="landing-container">
        {/* <Typography variant="h3" component='h1' gutterBottom color='inherit' className="typography-header">
           Write the Prompt   
        </Typography> */}
        <div className="typography-header"> Enter the Prompt here </div>
        <TextField
          label="Prompt"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          // sx={{ mb : 2 }}
          className="textField"
        />

         <br />
         <Button
           className="button"
           onClick={check}
           disabled={loading} 
         >
          {loading ? <CircularProgress size ={24} /> : "Generate"}
         </Button>
          
         <br />
         <br />

          {response200 && (
            <img src={createdIMG} alt="Generated" className="createdimg"/>
          )}
     </Container>
     </div> 
    </>
  );
};


export default Landing;




// import React, { useState } from "react";
// import { Button, CircularProgress, Container, TextField, Typography, AppBar, Toolbar, IconButton, CssBaseline } from "@mui/material";
// import { Brightness4, Brightness7 } from '@mui/icons-material';
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import "./Landing.css";  // Import your CSS file

// export const Landing = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [prompt, setPrompt] = useState("");
//   const [response200, setResponse200] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [createdIMG, setCreatedIMG] = useState(
//     "https://bsmedia.business-standard.com/_media/bs/img/article/2022-09/08/full/1662657385-7641.jpg"
//   );

//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? "dark" : "light",
//     },
//   });

//   const check = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setResponse200(true);
//       setLoading(false);
//       console.log(prompt);
//     }, 2000);
//   };

//   const generateImage = async () => {
//     try {
//       // API call to generate image
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <AppBar position='static' className="appBar">
//         <Container>
//           <Toolbar>
//             <Typography variant='h3' className="title">
//               Real@i
//             </Typography>
//             <IconButton
//               sx={{ ml: 1 }}
//               onClick={() => setDarkMode(!darkMode)}
//               color='inherit'
//             >
//               {darkMode ? <Brightness7 /> : <Brightness4 />}
//             </IconButton>
//           </Toolbar>
//         </Container>
//       </AppBar>

//       <Container>
//         <Typography className="typography-header">
//           Write the Prompt
//         </Typography>
//         <TextField
//           label="Prompt"
//           variant="outlined"
//           fullWidth
//           multiline
//           rows={4}
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           className="textField"
//         />

//         <br />
//         <Button
//           className="button"
//           onClick={check}
//           disabled={loading}
//         >
//           {loading ? <CircularProgress size={24} className="circularProgress" /> : "Generate"}
//         </Button>

//         <br />
//         <br />

//         {response200 && (
//           <img src={createdIMG} alt="Generated" className="createdimg" />
//         )}
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default Landing;
