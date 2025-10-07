import { Box } from "@mui/material";
import AppTitle from "../../../_UI/AppTitle/AppTitle";
import { BoxRounded44 } from "../../../Shared/Boxes";
import PeriodFilter from "../../../Shared/Filters/PeriodFilter/PeriodFilter";
import useOverviewPage from "../../../../hooks/pages/Dashboard/Overview/useOverviewPage";
import Cards from "./Cards/Cards";
import Chart from "./Chart/Chart";

export default function Overview() {
    const { 
        period, 
        setPeriod, 
        periods,
        cardsData,
        chartData,
        chartColor,
        setChartColor,
    } = useOverviewPage();

  return (
    <BoxRounded44>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <AppTitle title="Overview" color="primary.main" />
            <PeriodFilter
                options={periods}
                selected={period}
                onChange={(value) => setPeriod(value)}
            />
        </Box>
        <Cards period={period} cardsData={cardsData} setChartColor={setChartColor}/>
        <Chart chartData={chartData} chartColor={chartColor}/>
    </BoxRounded44>
  )
}
