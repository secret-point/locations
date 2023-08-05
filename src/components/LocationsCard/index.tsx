import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Address } from "../../types";
import { ThemeProvider, createTheme } from "@mui/material/styles";

interface LocationsCardProps {
  details: string;
  address: Address;
  type: string;
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const LocationsCard: React.FC<LocationsCardProps> = ({
  details,
  address,
  type,
}) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Card
        sx={{
          width: "250px",
          minHeight: "30vh",
          margin: "auto",
          display: "flex",
        }}
      >
        <CardContent
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            {type}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {details || "-No details-"}
          </Typography>
          <Typography variant="body2">
            {address.addressLine1}
            <br />
            {address.city + ", " + address.state + " " + address.zip}
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default LocationsCard;
