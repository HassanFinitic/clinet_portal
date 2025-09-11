import { AppButton } from "../../../_UI/AppButton/AppButton";
import type { SxProps, ButtonProps } from "@mui/material";

interface RedButtonProps extends ButtonProps {
  sx?: SxProps;
}

export default function RedButton({ 
    children, 
    sx, 
    ...props 
}: RedButtonProps) {
  return (
    <AppButton
      sx={{ 
        color: "#FF6A55",
        backgroundColor: "#FEF4F2",
        border: "1px solid #FDE0DC",

        "&:hover": {
          backgroundColor: "#FDE0DC",
          borderColor: "#FEF4F2",
        },
        ...sx 
      }}
      {...props}
    >
      {children}
    </AppButton>
  );
}