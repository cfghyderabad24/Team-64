import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PAD_PRICE = 600;
const CUP_PRICE = 650;
const MIN_EDITABLE_PRICE = 50000; // Minimum price to enable location input

const DonateProducts = () => {
  const [pads, setPads] = useState(0);
  const [cups, setCups] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [location, setLocation] = useState('random location');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Calculate the total price whenever pads or cups change
    setTotalPrice(Number(pads) * PAD_PRICE + Number(cups) * CUP_PRICE);
  }, [pads, cups]);

  const handleOrder = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');

      const response = await axios.post(
        'http://localhost:2024/donateproduct',
        { price: totalPrice, pads, cups, member: 0, location },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const responseData = response.data;
      const responseMessage = typeof responseData === 'object' && 'message' in responseData
        ? responseData.message
        : "Order placed successfully";

      setMessage(responseMessage);
    } catch (error) {
      const errorMessage = error.response && error.response.data && error.response.data.error
        ? error.response.data.error
        : error.message;
      setMessage(`Error: ${errorMessage}`);
    }
  };

  return (
    <div className="container mt-5 w-25 text-start">
      <h2>Donate Product</h2>
      <form onSubmit={handleOrder}>
        <div className="mb-3">
          <label htmlFor="pads" className="form-label">Pads</label>
          <input
            type="number"
            className="form-control"
            id="pads"
            value={pads}
            onChange={(e) => setPads(e.target.value)}
            min="0"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cups" className="form-label">Cups</label>
          <input
            type="number"
            className="form-control"
            id="cups"
            value={cups}
            onChange={(e) => setCups(e.target.value)}
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
        {totalPrice > MIN_EDITABLE_PRICE && (
          <div className="mb-3">
            <label htmlFor="location" className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit" className="btn btn-primary border border-dark me-5">Place Order</button>
        <button type="clear" className="btn btn-primary border border-dark">Clear</button>
      </form>
      {message && <div className="mt-3 alert alert-info">{message}</div>}
    </div>
  );
};

export default DonateProducts;
