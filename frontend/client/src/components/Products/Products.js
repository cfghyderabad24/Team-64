import { useState, React, useEffect } from "react";
import Axios from "axios";
import Product from "./Product";
import "./products.css";

function Products() {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(0);

  const loadData = async () => {
    const res = await Axios.get("http://localhost:7500/products");
    setData(res.data.payload);
  };

  const handleUpdate = (cost) => {
    console.log(cost);
    if (cost > 0) {
      setPrice(price + cost);
    } else if (price - cost >= 0) {
      setPrice(price + cost);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="products-cont">
        {data.map((i) => {
          return <Product item={i} onUpdate={handleUpdate} />;
        })}
      </div>
      <h2>Your Subtotal: ₹{price}</h2>
    </>
  );
}

export default Products;
