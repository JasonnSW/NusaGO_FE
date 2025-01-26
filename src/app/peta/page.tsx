"use client";
import React, { useState } from "react";
import Maps from "@/features/peta/components/map";

export default function Peta() {
  const [location, setLocation] = useState({
    latitude: -6.1753924,
    longitude: 106.8271528,
    address: "",
  });

  return (
    <>
      <Maps
        latitude={location.latitude}
        setLatitude={(lat) => setLocation({ ...location, latitude: lat })}
        longitude={location.longitude}
        setLongitude={(lng) => setLocation({ ...location, longitude: lng })}
        address={location.address}
        setAddress={(address) => setLocation({ ...location, address: address })}
      />
    </>
  );
}
