import { CustomeBox } from "../../../../Shared/Boxes";
import Card from "./Card/Card";

interface CardsProps {
    period?: string;
    cardsData: {
        image: string;
        title: string;
        value: number;
        changePercentage: number;
        color: string;
    }[];
    setChartColor: (color: string) => void;
}

export default function Cards({ period, cardsData, setChartColor }: CardsProps) {
  return (
    <CustomeBox sx={{
      background: "#F4F4F4",
      borderRadius: "24px",
      borderColor: "transparent",
      padding: "8px",
      my: "16px",
      display: "flex",
      flexDirection: "row",
      gap: "16px",
    }}>
        {cardsData.map((card, index) => (
            <Card
                key={index}
                image={card.image}
                title={card.title}
                value={card.value}
                changePercentage={card.changePercentage}
                period={period}
                setChartColor={setChartColor}
                color={card.color}
            />
        ))}
    </CustomeBox>
  )
}
