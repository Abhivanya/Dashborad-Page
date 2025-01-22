import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const SocialMediaEngagement = () => {
  const data = {
    labels: ["WhatsApp", "Facebook", "LinkedIn", "X (Twitter)", "Gmail"],
    datasets: [
      {
        label: "Engagement Rate",
        data: [70, 70, 70, 70, 70],
        backgroundColor: "#008DCA",
        barThickness: 12,
        borderRadius: 5,
      },
      {
        label: "Conversion Rate",
        data: [30, 30, 30, 30, 30],
        backgroundColor: "#FED13D",
        barThickness: 12,
        borderRadius: 5,
      },
      {
        label: "Growth",
        data: [15, 15, 15, 15, 15],
        backgroundColor: "#FF7C6A",
        barThickness: 12,
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: "gray",
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: "black",
          font: {
            size: 14,
          },
        },
      },
    },
    plugins: [
      {
        id: "custom-text-inside-bars",
        afterDatasetsDraw: (chart) => {
          const { ctx, data, scales } = chart;

          data.datasets.forEach((dataset, datasetIndex) => {
            const meta = chart.getDatasetMeta(datasetIndex);

            meta.data.forEach((bar, index) => {
              const value = dataset.data[index];
              const barX = bar.x;
              const barY = bar.y;

              ctx.save();
              ctx.fillStyle = "white"; // Text color
              ctx.font = "12px Arial";
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillText(`${value}%`, barX, barY);
              ctx.restore();
            });
          });
        },
      },
    ],
  };

  return (
    <div className="bg-white rounded-md p-6 shadow-md w-full h-[400px] max-w-5xl mx-auto text-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">
          Social Media Engagement
        </h2>
        <select className="bg-gray-100 text-gray-500 px-3 py-2 shadow-md rounded-md font-medium">
          <option value="">Last 30 Days</option>
        </select>
      </div>
      <div className="flex gap-4">
        <div className="w-[70%] h-[300px]">
          <Bar data={data} options={options} height={400} />
        </div>
        <div className="flex flex-col justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "#008DCA" }}
            ></span>
            <span>Engagement Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "#FED13D" }}
            ></span>
            <span>Conversion Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "#FF7C6A" }}
            ></span>
            <span>Growth</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaEngagement;
