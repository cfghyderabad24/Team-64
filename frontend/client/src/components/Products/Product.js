import React from "react";
import "../../App.css";

function Product({ item, onUpdate }) {
  return (
    <div className="card">
      <img
        src={`http://localhost:7500/products/img/${item.title}`}
        alt={item.title}
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">{item.title}</h2>
        <p className="card-price">₹{item.price}.00</p>
        <p className="card-description">{item.description}</p>
      </div>
    </div>
  );
}

export default Product;
