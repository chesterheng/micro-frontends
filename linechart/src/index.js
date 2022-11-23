import * as echarts from "echarts";

const linechartElement = document.getElementById("linechart-dev");
const linechart = echarts.init(linechartElement);
const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};
linechart.setOption(option);
