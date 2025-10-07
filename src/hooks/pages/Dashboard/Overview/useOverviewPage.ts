import { useEffect, useState } from "react";
import depositeImage from "../../../../assets/images/dashboard/overview/deposits.png";
import withdrawalImage from "../../../../assets/images/dashboard/overview/withdrawals.png";
import equityImage from "../../../../assets/images/dashboard/overview/equity.png";
import creditImage from "../../../../assets/images/dashboard/overview/credit.png";
import balanceImage from "../../../../assets/images/dashboard/overview/balance.png";

const useOverviewPage = () => {
    // the period is the time range for the data
    const [period, setPeriod] = useState("day");
    const periods = [
        { value: "day", label: "Day" },
        { value: "week", label: "Week" },
        { value: "month", label: "Month" },
        { value: "year", label: "Year" },
    ];

    // the data is fetched based on the period
    interface dataType {
        image: string;
        title: string;
        value: number;
        changePercentage: number;
        color: string;
    };
    const [cardsData, setCardsData] = useState<dataType[]>([]);
    useEffect(() => {
        setCardsData([
            { 
                image: balanceImage,
                title: "Total Balance",
                value: 100,
                changePercentage: -5,
                color: "#BAFBBA"
            },
            { 
                image: creditImage, 
                title: "Total Credit", 
                value: 100, 
                changePercentage: 10,
                color: "#A769FE"
            },
            { 
                image: equityImage, 
                title: "Total Equity", 
                value: 100, 
                changePercentage: 10,
                color: "#FFF38C"
            },
            { 
                image: depositeImage, 
                title: "Total Deposits", 
                value: 100, 
                changePercentage: 10,
                color: "#93CFFF"
            },
            { 
                image: withdrawalImage, 
                title: "Total Withdrawals", 
                value: 100, 
                changePercentage: -10,
                color: "#FF8081" 
            },
        ]);
    }, [period]);

interface chartDataType {
    x: string;
    y: number;
    [key: string]: string | number | Date | null | undefined;
};
    const [chartData, setChartData] = useState<chartDataType[]>([]);
    useEffect(() => {
        setChartData([
            {
                x: "May 18",
                y: 10
            },
            {
                x: "May 19",
                y: 215
            },
            {
                x: "May 20",
                y: 100
            },
            {
                x: "May 21",
                y: 150
            },
            {
                x: "May 22",
                y: 100
            },
            { 
                x: "May 23",
                y: 890
            },
            {
                x: "May 24",
                y: 410
            },
            {
                x: "May 25",
                y: 520
            },
            {
                x: "May 26",
                y: 100
            },
            {
                x: "May 27",
                y: 500
            }
        ]);
    }, [period]);

    const [chartColor, setChartColor] = useState("#BAFBBA");

    return { 
        period, 
        setPeriod, 
        periods,
        cardsData,
        chartData,
        chartColor,
        setChartColor,
    };
};

export default useOverviewPage;
