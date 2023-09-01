import useQuestionStore from "@/hooks/useQuestionStore";
import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function ChartTable() {
  const chartRef = useRef(null);
  const { data } = useQuestionStore();
  const [chartInstance, setChartInstance] = useState(null);
  useEffect(() => {
    const updateChart = () => {
      const ctx = chartRef.current.getContext("2d");

      if (chartInstance) {
        chartInstance.destroy();
      }

      const rateData = {
        labels: ["Woman", "Man", "Other"],
        datasets: [
          {
            label: "Dataset 1",
            data: [
              data.filter((item) => item.gender === "woman").length,
              data.filter((item) => item.gender === "man").length,
              data.filter((item) => item.gender === "other").length,
            ],
            backgroundColor: ["Red", "Blue", "Green"],
          },
        ],
      };

      const newChartInstance = new Chart(ctx, {
        type: "doughnut",
        data: rateData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "GENDER CHART",
            },
          },
        },
      });
      setChartInstance(newChartInstance);
    };

    updateChart();
  }, [data]);

  return (
    <div style={{ width: "500px", height: "500px", margin: "0 auto" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default ChartTable;
