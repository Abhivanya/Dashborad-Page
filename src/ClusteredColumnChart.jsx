import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components of Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ClusteredColumnChart = () => {
  // Chart data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // X-axis labels (months)
    datasets: [
      {
        label: "Category 1", // Label for dataset 1
        data: [10, 20, 30, 40, 50, 60], // Data for Category 1
        backgroundColor: "#42a5f5", // Color for Category 1 bars
        borderColor: "#1e88e5", // Border color for Category 1 bars
        borderWidth: 1,
      },
      {
        label: "Category 2", // Label for dataset 2
        data: [15, 25, 35, 45, 55, 65], // Data for Category 2
        backgroundColor: "#ff7043", // Color for Category 2 bars
        borderColor: "#f4511e", // Border color for Category 2 bars
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true, // Make the chart responsive
    plugins: {
      legend: {
        position: "top", // Position of legend
      },
      tooltip: {
        enabled: true, // Enable tooltips on hover
      },
    },
    scales: {
      x: {
        stacked: false, // Allows bars to be clustered
      },
      y: {
        stacked: false, // Y-axis won't stack the bars
        beginAtZero: true, // Start Y-axis from 0
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ClusteredColumnChart;
