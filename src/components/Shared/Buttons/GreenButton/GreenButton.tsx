import { AppButton } from "../../../_UI/AppButton/AppButton";
import type { SxProps, ButtonProps } from "@mui/material";

interface GreenButtonProps extends ButtonProps {
  sx?: SxProps;
}

export default function GreenButton({ 
    children, 
    sx, 
    ...props 
}: GreenButtonProps) {
  return (
    <AppButton
      sx={{ 
        color: "#0EAB60",
        backgroundColor: "#E5F5ED",
        border: "1px solid #CCECDC",

        "&:hover": {
          backgroundColor: "#CCECDC",
          borderColor: "#E5F5ED",
        },
        ...sx 
      }}
      {...props}
    >
      {children}
    </AppButton>
  );
}
