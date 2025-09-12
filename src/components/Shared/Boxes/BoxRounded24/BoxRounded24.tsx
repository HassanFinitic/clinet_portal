import AppBox from "../../../_UI/AppBox/AppBox";
import { type SxProps } from "@mui/material";

interface BoxRounded24Props {
  children: React.ReactNode;
  sx?: SxProps;
}

export default function BoxRounded24({ 
    children, 
    sx 
}: BoxRounded24Props) {
  return (
    <AppBox sx={{ borderRadius: "24px", ...sx }}>
      {children}
    </AppBox>
  );
}
