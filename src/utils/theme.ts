import { createMuiTheme } from "@mui/material";

// xexport theme mui 
export const theme = createMuiTheme({
    // edit typography for Inter 
    // create new pallete 
    palette: {
        primary: {
            main: "#ffffff",
            light: "#ffffff",
            contrastText: "#ffffff",
            dark: "#ffffff",
        },
        text: {
            primary: "#ffffff",
            secondary: "#cccccc",
        },
    },
    // card edit styles 
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: "#00000000",
                    color: "#ffffff",
                    cursor: "pointer",
                    border: ".07rem solid #00000000",
                    borderRadius: ".75rem",
                    "&:hover": {
                        backgroundColor: "#00000088",
                        border: ".07rem solid #70707088",
                    },
                    // actions area 
                    "& .MuiCardActions-root": {
                        backgroundColor: "red",
                        color: "#ffffff",
                    }
                },
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: ".75rem",
                    padding: "1rem 1.5rem",
                    boxShadow: "none",
                    textTransform: "none",
                    backgroundColor: "unset"
                }
            }
        }
    },
})