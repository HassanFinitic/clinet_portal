import { Box } from "@mui/material";

interface AppAmountProps {
    amount: number;
    currency?: string;
    fontSize?: string;
}

export default function AppAmount({
    amount, 
    currency,
    fontSize = "28px"
 }: AppAmountProps) {
  return (
    <Box sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        fontWeight: 700,
        fontSize,
    }}>
        ${amount}K
        {currency}
    </Box>
  )
}
