import { useState, useEffect } from "react";

export const useLocation = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number }>({
    lat: 21.4225,
    lng: 39.8262,
  });

  useEffect(() => {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setLocation({ lat, lng });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  return { location };
};
