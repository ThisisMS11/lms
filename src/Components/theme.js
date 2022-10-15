import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
    typography: {
        fontFamily: [
            '"Segoe UI"',
        ].join(',')
    },

    // palette vs pallete
    palette: {
        primary: {
            main: "#7cb342"
        },
        secondary: {
            main: '#000000'
        }
        ,
        navbarcolor:{
            main:"#000000"
        },
        trycolor:{
            main:'#0095da'
        }
    }
})