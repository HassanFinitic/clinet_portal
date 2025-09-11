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
  color: "white",
  width: 'fit-content',
  boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease-in-out',
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
