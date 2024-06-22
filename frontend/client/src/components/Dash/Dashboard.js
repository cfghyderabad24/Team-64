import React, { useState, useEffect } from "react";
import "./Dash.css";
import Card from "./Card";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    membership: "Premium",
    lastLogin: "2024-06-21",
  });

  const [stats, setStats] = useState({
    posts: 34,
    followers: 1200,
    following: 300,
  });

  const [notifications, setNotifications] = useState([
    "You have a new message.",
    "Your subscription will expire soon.",
    "New comment on your post.",
  ]);

  const handleNotificationClick = (index) => {
    alert(notifications[index]);
  };

  return (
    <div className="dashboard">
      <Card
        title="User Info"
        content={
          <div>
            <p>Name: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>
            <p>Membership: {userInfo.membership}</p>
            <p>Last Login: {userInfo.lastLogin}</p>
          </div>
        }
      />

      <Card
        title="Statistics"
        content={
          <div>
            <p>Posts: {stats.posts}</p>
            <p>Followers: {stats.followers}</p>
            <p>Following: {stats.following}</p>
          </div>
        }
      />

      <Card
        title="Notifications"
        content={
          <ul>
            {notifications.map((note, index) => (
              <li
                key={index}
                onClick={() => handleNotificationClick(index)}
                className="notification-item"
              >
                {note}
              </li>
            ))}
          </ul>
        }
      />

      <Card
        title="Recent Activity"
        content={
          <div>
            <p>Posted a new article on 2024-06-20.</p>
            <p>Commented on a post on 2024-06-19.</p>
            <p>Liked a post on 2024-06-18.</p>
          </div>
        }
      />
    </div>
  );
};

export default Dashboard;
