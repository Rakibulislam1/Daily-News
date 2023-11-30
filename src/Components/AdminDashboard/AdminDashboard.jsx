import Chart from "react-google-charts";
import { Helmet } from "react-helmet";

export const data1 = [
  ["Task", "Hours per Day"],
  ["Daily Star", 2],
  ["The Independent", 2],
  ["New Age", 2],
  ["Dhaka Tribune", 2],
  ["Dhaka News", 7],
];

export const options1 = {
  title: "All Publisher Chart",
};

export const data = [
  ["Task", "Hours per Day"],
  ["Daily Star", 2],
  ["The Independent", 2],
  ["New Age", 2],
  ["Dhaka Tribune", 2],
  ["Dhaka News", 7],
];


export const options = {
  title: "All Publisher Chart",
  chartArea: { width: "50%" },
  colors: ["#b0120a", "#ffab91"],
};


export const data2 = [
  ["Daily Star", "The Independent", "New Age", "Dhaka Tribune", "Dhaka News"],
  [0, 0, 0],
  [1, 10, 5],
  [2, 23, 15],
  [3, 17, 9],
  [4, 18, 10],
  [5, 9, 5],
  [6, 11, 3],
  [7, 27, 19],
];

export const options2 = {
  hAxis: {
    title: "All Publisher Chart",
  },
  vAxis: {
    title: "Popularity",
  },
  series: {
    1: { curveType: "function" },
  },
};

const AdminDashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Daily News-Admin Dashboard</title>
      </Helmet>
      <Chart
        chartType="PieChart"
        data={data1}
        options={options1}
        width={"100%"}
        height={"400px"}
      />

      <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />

      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={options2}
      />
    </div>
  );
};

export default AdminDashboard;

/* eslint-disable react-refresh/only-export-components */
