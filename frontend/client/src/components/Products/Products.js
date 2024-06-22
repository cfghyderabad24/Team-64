import { useState, React, useEffect } from "react";
import Axios from "axios";
import Product from "./Product";
import "./products.css";

function Products() {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const res = await Axios.get("http://localhost:7500/products");
    setData(res.data.payload);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="products-cont">
      {data.map((i) => {
        return <Product item={i} />;
      })}
    </div>
  );
}

export default Products;
