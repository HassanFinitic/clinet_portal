import { useState, type ReactNode } from "react";
import { AppButton } from "../../../_UI/AppButton/AppButton";
import {
  Menu,
  MenuItem,
  type SxProps,
} from "@mui/material";
import { IoMdArrowDropdown } from "react-icons/io";

// Props = AppButton props + dropdown-specific props
type DropDownButtonProps = {
  sx?: SxProps;
  options: { label: string; value: string | number }[];
  onSelect?: (value: string | number) => void;
  children: ReactNode;
} & React.ComponentProps<typeof AppButton>;

export default function DropDownButton({
  sx,
  options,
  onSelect,
  children,
  ...props
}: DropDownButtonProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (value: string | number) => {
    onSelect?.(value);
    handleClose();
  };

  return (
    <>
      <AppButton
        onClick={handleClick}
        endIcon={<IoMdArrowDropdown />}
        sx={{
          color: "#000000",
          backgroundColor: "#FFFFFF",
          border: "1px solid #D5D7DA",
          "&:hover": {
            backgroundColor: "#D5D7DA",
            borderColor: "#FFFFFF",
          },
          ...sx,
        }}
        {...props}
      >
        {children}
      </AppButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => handleSelect(option.value)}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
