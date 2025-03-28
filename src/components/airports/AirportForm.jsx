import React, { useState } from "react";
import api from "../../services/api";
import { TextField, Button, Box, Stack, Alert } from "@mui/material";

export default function AirportForm({ onCreated }) {
  const [nombre, setNombre] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await api.post("/aeropuertos", { nombre, ciudad });
      setNombre("");
      setCiudad("");
      if (onCreated) onCreated(); // refresca lista si se pasa una prop
    } catch (err) {
      setError("No se pudo crear el aeropuerto.");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Stack spacing={2}>
        <TextField
          label="Nombre del Aeropuerto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <TextField
          label="Ciudad"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
          required
        />
        <Button type="submit" variant="contained">
          Crear Aeropuerto
        </Button>
        {error && <Alert severity="error">{error}</Alert>}
      </Stack>
    </Box>
  );
}
