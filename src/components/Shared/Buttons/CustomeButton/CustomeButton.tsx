import { AppButton } from "../../../_UI/AppButton/AppButton";
import type { SxProps, ButtonProps } from "@mui/material";

interface CustomeButtonProps extends ButtonProps {
  sx?: SxProps;
}

export default function CustomeButton({ 
    children, 
    sx, 
    ...props 
}: CustomeButtonProps) {
  return (
    <AppButton
      {...props}
      sx={{
        color: "#000000",
        backgroundColor: "transparent",
        border: "none",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "transparent",
          borderColor: "transparent",
        },
        ...sx
      }}
    >
      {children}
    </AppButton>
  );
}
