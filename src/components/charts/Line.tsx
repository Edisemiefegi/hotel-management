import ReactECharts from "echarts-for-react";
import { useMemo } from "react";

type DataType = {
  name: string;
  values: Array<number | string>;
  color: string;
};

type TitleType = {
  name?: string;
  subheading?: string;
};

interface LineChartProps {
  data?: Array<DataType>;
  labels?: string[];
  title?: TitleType;
}

function Line({ data = [], labels = [], title }: LineChartProps) {
  const series = useMemo(() => {
    return data.map((el) => ({
      name: el.name,
      type: "line",
      data: el.values,
      smooth: true,
      showSymbol: false,

      // Line styling
      lineStyle: {
        color: el.color,
        width: 2,
      },

      // Transparent area under the line
      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: el.color },
            { offset: 1, color: "rgba(255,255,255,0)" },
          ],
        },
      },
    }));
  }, [data]);

  const options = useMemo(
    () => ({
      backgroundColor: "transparent",

      tooltip: {
        trigger: "axis",
      },

      xAxis: {
        type: "category",
        boundaryGap: false,
        data: labels,
      },

      yAxis: {
        type: "value",
      },

      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },

      series,
    }),
    [series, labels],
  );

  return (
    <div>
      <div className="mb-2">
        <p className="text-xl font-semibold">{title?.name}</p>
        <p className="text-sm text-gray-500">{title?.subheading}</p>
      </div>

      <div className="w-full h-[300px]">
        <ReactECharts
          style={{ height: "100%", width: "100%" }}
          option={options}
          notMerge={true}
          opts={{ renderer: "svg" }}
        />
      </div>
    </div>
  );
}

export default Line;
