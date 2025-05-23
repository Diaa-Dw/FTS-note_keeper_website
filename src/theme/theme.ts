import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidColor: "#fefefe",
          solidBg: "#00af81",
          solidHoverBg: "#09926d",
        },
        neutral: {
          plainColor: "#08192d",
          plainHoverColor: "#0d1a3d",
          outlinedBorder: "#e4e4e7",
        },
        danger: {
          solidBg: "#ef4444",
        },
        background: {
          body: "#fefefe",
          surface: "#fefefe",
          level1: "#f5f5f5",
        },
        text: {
          primary: "#09090b",
          secondary: "#6b7280",
          tertiary: "#08192d",
        },
        divider: "#e4e4e7",
      },
    },
  },
  fontFamily: {
    body: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 500,
    },
    "body-lg": {
      fontSize: "1.8rem",
      lineHeight: 1.5,
      fontWeight: 400,
    },
    "body-md": {
      fontSize: "1.6rem",
      lineHeight: 1.5,
      fontWeight: 400,
    },
    "body-sm": {
      fontSize: "1.2rem",
      lineHeight: 1.5,
      fontWeight: 400,
    },
  },
  components: {
    JoyInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&.Mui-focused": {
            "--Input-focusedHighlight": theme.vars.palette.primary.solidBg, // your custom color here
          },
        }),
      },
    },
    JoyFormLabel: {
      styleOverrides: {
        root: () => ({
          fontSize: "1.2rem",
        }),
      },
    },
  },
});

export default theme;
