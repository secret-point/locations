import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Grid, Paper, Typography } from "@mui/material";
import LocationsCard from "../LocationsCard";
import { Location, LocationsResponse } from "../../types";
import { LoadMore } from "../LoadMore";

type LocationsListProps = {
  url: string;
};

const LocationsList: React.FC<LocationsListProps> = ({ url }) => {
  const [start, setStart] = useState<number>(0);
  const [limit, setLimit] = useState(10);
  const [error, setError] = useState(null);
  const [locations, setLocations] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadMore = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post<LocationsResponse>(
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
      );
      setLocations(locations.concat(res.data.locations));
      setIsLoading(false);
    } catch (err) {
      setError(error);
    }
  };

  useEffect(() => {
    loadMore();
  }, []);

  if (error) return <Typography>{error}</Typography>;
  return (
    <Grid container direction="column" alignContent="center" spacing={3}>
      {locations.map((location: Location, index: number) => (
        <Grid
          item
          key={location.locationId}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LocationsCard
            key={`${location.locationId} + ${index}`}
            details={location.locationDetails}
            address={location.address}
            type={location.locationType}
          />
        </Grid>
      ))}
      <LoadMore onLoad={loadMore} setStart={setStart} isLoading={isLoading} />
    </Grid>
  );
};

export default LocationsList;
