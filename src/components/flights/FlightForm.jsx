import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { TextField, Button, Box, Stack, Alert, MenuItem } from "@mui/material";

export default function FlightForm({ onCreated }) {
  const [form, setForm] = useState({
    destino: "",
    fechaSalida: "",
    fechaLlegada: "",
    avionId: "",
    origenId: "",
    destinoId: "",
  });

  const [aviones, setAviones] = useState([]);
  const [aeropuertos, setAeropuertos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get("/aviones").then(res => setAviones(res.data));
    api.get("/aeropuertos").then(res => setAeropuertos(res.data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await api.post("/vuelos", {
        ...form,
        fechaSalida: new Date(form.fechaSalida).toISOString(),
        fechaLlegada: new Date(form.fechaLlegada).toISOString(),
      });

      // Limpiar formulario
      setForm({
        destino: "",
        fechaSalida: "",
        fechaLlegada: "",
        avionId: "",
        origenId: "",
        destinoId: "",
      });

      if (onCreated) onCreated();
    } catch (err) {
      console.error(err);
      setError("No se pudo crear el vuelo.");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Stack spacing={2}>
        <TextField
          name="destino"
          label="Destino"
          value={form.destino}
          onChange={handleChange}
          required
        />
        <TextField
          name="fechaSalida"
          label="Fecha de salida"
          type="datetime-local"
          value={form.fechaSalida}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          name="fechaLlegada"
          label="Fecha de llegada"
          type="datetime-local"
          value={form.fechaLlegada}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          select
          name="avionId"
          label="Avión"
          value={form.avionId}
          onChange={handleChange}
          required
        >
          {aviones.map((a) => (
            <MenuItem key={a.id} value={a.id}>
              {a.modelo}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          name="origenId"
          label="Aeropuerto Origen"
          value={form.origenId}
          onChange={handleChange}
          required
        >
          {aeropuertos.map((a) => (
            <MenuItem key={a.id} value={a.id}>
              {a.nombre}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          name="destinoId"
          label="Aeropuerto Destino"
          value={form.destinoId}
          onChange={handleChange}
          required
        >
          {aeropuertos.map((a) => (
            <MenuItem key={a.id} value={a.id}>
              {a.nombre}
            </MenuItem>
          ))}
        </TextField>
        <Button type="submit" variant="contained">
          Crear Vuelo
        </Button>
        {error && <Alert severity="error">{error}</Alert>}
      </Stack>
    </Box>
  );
}
