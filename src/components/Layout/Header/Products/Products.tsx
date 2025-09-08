import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Products() {
    const { t } = useTranslation();

    const products = [
        {
            name: t("header.projects.client"),
            active: true,
            color: "rgba(125, 242, 125, 1)",
            fontColor: "rgba(14, 171, 96, 1)",
            activeColor: "rgba(229, 245, 237, 1)",
        },
        {
            name: t("header.projects.ib"),
            active: false,
            color: "rgba(255, 128, 129, 1)",
            activeColor: "rgba(254, 244, 242, 1)",
        },
        {
            name: t("header.projects.investor"),
            active: false,
            color: "rgba(167, 105, 254, 1)",
            activeColor: "rgba(244, 244, 244, 1)",
        },
        {
            name: t("header.projects.provider"),
            active: false,
            color: "rgba(147, 207, 255, 1)",
            activeColor: "rgba(244, 244, 244, 1)",
        },
        {
            name: t("header.projects.gold"),
            active: false,
            color: "rgba(255, 243, 140, 1)",
            activeColor: "rgba(253, 248, 220, 1)",
        },
    ]

  return (
    <Box sx={{
        display: "flex",
        gap: 1,
    }}>
        {products.map((product, index) => (
            <Box
                key={index}
                sx={{
                    backgroundColor: product.active ? product.activeColor : "transparent",
                    borderRadius: "12px",
                    padding: "12px 4px",
                    borderTop: "4px solid",
                    borderTopColor: product.color,
                    background: product.active ? product.activeColor : "transparent",
                    color: product.active ? product.fontColor : "primary.main",
                    width: "40px",
                }}
            >
                <Typography fontSize={8} fontWeight={700}>
                    {product.name}
                </Typography>
                <Typography fontSize={8} fontWeight={700}>
                    {t("header.projects.portal")}
                </Typography>
            </Box>
        ))}
    </Box>
  )
}
