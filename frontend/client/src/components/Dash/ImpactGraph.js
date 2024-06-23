import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const ImpactGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Girls Helped",
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(75,192,192,0.6)",
          hoverBorderColor: "rgba(75,192,192,1)",
          data: [10, 20, 10, 40, 30, 50],
        },
      ],
    };

    const config = {
      type: "bar",
      data,
      options: {
        scales: {
          x: {
            type: "category",
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    const impactChart = new Chart(ctx, config);

    return () => {
      impactChart.destroy();
    };
  }, []);

  return (
    <div className="impact-graph">
      <h2>Impact Over Time</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ImpactGraph;
