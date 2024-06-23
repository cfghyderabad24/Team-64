import React from "react";
import DonationStats from "./DonationStats";
import LiveTracker from "./LiveTracker";
import ImpactGraph from "./ImpactGraph";
import DonorProfile from "./DonorProfile";
import DonationForm from "./DonationForm";
import ActivityLog from "./ActivityLog";
import FeedbackForm from "./FeedbackForm";
import "./Dash.css";

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Helllo, Ramesh! Look at your impact!</h1>
      </header>
      <main>
        <DonorProfile />
        <ImpactGraph />
        <LiveTracker />
        <DonationStats />
        <ActivityLog />
        <FeedbackForm />
      </main>
    </div>
  );
};

export default App;
