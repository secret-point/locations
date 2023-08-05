import React, { useMemo, createRef } from "react";
import Box from "@mui/material/Box";
import LocationsList from "../components/LocationsList";

type RefType = {
  current: null;
};

const Home: React.FC = () => {
  const LOCATIONS_API_BASE_URL = useMemo(
    () =>
      (process.env.REACT_APP_PROXY_URL as string) +
      process.env.REACT_APP_LOCATIONS_API_URL,
    []
  );

  return (
    <Box p={3} sx={{ textAlign: "center" }}>
      <LocationsList url={LOCATIONS_API_BASE_URL} />
    </Box>
  );
};

export default Home;
