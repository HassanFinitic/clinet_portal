import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider
} from '@mui/material'
import { AppButton } from '../AppButton/AppButton';
 
interface Props {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
    actions?: React.ReactNode;
}
 
export default function AppModal({
    open,
    onClose,
    children,
    title,
    actions
}: Props) {
 
 
  return (
    <Dialog
        maxWidth="sm"
        fullWidth
        sx={{
        "& .MuiPaper-root": {
            borderRadius: "24px",
            py: 2,
        },
        }}
        open={open}
        onClose={onClose}
    >
      <DialogTitle
        sx={{
            fontWeight: "bold",
            fontSize: "24px",
        }}
      >{title}</DialogTitle>
      <Divider />
      <DialogContent>
        {children}
      </DialogContent>      
      <DialogActions sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
        }}>
        {actions}
        <AppButton
            onClick={() => onClose()}
        >
            Cancel
        </AppButton>
      </DialogActions>
    </Dialog>
  )
}