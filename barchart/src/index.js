import * as echarts from "echarts";

const barchartElement = document.getElementById("barchart-dev");
const barchart = echarts.init(barchartElement);
const option = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "chartSat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
    },
  ],
};
barchart.setOption(option);
