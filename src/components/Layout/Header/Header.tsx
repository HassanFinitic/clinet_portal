import { Box } from "@mui/material";
import LanguageSwitcher from "../../Setting/LanguageSwitcher/LanguageSwitcher";
import ModeToggle from "../../Setting/ModeToggle/ModeToggle";
import Notification from "../../Setting/Notification/Notification";
import Products from "./Products/Products";

const Header = ({collapsed}: {collapsed: boolean}) => {
  return (
    <Box
      sx={{
        padding: "8px 16px",
        backgroundColor: "background.paper",
        display: "flex",
        justifyContent: "space-between",
        // paddingInlineStart: collapsed ? "120px" : "320px",
        paddingInlineStart: collapsed ? "70px" : "270px",
        alignItems: "center",
        position: "fixed",
        width: "100%",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.1)",
        zIndex: 999,
      }}
    >
        <Box>
            <Products />
        </Box>
        <Box 
        sx={{
            display: "flex",
            gap: 1,
        }}
        >
            <LanguageSwitcher />
            <ModeToggle />
            <Notification />
        </Box>
    </Box>
  );
};

export default Header;