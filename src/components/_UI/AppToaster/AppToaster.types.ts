import type { AlertColor } from "@mui/material";

export interface AppToasterProps {
    open: boolean;
    message: string;
    severity?: AlertColor;
    onClose: () => void;
    duration?: number;
}