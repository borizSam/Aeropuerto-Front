import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import PlaneForm from "../components/planes/PlaneForm";
import PlaneList from "../components/planes/PlaneList";
import api from "../services/api";

export default function Planes() {
  const [planes, setPlanes] = useState([]);

  const loadData = () => {
    api.get("/aviones").then((res) => setPlanes(res.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Gestión de Aviones
      </Typography>
      <PlaneForm onCreated={loadData} />
      <PlaneList planes={planes} onDeleted={loadData} />
    </Container>
  );
}

