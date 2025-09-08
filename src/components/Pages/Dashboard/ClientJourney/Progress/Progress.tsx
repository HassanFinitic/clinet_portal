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
    <Box sx={{ 
        display: "flex", 
        gap: "0px", 
        alignItems: "center", 
        width: "80%", 
        margin: "20px auto" 
    }}>
      {steps.map((step, index) => (
        <Bar
          key={index}
          title={step.title}
          done={step.done}
          current={step.current}
        //   isFirst={index === 0}
        //   isLast={index === steps.length - 1}
        />
      ))}
    </Box>
  );
}
