import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import "chartjs-adapter-date-fns";

function LocationOrdersGraph() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Create gradient for the bar fill
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(75, 192, 192, 0.6)");
    gradient.addColorStop(1, "rgba(75, 192, 192, 0.1)");

    const data = {
      datasets: [
        {
          label: "Donations",
          backgroundColor: gradient,
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(75,192,192,0.6)",
          hoverBorderColor: "rgba(75,192,192,1)",
          pointRadius: 8,
          pointHoverRadius: 12,
          data: [
            { x: "2023-05-21", y: 50, location: "Delhi", quantity: 10 },
            { x: "2023-06-10", y: 100, location: "Hyderabad", quantity: 20 },
            { x: "2023-07-15", y: 75, location: "Mumbai", quantity: 15 },
            { x: "2023-08-05", y: 200, location: "Kolkata", quantity: 30 },
            { x: "2023-09-20", y: 120, location: "Chennai", quantity: 25 },
          ],
        },
      ],
    };

    const config = {
      type: "scatter",
      data,
      options: {
        scales: {
          x: {
            type: "time",
            time: {
              unit: "month",
              tooltipFormat: "MMM dd, yyyy",
            },
            title: {
              display: true,
              text: "Date",
              font: {
                size: 16,
                weight: "bold",
              },
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Donation Amount (₹)",
              font: {
                size: 16,
                weight: "bold",
              },
            },
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                const { x, y, raw } = context;
                return `Location: ${raw.location}, Quantity: ${raw.quantity}`;
              },
            },
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            titleFont: {
              size: 16,
              weight: "bold",
            },
            bodyFont: {
              size: 14,
            },
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        },
        animation: {
          duration: 1500,
          easing: "easeOutBounce",
        },
      },
    };

    const locationOrdersChart = new Chart(ctx, config);

    return () => {
      locationOrdersChart.destroy();
    };
  }, []);

  return (
    <div className="location-orders-graph">
      <h2>Orders by Location</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default LocationOrdersGraph;
