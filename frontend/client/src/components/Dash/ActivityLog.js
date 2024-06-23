import React from "react";

const ActivityLog = () => {
  // Hardcoded activity log
  const activities = [
    { id: 1, date: "2024-06-20", activity: "Donated $50" },
    { id: 2, date: "2024-05-18", activity: "Donated $100" },
    { id: 3, date: "2024-04-12", activity: "Provided feedback" },
  ];

  return (
    <div className="activity-log">
      <h2>Activity Log</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.date}: {activity.activity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;
