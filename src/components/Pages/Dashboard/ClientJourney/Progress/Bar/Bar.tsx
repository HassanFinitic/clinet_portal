import { Box, Typography } from "@mui/material";

interface BarProps {
  title: string;
  done: boolean;
  current: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}

export default function Bar({ title, done, current, isFirst, isLast }: BarProps) {
  let barColor = "#FF8081";
  let textColor = "#787E86";
  let boxShadow = "none";

  if (done) {
    barColor = "#0EAB60";
    textColor = "#0EAB60";
  } else if (current) {
    barColor = "#F79421";
    textColor = "#F79421";
    boxShadow = "0px 4px 12px rgba(253, 127, 1, 0.28)";
  }

  // Clip path depending on position
  let clipPath = "polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%)"; 
  if (isFirst) {
    clipPath = "polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%)"; 
  } else if (isLast) {
    clipPath = "polygon(12px 0, 100% 0, 100% 100%, 0 100%)"; 
  } else {
    clipPath = "polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)"; 

  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        width: "100%",
      }}
    >
      {/* Progress bar with angled edges */}
      <Box
        sx={{
          width: "100%",
          height: current ? "16px" : "10px",
          backgroundColor: barColor,
          clipPath: {
            xs: "none",
            sm: clipPath,
          },
          boxShadow,
        }}
      />
      <Typography
        sx={{
          fontSize: current ? "14px" : "12px",
          fontWeight: current ? "bold" : 600,
          color: textColor,
          mt: "8px",
          textAlign: "center",
          wordBreak: "break-word",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
