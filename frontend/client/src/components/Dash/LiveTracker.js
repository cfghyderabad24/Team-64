import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LiveTracker = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapContainerRef.current).setView(
      [17.385044, 78.486671],
      5
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const locations = [
      { name: "Hyderabad", coords: [17.385044, 78.486671] },
      { name: "Delhi", coords: [28.613939, 77.209021] },
      { name: "Mumbai", coords: [19.07609, 72.877426] },
      { name: "Bangalore", coords: [12.971599, 77.594566] },
      { name: "Chennai", coords: [13.08268, 80.270718] },
      { name: "Kolkata", coords: [22.572646, 88.363895] },
    ];

    const markerIcon = L.icon({
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      iconSize: [25, 41], // size of the icon
      iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
      popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
      shadowSize: [41, 41], // size of the shadow
    });

    locations.forEach((location) => {
      L.marker(location.coords, { icon: markerIcon })
        .addTo(map)
        .bindPopup(`<b>${location.name}</b>`)
        .openPopup();
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="live-tracker">
      <h2>Live Tracker</h2>
      <div id="map" ref={mapContainerRef} style={{ height: "400px" }}></div>
    </div>
  );
};

export default LiveTracker;
