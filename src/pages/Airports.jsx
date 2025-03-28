import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import AirportList from "../components/airports/AirportList";
import AirportForm from "../components/airports/AirportForm";

export default function Airports() {
  const [refresh, setRefresh] = useState(false);

  const handleCreated = () => {
    setRefresh(!refresh); // Cambia el estado para forzar recarga
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Aeropuertos
      </Typography>

      <AirportForm onCreated={handleCreated} />
      <AirportList key={refresh} /> {/* vuelve a renderizar cuando cambia refresh */}
    </Container>
  );
}
