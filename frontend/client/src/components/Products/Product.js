import React, { useState } from "react";
import "../../App.css";

function Product({ item, onUpdate }) {
  const [quantity, setQuantity] = useState(0);

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
    onUpdate(item.price);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      let newPrice = item.price * -1;
      console.log(newPrice);
      onUpdate(newPrice);
    }
  };

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
        {/* <p className="card-quantity">Quantity: {quantity}</p>
        <div className="quantity-buttons">
          <button className="quantity-button" onClick={handleDecreaseQuantity}>
            -
          </button>
          <button className="quantity-button" onClick={handleAddQuantity}>
            +
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Product;
