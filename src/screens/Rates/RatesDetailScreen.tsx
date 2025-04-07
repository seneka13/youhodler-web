import { useLocation } from "react-router-dom";
import { LineChart } from "@mui/x-charts";
import { RateItem } from "../../types";

export const RatesDetailScreen = () => {
  const coinRate: RateItem = useLocation().state;
  const { name, ask, bid, rate, diff24h } = coinRate;

  const chartData = [
    { x: "Ask", y: ask },
    { x: "24h Diff", y: diff24h },
    { x: "Bid", y: bid },
  ];

  return (
    <div className="flex-grow">
      <h1 className="text-3xl p-5 font-bold">{name.toUpperCase()} Details</h1>
      <div className="p-5 flex justify-center">
        <div className="text-xl ">
          <span className="font-bold">Rate: </span>
          {rate}
        </div>
      </div>
      <div className="p-5">
        <LineChart
          height={300}
          dataset={chartData}
          series={[
            {
              dataKey: "y",
              label: `Ask: ${ask}`,
              color: "green",
            },
            {
              dataKey: "y",
              label: `Bid: ${bid}`,
              color: "red",
            },
            {
              dataKey: "y",
              label: `24h Diff: ${diff24h}`,
              color: "blue",
            },
          ]}
          xAxis={[{ scaleType: "band", dataKey: "x" }]}
          slotProps={{
            legend: {
              direction: "column",
              position: { vertical: "top", horizontal: "middle" },
              itemMarkHeight: 10,
              itemGap: 2,
              labelStyle: {
                fontSize: 12,
              },
            },
          }}
        />
      </div>
    </div>
  );
};
