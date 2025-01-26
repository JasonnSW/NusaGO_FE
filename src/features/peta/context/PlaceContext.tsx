"use client"
import React, { createContext, useState, useContext } from "react";

interface PlaceContextType {
  photoUrl: string | null;
  setPhotoUrl: (url: string | null) => void;
  address: string;
  setAddress: (address: string) => void;
}

const PlaceContext = createContext<PlaceContextType | undefined>(undefined);
export const PlaceProvider = ({ children }: { children: React.ReactNode }) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [address, setAddress] = useState<string>("");

  return (
    <PlaceContext.Provider value={{ photoUrl, setPhotoUrl, address, setAddress }}>
      {children}
    </PlaceContext.Provider>
  );
};

export const usePlaceContext = () => {
  const context = useContext(PlaceContext);
  if (!context) {
    throw new Error("usePlaceContext must be used within a PlaceProvider");
  }
  return context;
};
