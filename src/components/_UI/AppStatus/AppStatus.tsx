import { Box } from "@mui/material";

interface AppStatusProps {
  status: string;
  text?: string | number;
}


export default function AppStatus({ status, text }: AppStatusProps) {
  const normalized = status.toLowerCase();

  let styles = {
    color: "#787E86",
    borderColor: "#E0E0E0",
    background: "#F4F4F4",
  };

  // Green statuses
  if (
    [
        "active",
        "green",
        "success",
        "approved",
        "passed"
    ].includes(normalized)
  ) {
    styles = {
      color: "#0EAB60",
      borderColor: "#CCECDC",
      background: "#E5F5ED",
    };
  }
  // Red statuses
  else if (
    [
        "inactive",
        "dis-active",
        "red",
        "fail",
        "failed",
        "rejected"
    ].includes(normalized)
  ) {
    styles = {
      color: "#FF6A55",
      borderColor: "#FDE0DC",
      background: "#FEF4F2",
    };
  }
  // Yellow statuses
  else if (
    [
        "pending",
        "waiting",
        "in-progress",
        "yellow"
    ].includes(normalized)) {
    styles = {
      color: "#B8A906",
      borderColor: "#ECEBCC",
      background: "#FDF8DC",
    };
  }

  return (
    <Box
      sx={{
        display: "inline-block",
        borderRadius: "22px",
        padding: "8px 16px",
        fontSize: "15px",
        fontWeight: 600,
        textTransform: "uppercase",
        border: "1px solid",
        ...styles,
      }}
    >
      {text ? text : status}
    </Box>
  );
}
