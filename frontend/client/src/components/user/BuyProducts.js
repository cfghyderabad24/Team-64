import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PAD_PRICE = 600;
const CUP_PRICE = 650;

const BuyProduct = () => {
  const [pads, setPads] = useState(0);
  const [cups, setCups] = useState(0);
  const [member, setMember] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
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
        'http://localhost:2024/buyproduct',
        { price: totalPrice, pads, cups ,member,token},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessage(response.data);
    } catch (error) {
      setMessage(`Error: ${error.response ? error.response.data.error : error.message}`);
    }
  };

  return (
    <div className="container mt-5 w-25 text-start">
      <h2>Buy Product</h2>
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
        <button type="submit" className="btn btn-primary">Place Order</button>
      </form>
      {message && <div className="mt-3 alert alert-info">{message}</div>}
    </div>
  );
};

export default BuyProduct;
