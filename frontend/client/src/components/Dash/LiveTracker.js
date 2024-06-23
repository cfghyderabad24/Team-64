import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix the default icon issue with Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const LiveTracker = () => {
  const location = { lat: 17.385044, lng: 78.486671 }; // Hyderabad, India
  const progress = 75; // Percentage of project completion

  useEffect(() => {
    // Simulate live update with a timeout
    const interval = setInterval(() => {
      // Add your update logic here
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="live-tracker">
      <h2>Live Progress Tracker</h2>
      <p>Current Location: School in Hyderabad, India</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <MapContainer
        center={location}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={location}>
          <Popup>
            Current location of the donations project: Hyderabad, India
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LiveTracker;
