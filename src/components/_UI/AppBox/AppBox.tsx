import { Box } from '@mui/material'

export default function AppBox({ children }: { children: React.ReactNode }) {
  return (
    <Box
    sx={{
        padding: "16px 24px",
        backgroundColor: "background.paper",
        borderRadius: "44px",
        border: "1px solid",
        borderColor: "divider",
        width: "100%",
        marginBottom: "16px",
    }}
    >
        {children}
    </Box>
  )
}
