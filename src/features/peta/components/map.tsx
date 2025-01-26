"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  StandaloneSearchBox,
  GroundOverlay,
} from "@react-google-maps/api";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Logo from "../../../../public/assets/LogoGreen.svg";
import { Search } from "lucide-react";
import { usePlaceContext } from "@/features/peta/context/PlaceContext";
import { fetchNDVIData } from "../actions/Dataset";
import ee from "@google/earthengine";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: -0.7893,
  lng: 113.9213,
};

type Library = "places";

const libraries: Library[] = ["places"];

type MapProps = {
  setLatitude: (lat: number) => void;
  setLongitude: (lng: number) => void;
  latitude: number;
  longitude: number;
  address: string;
  setAddress: (address: string) => void;
};

function Maps({ setLatitude, setLongitude, latitude, longitude }: MapProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries,
  });

  const [zoom, setZoom] = useState(6);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [tempAddress, setTempAddress] = useState("");
  const inputRef = useRef<google.maps.places.SearchBox | null>(null);
  const [token, setToken] = useState("");
  const [mapId, setMapId] = useState("");
  const { setPhotoUrl, setAddress } = usePlaceContext();

  const fetchData = async () => {
    try {
      const data = await fetchNDVIData();
      setToken(data.token);
      setMapId(data.mapId);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (map && mapId) {
      const overlayMapType = new google.maps.ImageMapType({
        getTileUrl: function (coord, zoom) {
          return ee.data.getTileUrl({ mapid: mapId}, 4, 5, 6);
        },
        tileSize: new google.maps.Size(256, 256),
        opacity: 1.0,
      });

      map.overlayMapTypes.clear();
      map.overlayMapTypes.insertAt(0, overlayMapType);
    }
  }, [map, mapId]);

  const handlePlaceChanged = () => {
    if (inputRef.current) {
      const places = inputRef.current.getPlaces();
      if (places && places.length > 0) {
        const place = places[0];
        const location = place.geometry?.location;
        if (location) {
          const lat = location.lat();
          const lng = location.lng();
          const formattedAddress = place.formatted_address || "";

          setLatitude(lat);
          setLongitude(lng);
          setTempAddress(formattedAddress);
          setAddress(formattedAddress);

          const photo = place.photos ? place.photos[0] : null;
          if (photo) {
            const photoUrl = photo.getUrl({ maxWidth: 400, maxHeight: 200 });
            setPhotoUrl(photoUrl);
          }

          setZoom(12);
          map?.panTo({ lat, lng });
        }
      }
    }
  };

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    const lat = event.latLng?.lat() || 0;
    const lng = event.latLng?.lng() || 0;
    setLatitude(lat);
    setLongitude(lng);
    setAddress(tempAddress);
  };
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onLoad={(map) => {
        setMap(map);
      }}
      onUnmount={() => setMap(null)}
      onClick={handleMapClick}
      options={{
        clickableIcons: true,
        mapTypeControl: true,
        streetViewControl: false,
        fullscreenControl: false,
      }}
    >
      <div className="absolute top-0 left-48 z-10">
        <StandaloneSearchBox
          onLoad={(ref) => (inputRef.current = ref)}
          onPlacesChanged={handlePlaceChanged}
        >
          <Input
            type="text"
            placeholder="Telusuri Peta Hijau"
            className="box-border border border-transparent max-w-screen-md w-[300px] h-11 m-2 px-12 rounded-3xl shadow-md text-xl outline-none placeholder-ellipsis bg-white mt-2"
            value={tempAddress}
            onChange={(e) => setTempAddress(e.target.value)}
            leftIcon={<Image src={Logo} alt="Logo" width={24} height={24} />}
            rightIcon={<Search size={24} width={24} />}
          />
        </StandaloneSearchBox>
      </div>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Maps);
