import { Box, Typography, Tooltip } from "@mui/material";
import { MdInfo } from "react-icons/md";

interface AppInformedTitleProps {
    title: string;
    subtitle: string;
}

export default function AppInformedTitle({ title, subtitle }: AppInformedTitleProps) {
  return (
    <Box 
    sx={{ 
        display: "inline-flex", 
        alignItems: "center", 
        justifyContent: "center",
        gap: "4px",
    }}>
        <Typography sx={{
            fontSize: "12px",
            fontWeight: 400,
            color: "text.gray",
        }}>{title}</Typography>
        <Box sx={{ cursor: "pointer" }}>
            <Tooltip title={subtitle}>
                <MdInfo size={14} color="#717680"/>
            </Tooltip>
        </Box>
    </Box>
  )
}
