import { Typography } from "@mui/material";
import Progress from "./Progress/Progress";
import { useTranslation } from "react-i18next";
import { BoxRounded44 } from "../../../Shared/Boxes";

export default function ClientJourney() {
    const { t } = useTranslation();

  return (
    <BoxRounded44>
        <Typography 
        sx={{ fontSize: "32px", fontWeight: "bold", color: "primary.main" }}
        >{t("dashboard.clientJourney.title")} Abdelrahman Hassan</Typography>

        <Typography 
        sx={{ fontSize: "16px", fontWeight: "bold", color: "primary.main" }}
        >{t("dashboard.clientJourney.subtitle")}</Typography>

        <Progress />
    </BoxRounded44>
  )
}
