import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Typography, Collapse, Tooltip } from "@mui/material";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import type { SidebarItem } from "./SidebarItem";

const SidebarItemComponent = ({
  item,
  collapsed,
}: {
  item: SidebarItem;
  collapsed: boolean;
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const hasDropdown = item.dropDown && item.dropDown.length > 0;
  const location = useLocation();

  const isActive = (link: string) => location.pathname.startsWith(link);

  const Content = (
    <Box
      component={hasDropdown ? "div" : Link}
      to={!hasDropdown ? item.link : ""}
      display="flex"
      alignItems="center"
      justifyContent={collapsed ? "center" : "space-between"}
      px={2}
      py={1.5}
      mx={collapsed ? "5px" : 1}
      sx={{
        cursor: "pointer",
        backgroundColor: isActive(item.link)
          ? theme.palette.action.selected
          : "transparent",
        "&:hover": { backgroundColor: theme.palette.action.hover },
        textDecoration: "none",
        color: isActive(item.link)
          ? "colors.primary"
          : "colors.secondary",
        border: "1px solid transparent",
        borderRadius: "16px",
        marginTop: "4px",
      }}
      onClick={() => hasDropdown && setOpen((prev) => !prev)}
    >
      <Box display="flex" gap={collapsed ? 0 : 1.5} alignItems="center">
        {isActive(item.link) && (item.activeIconLight || item.activeIconDark)
          ? theme.palette.mode === "dark"
            ? item.activeIconDark ?? item.icon
            : item.activeIconLight ?? item.icon
          : item.icon}
        {!collapsed && (
          <Typography fontSize={14} fontWeight={500}>
            {t(`sidebar.${item.page}`)}
          </Typography>
        )}
      </Box>
      {!collapsed && hasDropdown && (
        isActive(item.link)
          ? <MdExpandLess />
          : <MdExpandMore />
      )}
    </Box>
  );

  return (
    <Box>
      {collapsed && item.tooltip ? (
        <Tooltip title={t(`sidebar.${item.tooltip}`)} placement="right">
          <Box>{Content}</Box>
        </Tooltip>
      ) : (
        Content
      )}

      {hasDropdown && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box paddingInlineStart={4}>
            {item.dropDown?.map((sub, idx) => {
              const SubItem = (
                <Link
                  to={sub.link}
                  key={idx}
                  style={{ textDecoration: "none" }}
                > 
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={1.5}
                    px={collapsed ? "2px" : 2}
                    py={1}
                    // mx={collapsed ? "5px" : 2}
                    sx={{
                      cursor: "pointer",
                      backgroundColor: isActive(sub.link)
                        ? theme.palette.action.selected
                        : "transparent",
                      color: isActive(sub.link)
                        ? "colors.primary"
                        : "colors.secondary",
                      border: "1px solid transparent",
                      borderRadius: "16px",
                      marginTop: "4px",
                      marginRight:'5px',
                      "&:hover": { backgroundColor: theme.palette.action.hover },

                    }}
                  >
                    {isActive(sub.link) && (sub.activeIconLight || sub.activeIconDark)
                      ? theme.palette.mode === "dark"
                        ? sub.activeIconDark ?? sub.icon
                        : sub.activeIconLight ?? sub.icon
                      : sub.icon
                    }
                    {!collapsed && (
                      <Typography fontSize={14} fontWeight={400}>
                        {t(`sidebar.${sub.page}`)}
                      </Typography>
                    )}
                  </Box>
                </Link>
              );

              return collapsed && sub.tooltip ? (
                <Tooltip key={idx} title={t(`sidebar.${sub.tooltip}`)} placement="right">
                  <Box>{SubItem}</Box>
                </Tooltip>
              ) : (
                SubItem
              );
            })}
          </Box>
        </Collapse>
      )}
    </Box>
  );
};

export default SidebarItemComponent;