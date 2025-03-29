import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import FlightForm from "../components/flights/FlightForm";
import FlightList from "../components/flights/FlightList";
import api from "../services/api";

export default function Flights() {
  const [flights, setFlights] = useState([]);

  const loadData = () => {
    api.get("/vuelos").then((res) => setFlights(res.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Gestión de Vuelos
      </Typography>
      <FlightForm onCreated={loadData} />
      <FlightList flights={flights} onDeleted={loadData} />
    </Container>
  );
}
