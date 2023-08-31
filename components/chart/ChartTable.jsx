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
        chartInstance.destroy(); // Önceki grafiği temizle
      }

      const oranData = {
        labels: ["Kadın", "Erkek", "Diğer"],
        datasets: [
          {
            label: "Dataset 1",
            data: [
              data.filter((item) => item.cinsiyet === "kadın").length,
              data.filter((item) => item.cinsiyet === "erkek").length,
              data.filter((item) => item.cinsiyet === "Diger").length,
            ],
            backgroundColor: ["Red", "Blue", "Green"],
          },
        ],
      };

      const newChartInstance = new Chart(ctx, {
        type: "doughnut",
        data: oranData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "CİNSİYET GRAFİĞİ",
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
