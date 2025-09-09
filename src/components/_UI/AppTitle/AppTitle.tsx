import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface AppTitleProps {
  title: string;
  color?: string;
}

export default function AppTitle({
  title,
  color = "primary.main"
}: AppTitleProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <Typography
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        fontWeight: "bold",
        position: "relative",
        marginInlineStart: "20px",

        "&::before": {
          position: "absolute",
          content: '""',
          display: "inline-block",
          width: "14px",
          height: "27px",
          backgroundColor: color,
          [currentLang === "ar" ? "right" : "left"]: "-20px",
          top: "50%",
          transform: "translateY(-50%)",
          borderRadius: "8px",
        },
      }}
      >{title}</Typography>
  )
}
