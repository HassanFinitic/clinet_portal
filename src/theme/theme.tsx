import type { PaletteMode } from "@mui/material";
import { amber } from "@mui/material/colors";

const theme = {
    palette: {
        primary: amber,
    }
};

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === "light"
        ? {
            primary: {
                main:"#1A2B56"
            },
            text: {
                main: "#000000",
                secondary: "#ffffff",
                contrastText: "#ffffff",
                gray: "#787E86",
            },
            background: {
                default: "#F4F4F4",
                red: "#FEF4F2",
                yellow: "#FDF8DC",
                green: "#E5F5ED"
            },
            colors: {
                primary: "#1A2B56",
                secondary: "#787E86",
                green: "#0EAB60",
                lightGreen: "#BAFBBA",
                red: "#FF6A55",
                lightRed: "#FBBABB",
                yellow: "#B8A906",
                lightYellow: "#FBF4BA",

                lightPurple: "#D5BAFB",
                lightBlue: "#BADEFB",
            },
            shape: {
                border: {
                    radius: {
                        card: 44,
                        button: 8,
                        item: 16,
                    },
                    color: {
                        red: "#FDE0DC",
                        green: "#CCECDC",
                        yellow: "#ECEBCC",
                        gray: "#E9EAEB",
                    }
                }
            }
        }
        : {
            primary: {
                main:"#F79421"
            },
            text: {
                main: "#ffffff",
                secondary: "#000000",
                contrastText: "#ffffff",
                gray: "#787E86",
            },
            background: {
                default: "#282828",
                red: "#FEF4F2",
                yellow: "#FDF8DC",
                green: "#E5F5ED"
            },
            colors: {
                primary: "#F79421",
                secondary: "#787E86",
                green: "#0EAB60",
                lightGreen: "#BAFBBA",
                red: "#FF6A55",
                lightRed: "#FBBABB",
                yellow: "#B8A906",
                lightYellow: "#FBF4BA",

                lightPurple: "#D5BAFB",
                lightBlue: "#BADEFB",
            },
            shape: {
                border: {
                    radius: {
                        card: 44,
                        button: 8,
                        item: 16,
                    },
                    color: {
                        red: "#FDE0DC",
                        green: "#CCECDC",
                        yellow: "#ECEBCC",
                        gray: "#E9EAEB",
                    }
                }
            }
        }),
    },
});

export default theme;