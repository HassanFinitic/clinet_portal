import { Box } from "@mui/material";
import { IoMdArrowRoundUp, IoMdArrowRoundDown } from "react-icons/io";

interface AppChangePercentageProps {
  value: number;
  text?: string;
  direction?: "column" | "row";
  size?: "small" | "medium" | "large";
}

export default function AppChangePercentage({
  value,
  text,
  direction = "row",
  size = "medium",
}: AppChangePercentageProps) {
  const isPositive = value > 0;
  const isNegative = value < 0;

  const absValue = Math.abs(value);
  const valueNormalized = absValue.toFixed(2).replace(/\.?0+$/, ""); // remove trailing zeros

  // Sizing options
  const sizes = {
    small: { fontSize: "11px", iconSize: 14 },
    medium: { fontSize: "13px", iconSize: 16 },
    large: { fontSize: "15px", iconSize: 18 },
  };

  const { fontSize, iconSize } = sizes[size];

  // Style states
  const positiveStyles = { color: "#0EAB60" };
  const negativeStyles = { color: "#FF6A55" };
  const neutralStyles = { color: "#787E86" };

  let styles = neutralStyles;
  let icon: React.ReactNode = null;

  if (isPositive) {
    styles = positiveStyles;
    icon = <IoMdArrowRoundUp size={iconSize} />;
  } else if (isNegative) {
    styles = negativeStyles;
    icon = <IoMdArrowRoundDown size={iconSize} />;
  }

  return (
    <Box
      sx={{
        display: "inline-flex",
        flexDirection: direction,
        alignItems: direction === "row" ? "center" : "flex-start",
        justifyContent: "center",
        gap: "4px",
      }}
      aria-label={`${isPositive ? "Up" : isNegative ? "Down" : ""} ${valueNormalized} percent`}
    >
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: "1px",
          fontSize,
          fontWeight: 600,
          ...styles,
        }}
      >
        {icon} {valueNormalized}% 
      </Box>

      {text && (
        <Box
          sx={{
            fontSize,
            fontWeight: 600,
            color: "#787E86",
          }}
        >
          {text}
        </Box>
      )}
    </Box>
  );
}
