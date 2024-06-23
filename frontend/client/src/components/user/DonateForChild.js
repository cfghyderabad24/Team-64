import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MEM_COST = 900;

const DonateForChild = () => {
  const [pads, setPads] = useState(0);
  const [cups, setCups] = useState(0);
  const [member, setMember] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Calculate the total price whenever member changes
    setTotalPrice(Number(member) * MEM_COST);
  }, [member]);

  const handleOrder = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');

      const response = await axios.post(
        'http://localhost:2024/buyproduct',
        { price: totalPrice, pads, cups, member },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessage(response.data.message || "Order placed successfully");
    } catch (error) {
      setMessage(`Error: ${error.response ? error.response.data.error : error.message}`);
    }
  };

  return (
    <div className="container mt-5 w-25 text-start">
      <h2>Donate for Child</h2>
      <form onSubmit={handleOrder}>
        <div className="mb-3">
          <label htmlFor="member" className="form-label">Members</label>
          <input
            type="number"
            className="form-control"
            id="member"
            value={member}
            onChange={(e) => setMember(e.target.value)}
            min="0"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="totalPrice" className="form-label">Total Price</label>
          <input
            type="number"
            className="form-control"
            id="totalPrice"
            value={totalPrice}
            readOnly
          />
        </div>
        <button type="submit" className="btn btn-primary">Place Order</button>
      </form>
      {message && <div className="mt-3 alert alert-info">{message}</div>}
    </div>
  );
};

export default DonateForChild;
