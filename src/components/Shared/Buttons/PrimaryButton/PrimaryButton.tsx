import { AppButton } from "../../../_UI/AppButton/AppButton";
import type { SxProps, ButtonProps } from "@mui/material";

interface PrimaryButtonProps extends ButtonProps {
  sx?: SxProps;
}

export default function PrimaryButton({ 
    children, 
    sx, 
    ...props 
}: PrimaryButtonProps) {
  return (
    <AppButton
      {...props}
      sx={{
        ...sx
      }}
    >
      {children}
    </AppButton>
  );
}