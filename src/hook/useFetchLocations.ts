import { useState, useEffect } from "react";
import axios from "axios";

import { LocationsResponse, Location } from "../types";

export const useFetchLocations = (
  start: number,
  limit: number,
  url: string
) => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .post<LocationsResponse>(
        url,
        {
          start,
          limit,
        },
        {
          headers: {
            "Content-Type": "application/json",
            username: "amitphatak$r5labs.com",
          },
        }
      )
      .then((res) => {
        setIsLoading(false);
        setLocations(res.data.locations);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, []);
  return { data: locations, isLoading, error };
};
