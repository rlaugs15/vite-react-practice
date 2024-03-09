import { useQuery } from "react-query"
import { useLocation } from "react-router-dom"
import { IHistorical, fetchCoinHistory } from "../api"
import ReactApexChart from "react-apexcharts"

function Chart() {
    const {state: {coinId}} = useLocation()
    const {isLoading, data} = useQuery<IHistorical[]>(['tickers', coinId], ()=>fetchCoinHistory(coinId))
      return (
    <>
      {isLoading ? (
        "차트 로딩 중.."
      ) : (
        <ReactApexChart
          type="candlestick"
          series={[
            {
              data:
                data?.map((price) => [
                  price.time_close,
                  price.open,
                  price.high,
                  price.low,
                  price.close,
                ]) ?? [],
            },
          ]}
          options={{
            chart: {
              type: "candlestick",
              height: 350,
            },
            title: {
              text: "CandleStick Chart",
              align: "left",
            },
            xaxis: {
              type: "datetime",
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
          }}
        />
      )}
    </>
  );
}

export default Chart