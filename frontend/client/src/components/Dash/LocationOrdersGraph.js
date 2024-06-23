import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const LocationOrdersGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const data = {
      labels: [
        "Hyderabad",
        "Delhi",
        "Mumbai",
        "Bangalore",
        "Chennai",
        "Kolkata",
      ],
      datasets: [
        {
          label: "Orders by Location",
          backgroundColor: "rgba(153, 102, 255, 0.4)",
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(153, 102, 255, 0.6)",
          hoverBorderColor: "rgba(153, 102, 255, 1)",
          data: [30, 25, 35, 20, 15, 10],
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

    const locationOrdersChart = new Chart(ctx, config);

    return () => {
      locationOrdersChart.destroy(); // Clean up the chart on component unmount
    };
  }, []);

  return (
    <div className="location-orders-graph">
      <h2>Orders by Location</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default LocationOrdersGraph;
