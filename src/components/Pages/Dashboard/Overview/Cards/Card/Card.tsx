import AppInformedTitle from "../../../../../_UI/AppInformedTitle/AppInformedTitle";
import AppAmount from "../../../../../_UI/AppAmount/AppAmount";
import AppChangePercentage from "../../../../../_UI/AppChangePercentage/AppChangePercentage";
import { CustomeBox } from "../../../../../Shared/Boxes";
interface CardProps {
    image: string;
    title: string;
    value: number;
    changePercentage: number;
    period?: string;
    setChartColor: (color: string) => void;
    color: string;
}
export default function Card({
    image,
    title,
    value,
    changePercentage,
    period = "day",
    setChartColor,
    color
}: CardProps) {
  return (
    <CustomeBox sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: "4px",
        borderRadius: "38px",
        padding: "24px 20px",
        background: "transparent",
        border: "none",
        transition: "all 0.3s ease-in-out",

        "&:hover": {
            cursor: "pointer",
            background: "#FFFFFF",
        },
    }} onClick={() => setChartColor(color)}>
        <img src={image} alt={title} height={48} width={48} />
        <AppInformedTitle title={title} subtitle={title} />
        <AppAmount amount={value} />
        <AppChangePercentage value={changePercentage} text={`this ${period}`}/>
    </CustomeBox>
  )
}
