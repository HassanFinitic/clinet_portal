import { AppButton } from "../../../_UI/AppButton/AppButton";
import type { SxProps, ButtonProps } from "@mui/material";

interface SecondaryButtonProps extends ButtonProps {
  sx?: SxProps;
}

export default function SecondaryButton({ 
    children, 
    sx, 
    ...props 
}: SecondaryButtonProps) {
  return (
    <AppButton
      sx={{ 
        color: "#000000",
        backgroundColor: "#FFFFFF",
        border: "1px solid #D5D7DA",

        "&:hover": {
          backgroundColor: "#D5D7DA",
          borderColor: "#FFFFFF",
        },
        ...sx 
      }}
      {...props}
    >
      {children}
    </AppButton>
  );
}