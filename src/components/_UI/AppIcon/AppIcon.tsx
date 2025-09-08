import { Box, Tooltip } from "@mui/material"

interface AppIconProps {
    icon: React.ReactNode;
    tooltip?: string;
    onClick?: () => void;
}

const AppIcon = ({icon, tooltip, onClick}: AppIconProps) => {
    return (
        <Tooltip title={tooltip}>
            <Box
                onClick={onClick}
                sx={{
                    maxWidth: "fit-content",
                    color: "colors.secondary",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    "&:hover": {
                        color: "primary.main",
                    }
                }}
            >
                {icon}
            </Box>
        </Tooltip>
    )
}

export default AppIcon