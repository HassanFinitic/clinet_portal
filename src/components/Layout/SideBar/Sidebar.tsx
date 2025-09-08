import { Box, Typography, Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { sidebarItems } from "./sidebarData";
import { MdLogout } from "react-icons/md";
import logo from "../../../assets/images/logo.png";
import i18n from "i18next";
import { useNavigate } from "react-router-dom";
import SidebarItemComponent from "./SidebarItemComponent";
import AppIcon from "../../_UI/AppIcon/AppIcon";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";



const Sidebar = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}) => {


  const navigate = useNavigate();
  const [direction, setDirection] = useState(i18n.dir());

  useEffect(() => {
    const updateDir = () => setDirection(i18n.dir());
    i18n.on("languageChanged", updateDir);

    return () => {
      i18n.off("languageChanged", updateDir);
    };
  }, []);

  return (
    <Box
      sx={{
        width: collapsed ? "62px" : "260px",
        backgroundColor: "background.paper",
        borderRight:"1px solid",
        borderRightColor:"background.default",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "width 0.2s ease",
        position: "fixed",
        zIndex: 1000,
      }}
    >
      {/* Header */}
      <Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={2}
        //   position="relative"
        >
          <img
            src={logo}
            alt="logo"
            style={{ width: collapsed ? 40 : 90, height: "auto" }}
          />
          <Box
            position="absolute"
            sx={{
            //   [direction === "rtl" ? "left" : "right"]: "-40px",
              [direction === "rtl" ? "left" : "right"]: "-12px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            {!collapsed && (
            <AppIcon
                icon={
                    direction === "rtl" ?
                        <FaArrowAltCircleRight size={24} /> :
                        <FaArrowAltCircleLeft size={24} />
                }
                tooltip="Toggle Menu"
                onClick={() => setCollapsed(true)}
            />
            )}
            {collapsed && (
            <AppIcon
                icon={
                    direction === "rtl" ?
                        <FaArrowAltCircleLeft size={24} /> :
                        <FaArrowAltCircleRight size={24} />
                }
                tooltip="Toggle Menu"
                onClick={() => setCollapsed(false)}
            />
            )}
          </Box>
        </Box>

        {/* Menu Items */}
        <Box>
          {sidebarItems
            .map((item, idx) => (
              <SidebarItemComponent
                key={idx}
                item={item}
                collapsed={collapsed}
              />
            ))}
        </Box>
      </Box>

      {/* Footer - User Info */}
      <Box
        p={2}
        display="flex"
        alignItems="center"
        gap={collapsed ? 0 : 0.5}
        sx={{
          flexDirection: collapsed ? "column" : "row",
        }}
      >
        <Avatar sx={{ width: 28, height: 28 }} />
        {!collapsed && (
          <Box flex={1}>
            <Typography fontSize={12} fontWeight={600}>
              abdelrahman
            </Typography>
            <Typography fontSize={10} color="colors.secondary">
              abdelrahman@example.com
            </Typography>
          </Box>
        )}        
        <AppIcon
          icon={<MdLogout size={18} />}
          tooltip="Logout"
          onClick={() => navigate("/login")}
        />
      </Box>
    </Box>
  );
};

export default Sidebar;
