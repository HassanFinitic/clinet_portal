import AppBox from "../../../_UI/AppBox/AppBox";
import { type SxProps } from "@mui/material";

interface CustomeBoxProps {
  children: React.ReactNode;
  sx?: SxProps;
}
export default function CustomeBox({
    children,
    sx
}: CustomeBoxProps) {
  return (
    <AppBox sx={{
        borderRadius: "0px",
        ...sx 
    }}>
        {children}
    </AppBox>
  )
}
