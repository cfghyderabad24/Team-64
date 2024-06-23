import React, { useState } from "react";

const DonationForm = () => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    alert(`Donated $${amount} with message: "${message}"`);
    setAmount("");
    setMessage("");
  };

  return (
    <div className="donation-form">
      <h2>Make a Donation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount: </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Message: </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Donate</button>
      </form>
    </div>
  );
};

export default DonationForm;
