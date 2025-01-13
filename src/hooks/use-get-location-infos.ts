import { useQuery } from "react-query";

import { Location, Details } from "../Types/location";
import { env } from "../configs";

const normalizeData = (data: Details, location: Location) => {
  const city = data?.city || data?.locality || "";
  const state = data?.principalSubdivision || "";
  const country = data?.countryName || "";

  if (!city || !state || !country) {
    return `${location.lat.toFixed(4)}°, ${location.lng.toFixed(4)}°`;
  }
  const locationString = [city, state, country].filter(Boolean).join(", ");

  return locationString;
};

export const useGetLocationInfos = ({ lat, lng }: Location) => {
  const queryFn = async () => {
    const queryString = new URLSearchParams({
      latitude: lat.toString(),
      longitude: lng.toString(),
      localityLanguage: "en",
    }).toString();

    const url = `${env.VITE_API_URL}?${queryString}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["locationName", lat, lng],
    enabled: Boolean(lat && lng),
    queryFn,
    retry: false,
    retryOnMount: false,
  });

  const locationName = normalizeData(data, { lat, lng });

  return { data, loading: isLoading, locationName };
};
