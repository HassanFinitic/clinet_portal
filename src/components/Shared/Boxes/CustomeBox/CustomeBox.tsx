import AppBox from "../../../_UI/AppBox/AppBox";
import { type SxProps } from "@mui/material";

interface CustomeBoxProps {
  children: React.ReactNode;
  sx?: SxProps;
  onClick?: () => void;
}
export default function CustomeBox({
    children,
    sx,
    onClick
}: CustomeBoxProps) {
  return (
    <AppBox sx={{
        borderRadius: "0px",
        ...sx 
    }} onClick={onClick}>
        {children}
    </AppBox>
  )
}
