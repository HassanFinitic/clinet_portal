import AppBox from "../../../_UI/AppBox/AppBox";
import { type SxProps } from "@mui/material";

interface BoxRounded44Props {
  children: React.ReactNode;
  sx?: SxProps;
}

export default function BoxRounded44({ 
    children, 
    sx 
}: BoxRounded44Props) {
  return (
    <AppBox sx={{ borderRadius: "44px", ...sx }}>
      {children}
    </AppBox>
  );
}