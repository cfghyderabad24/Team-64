import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Invoice.css";

const Invoice = () => {
  const [invoiceData, setInvoiceData] = useState(null);
  const donationID = window.localStorage.getItem("did");

  useEffect(() => {
    const fetchInvoiceData = async () => {
      const response = await Axios.get(
        `http://localhost:2024/doantioninvoice/${donationID}`
      );
      setInvoiceData(response.data);
    };

    fetchInvoiceData();
  }, []);

  const items = [
    { name: "Pads", quantity: invoiceData.noOfPads, price: 25 },
    { name: "Cups", quantity: invoiceData.noOfCups, price: 30 },
  ];

  return (
    <div className="invoice">
      <h1>Good Universe</h1>
      <table className="invoice-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>₹{item.price.toFixed(2)}</td>
              <td>₹{(item.quantity * item.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total Amount</td>
            <td>₹{invoiceData.price}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Invoice;
