import React from "react";

const DonationStats = () => {
  const totalDonations = 500;
  const girlsHelped = 200;
  const carbonFootprintReduced = 1500; // kg

  return (
    <div className="donation-stats">
      <h2>Donation Statistics</h2>
      <ul>
        <li>Total Donations: ₹{totalDonations}</li>
        <li>Girls Helped: {girlsHelped}</li>
        <li>Carbon Footprint Reduced: {carbonFootprintReduced} kg</li>
      </ul>
    </div>
  );
};

export default DonationStats;
