// src/components/UserDashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Dash.css";

const UserDashboard = ({ userId }) => {
  const [userData, setUserData] = useState({
    orderHistory: [
      { date: Date.now(), total: 500 },
      { date: new Date(), total: 700 },
      { date: Date.now(), total: 200 },
    ],
    donationHistory: [{ date: Date.now(), total: 500 }],
    carbonFootprintReduced: 200,
  });

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:5000/api/users/${userId}`
  //       );
  //       setUserData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };
  //   fetchUserData();
  // }, []);

  const orderData = userData.orderHistory.map((order) => ({
    date: new Date(order.date).toLocaleDateString(),
    total: order.total,
  }));

  const donationData = userData.donationHistory.map((donation) => ({
    date: new Date(donation.date).toLocaleDateString(),
    amount: donation.amount,
  }));

  const carbonData = [
    {
      name: "Carbon Footprint Reduced",
      value: userData.carbonFootprintReduced,
    },
    {
      name: "Remaining Footprint",
      value: 1000 - userData.carbonFootprintReduced,
    },
  ];

  const COLORS = ["#0088FE", "#FF8042"];

  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>

      <div className="dashboard-section">
        <h2>Order History</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={orderData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="dashboard-section">
        <h2>Donation History</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={donationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#82ca9d"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="dashboard-section">
        <h2>People Helped</h2>
        <p>{userData.peopleHelped}</p>
      </div>

      <div className="dashboard-section">
        <h2>Carbon Footprint Reduction</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={carbonData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {carbonData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserDashboard;
