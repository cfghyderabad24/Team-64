import { useState, React, useEffect } from "react";
import Axios from "axios";
import Event from "./Event";
import "./Event.css";

function Events() {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const res = await Axios.get("http://localhost:7500/Events");
    setData(res.data.payload);
    console.log(res.data.payload);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="events-cont">
      {data.map((i) => {
        return <Event item={i} />;
      })}
    </div>
  );
}

export default Events;
