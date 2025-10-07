import { Box } from '@mui/material'
import type { SxProps } from '@mui/material';

export default function AppBox({ children, sx, onClick }: { children: React.ReactNode; sx?: SxProps; onClick?: () => void }) {
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
          ...sx
      }}
      onClick={onClick}
    >
        {children}
    </Box>
  )
}
