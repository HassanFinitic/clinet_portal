import { 
    Button, 
    type ButtonProps, 
    styled 
} from '@mui/material';

const CustomButtonRoot = styled(Button)(() => ({
  textTransform: 'none',
  borderRadius: '12px',
  fontWeight: 600,
  padding: "2px 12px",
  color: "green",
  width: 'fit-content',
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
  },
}));

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const AppButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <CustomButtonRoot variant="contained" {...props}>
      {children}
    </CustomButtonRoot>
  );
};
