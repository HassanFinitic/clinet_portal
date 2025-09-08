import { Box } from "@mui/material";

export default function AppContainer({ children }: { children: React.ReactNode }) {
    const direction = "ltr";

    return (
        <Box
            dir={direction}
            sx={{
                display: "flex",
                flexDirection: "column",
                width: {xs: "90%", md: "90%"},
                margin: "auto",
            }}
        >
            {children}
        </Box>
    );
}