import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff9e0d",
    },
    secondary: {
      main: "#ff9e0d",
    },
    darkOne: {
      main: "#2c2c34",
    },
    darkTwo: {
      main: "#3D3846",
    },
    darkThree: {
      main: "#241F31",
    },
    text: {
      primary: "#ff9e0d",
    },
      colors: {
        darkOne: "#77767B",
        darkTwo: "#5E5C64",
        darkThree: "#3D3846",
        darkFour: "#241F31",
        lightTwo: "#F6F5F4",
        lightThree: "#DEDDDA",
        lightFour: "#C0BFBC",
        lightFive: "#9A9996",
        blueOne: "#3584E4",
        blueTwo: "#404490",
        blueTwoDisabled: "#55588F",
        mainGreen: "#85BD81",
        mainGreenDisabled: "#9BC098",
        mainRed: "#ED6761",
        mainYellow: "#F6D180",
        logoRed: "#CB5204",    //f89f2a try this one....original from Rasta  was CB5204
        logoYellow: "#FED006", //fed006 try this one....original from Rasta  was D2DB13
        bitcoinOrange: "#f2a900",
        yellowOne: "#ffbb0d",
        yellowTwo: "#ff9e0d",
        mainGrey: "##2c2c34",

      },
  },
  typography: {
    fontFamily: "Montserrat",
    body1: {
      fontSize: 20,

    },
    body2: {
      fontSize: 16,
    },
    body3: {
      fontSize: 16,
      color:"#2c2c34"
    },
    body4: {
      fontSize: 20,
      color: "#ff9e0d"
    },
    allVariants: {
      color: "#F6F5F4",
    },
    h4: {
      fontWeight: 600,
      fontSize: 32,
    },
    h5: {
      fontSize: 24,
      fontWeight: 500,
    },
    h6: {
      fontSize: 24,
      color: "#ff9e0d"
    },
    h7: {
      fontSize: 26,
      fontWeight: 500,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "6px 6px 20px 6px #00000096",
          borderRadius: 20,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "12px 24px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 400,
          fontSize: "1.2rem",
          padding: "10px",
          minWidth: 138,
        },
        contained: {
          boxShadow: "6px 6px 20px 6px #00000096",
        },
        containedSecondary: {
          color: "#F6F5F4",
        },

      },
    },
  },
});

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
