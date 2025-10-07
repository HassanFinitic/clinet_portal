import { Box } from "@mui/material";
import { PrimaryButton, SecondaryButton } from "../../Buttons";

interface PeriodFilterProps {
    options: Option[];
    selected: string;
    onChange: (value: string) => void;
}

interface Option {
    value: string;
    label: string;
}

export default function PeriodFilter({ 
    options,
    selected, 
    onChange 
}: PeriodFilterProps) {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      {options.map((option) => (
            selected === option.value ? (
                <PrimaryButton
                key={option.value}
                onClick={() => onChange(option.value)}
                >
                    {option.label}
                </PrimaryButton>
            ) : (
                <SecondaryButton
                key={option.value}
                onClick={() => onChange(option.value)}
                >
                    {option.label}
                </SecondaryButton>
            )
      ))}
    </Box>
  );
}