import React from "react";
import useAirports from "../../hooks/useAirports";
import { Card, CardContent, Typography, Grid } from "@mui/material";

export default function AirportList() {
  const airports = useAirports();

  return (
    <Grid container spacing={2}>
      {airports.map((airport) => (
        <Grid item xs={12} md={6} lg={4} key={airport.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{airport.nombre}</Typography>
              <Typography color="textSecondary">{airport.ciudad}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
