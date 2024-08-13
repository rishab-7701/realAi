import { Brightness4, Brightness7,} from '@mui/icons-material';
import { AppBar, Container, Typography,Toolbar, IconButton, CssBaseline} from '@mui/material'
import { makeStyles} from "@mui/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import React, { useState } from 'react';


const useStyles = makeStyles(() => ({
    title:{
        flex:1,
        color:"#FFD35A",
        fontSize:40,
        textAlign:"left",
        fontWeight:"bold",
        cursor:"pointer",
    },
    appBar:{
       backgroundColor:"#73BBA3"
    },
}));

    const Header = () => {
    // const [darkMode,setDarkMode] = useState(false);
    const classes = useStyles();
    // const theme = createTheme({
    //     palette:{
    //         mode: darkMode? "dark" : "light",
    //     },
    // });

  return (
    // <ThemeProvider backgroundColor='#BB9AB1' theme={theme}>
    //     <CssBaseline/>
        <AppBar position='static' className={classes.appBar} color='inherit'>
            <Container>
            <Toolbar>
                <Typography variant='h3'className={classes.title}>
                    real@i        
                </Typography>
                {/* <IconButton
                sx={{ml:1}}
                onClick={() => setDarkMode(!darkMode)}
                color='inherit'
                >
                {darkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton> */}
            </Toolbar>
            </Container>
            <Container>
                <Typography variant='h5'>
                     
                </Typography>
            </Container>
        </AppBar>
    // </ThemeProvider>
  )
}

export default Header
