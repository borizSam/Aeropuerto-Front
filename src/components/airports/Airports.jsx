import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import AirportForm from "../components/airports/AirportForm";
import AirportList from "../components/airports/AirportList";
import api from "../services/api";

export default function Airports() {
  const [airports, setAirports] = useState([]);

  const loadData = () => {
    api.get("/aeropuertos").then((res) => setAirports(res.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Gestión de Aeropuertos
      </Typography>
      <AirportForm onCreated={loadData} />
      <AirportList airports={airports} onDeleted={loadData} />
    </Container>
  );
}



