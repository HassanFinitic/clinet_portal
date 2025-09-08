/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Box, Chip, IconButton, Tooltip } from "@mui/material";
import { BiCopyAlt } from "react-icons/bi";
import type { CSSProperties } from "react";
import AppToast from "../AppToaster/AppToaster";
 
type CopyableChipProps = {
  label: string;
  copyValue: string;
  tooltip: string;
  sx?: CSSProperties;
};
 
const CopyableChip = ({ label, copyValue, tooltip, sx }: CopyableChipProps) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
 
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyValue);
      setSnackbarMessage("Copied to clipboard!");
    } catch (error) {
      setSnackbarMessage("Failed to copy");
    } finally {
      setSnackbarOpen(true);
    }
  };
 
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Tooltip title={tooltip}>
        <IconButton size="small" onClick={handleCopy}>
          <BiCopyAlt fontSize="14px"  />
        </IconButton>
      </Tooltip>
 
      <Chip
        sx={{
          color: "colors.secondary",
          fontSize: "10px",
          fontWeight: "bold",
          padding: "1px 2px",
          backgroundColor: "transparent",
          span: {
            padding: "0px",
          },
          ...sx,
        }}
        label={label}
      />
      <AppToast
        open={snackbarOpen}
        message={snackbarMessage}
        onClose={() => setSnackbarOpen(false)}
        duration={2000}
      />
    </Box>
  );
};
 
export default CopyableChip;