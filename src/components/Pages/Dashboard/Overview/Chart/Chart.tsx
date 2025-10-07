import { Box } from "@mui/material";
import { LineChart } from "@mui/x-charts";

interface ChartDataType {
  x: string;
  y: number;
  [key: string]: string | number | Date | null | undefined;
}

export default function Chart({ 
    chartData, 
    chartColor = "#BAFBBA"
}: { 
    chartData: ChartDataType[], 
    chartColor?: string 
}) {
  return (
    <>
      {/* Hidden defs in the document so url(#...) can be resolved by the chart svg */}
      <svg
        aria-hidden
        focusable={false}
        width={0}
        height={0}
        style={{ position: "absolute", left: 0, top: 0, pointerEvents: "none" }}
      >
        <defs>
          {/* vertical top->bottom fill gradient */}
          <linearGradient id="gradientFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="10%" stopColor={chartColor} stopOpacity={1} />
            <stop offset="70%" stopColor={chartColor} stopOpacity={0.7} />
            <stop offset="100%" stopColor={chartColor} stopOpacity={0.4} />
          </linearGradient>

          {/* horizontal stroke-ish gradient (optional) */}
          <linearGradient id="gradientStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={chartColor} stopOpacity={1} />
            <stop offset="100%" stopColor={chartColor} stopOpacity={1} />
          </linearGradient>
        </defs>
      </svg>

      <Box sx={{ width: "100%", height: 300 }}>
        <LineChart
          dataset={chartData}
          xAxis={[
            {
              dataKey: "x",
              scaleType: "point",
              disableTicks: true,
              disableLine: true,
              tickLabelStyle: { fill: "#787E86", fontSize: 10, fontWeight: 600 },
            },
          ]}
          yAxis={[
            {
              dataKey: "y",
              scaleType: "linear",
              disableTicks: true,
              disableLine: true,
              tickLabelStyle: { fill: "#787E86", fontSize: 10, fontWeight: 600 },
            },
          ]}
          series={[
            {
              dataKey: "y",
              area: true,
              color: "url(#gradientFill)",
              showMark: false,
            },
          ]}
          grid={{ vertical: true, horizontal: false }}
          sx={{
            transition: "all 0.3s ease-in-out",
            // Ensure the area uses our gradient fill
            '& svg path[fill^="url"]': {
                // fill: "url(#gradientFill)",
                opacity: 0.7,
            },
            '& svg path[data-series-line], & svg path[class*="series"], & svg path[fill="none"]': {
              strokeWidth: 4,
              strokeTop: "url(#gradientStroke)",
            },

            '& svg line': {
                stroke: "#cfcfcf",
                strokeWidth: 1,
                strokeDasharray: "5 10",
                opacity: 0.6,
            },
            
            '& svg text': {
                fontFamily: "Inter, Roboto, Arial, sans-serif",
            },
            
          }}
        />
      </Box>
    </>
  );
}