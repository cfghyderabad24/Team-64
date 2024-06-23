import React from "react";

const DonorProfile = () => {
  // Hardcoded donor profile information
  const donor = {
    name: "Ramesh",
    totalDonations: 500,
    girlsHelped: 200,
    carbonFootprintReduced: 1500,
  };

  return (
    <div className="donor-profile">
      <h2>Donor Profile</h2>
      <p>Name: {donor.name}</p>
      <p>Total Donations: ${donor.totalDonations}</p>
      <p>Girls Helped: {donor.girlsHelped}</p>
      <p>Carbon Footprint Reduced: {donor.carbonFootprintReduced} kg</p>
    </div>
  );
};

export default DonorProfile;
