import { AppButton } from "../../../_UI/AppButton/AppButton";
import type { SxProps, ButtonProps } from "@mui/material";

interface YellowButtonProps extends ButtonProps {
  sx?: SxProps;
}

export default function YellowButton({ 
    children, 
    sx, 
    ...props 
}: YellowButtonProps) {
  return (
    <AppButton
      sx={{ 
        color: "#B8A906",
        backgroundColor: "#FDF8DC",
        border: "1px solid #ECEBCC",

        "&:hover": {
          backgroundColor: "#ECEBCC",
          borderColor: "#FDF8DC",
        },
        ...sx 
      }}
      {...props}
    >
      {children}
    </AppButton>
  );
}