import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import NotFoundLight from "../assets/images/404Light.png"; 
// import NotFoundDark from "../assets/images/404Dark.png"; 
// import AppButton from "../components/ui/AppButton/AppButton";
import { 
    // useNavigate, 
    useLocation } from "react-router-dom";

const NotFound = () => {
//   const navigate = useNavigate();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const currentRoute = useLocation().pathname;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
        textAlign: "center",
      }}
    >
      <Box maxWidth={480} width="100%">
        <Box mb={4}>
          <img
            // src={isDark ? NotFoundDark : NotFoundLight}
            src="https://via.placeholder.com/150"
            alt="404 Illustration"
            style={{
              width: "100%",
              maxHeight: 240,
              objectFit: "contain",
              filter: isDark ? "brightness(0.8)" : "none",
            }}
          />
        </Box>

        <Typography variant="body2" color="colors.secondary" mb={3}>
          This Route <b>{currentRoute}</b> you're looking for doesn't exist or has been moved.<br />
          Double check the URL or head back to the dashboard.
        </Typography>

        {/* <AppButton
          type="primary"
          text="Back to Home"
          onClick={() => navigate("/dashboard")}
        /> */}
      </Box>
    </Box>
  );
}

export default NotFound