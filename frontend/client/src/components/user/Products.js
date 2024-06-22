import { useState, React, useEffect } from "react";

function Products() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div className="card">
      {/* <img src={image} alt={title} className="card-image" /> */}
      <div className="card-content">
        <h2 className="card-title">Heading</h2>
        <p className="card-price">450.00</p>
        <p className="card-description">Random description</p>
      </div>
    </div>
  );
}

export default Products;
