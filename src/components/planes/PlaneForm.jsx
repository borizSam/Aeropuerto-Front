import React, { useState } from "react";
import api from "../../services/api";
import { TextField, Button, Box, Stack, Alert } from "@mui/material";

export default function PlaneForm({ onCreated }) {
  const [modelo, setModelo] = useState("");
  const [capacidad, setCapacidad] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await api.post("/aviones", { modelo, capacidad: parseInt(capacidad) });
      setModelo("");
      setCapacidad("");
      if (onCreated) onCreated();
    } catch (err) {
      setError("No se pudo crear el avión.");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Stack spacing={2}>
        <TextField
          label="Modelo"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          required
        />
        <TextField
          label="Capacidad"
          type="number"
          value={capacidad}
          onChange={(e) => setCapacidad(e.target.value)}
          required
        />
        <Button type="submit" variant="contained">Crear Avión</Button>
        {error && <Alert severity="error">{error}</Alert>}
      </Stack>
    </Box>
  );
}
