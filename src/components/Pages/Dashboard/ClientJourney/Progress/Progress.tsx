import { Box } from "@mui/material";
import Bar from "./Bar/Bar";
import { useTranslation } from "react-i18next";

export default function Progress() {
    const { t } = useTranslation();

  const steps = [
    { title: t("dashboard.progress.step1"), done: true, current: false },
    { title: t("dashboard.progress.step2"), done: false, current: true },
    { title: t("dashboard.progress.step3"), done: false, current: false },
    { title: t("dashboard.progress.step4"), done: false, current: false },
    { title: t("dashboard.progress.step5"), done: false, current: false },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 2, sm: 0 },
        alignItems: "center",
        width: "100%",
        maxWidth: "80%",
        mx: "auto",
        justifyContent: "center",
        my: "20px",
        p: { xs: 2, sm: 0 },
      }}
    >
      {steps.map((step, index) => (
        <Bar
          key={index}
          title={step.title}
          done={step.done}
          current={step.current}
        />
      ))}
    </Box>
  );
}
