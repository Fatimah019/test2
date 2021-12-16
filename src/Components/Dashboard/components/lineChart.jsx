import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "#1F1F25",
      },
      ticks: {
        reverse: false,
        min: 0,
        max: 10,
        stepSize: 0.5,
      },
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  zoom: {
    enabled: true,
  },
  responsive: false,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        boxWidth: 1.5,
      },
    },
    title: {
      display: false,
    },
  },
  borderWidth: 1.5,
  tension: 0.4,
};

const labels = ["", "", "", "", "", "", ""];

export const data = {
  labels,
  datasets: [
    {
      label: "Training sessions",
      data: labels.map(() => faker.datatype.number({ min: 0.1, max: 10 })),
      borderColor: "#FFC961",
    },
    {
      label: "Team meetings",
      data: labels.map(() => faker.datatype.number({ min: 0.1, max: 10 })),
      borderColor: "#F03C80",
    },
    {
      label: "Medical checks",
      data: labels.map(() => faker.datatype.number({ min: 0.1, max: 10 })),
      borderColor: "#505DD6",
    },
  ],
};

const LineChart = () => {
  return (
    <Line
      options={options}
      data={data}
      style={{ width: "100%", height: "100%" }}
    />
  );
};
export default LineChart;
