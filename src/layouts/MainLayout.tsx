import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Layout/SideBar/Sidebar";
import Header from "../components/Layout/Header/Header";

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Box display="flex">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Box sx={{ flex: 1 }}>
        <Header collapsed={collapsed} />
        <Box sx={{
          marginTop: "110px",
          marginInlineStart: collapsed ? "80px" : "280px",
          marginInlineEnd: "18px",
        }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;