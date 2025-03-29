import React from "react";
import { Box, Card, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import api from "../../services/api";

export default function FlightList({ flights = [], onDeleted }) {
  const handleDelete = async (id) => {
    const confirm = window.confirm("¿Eliminar este vuelo?");
    if (!confirm) return;

    try {
      await api.delete(`/vuelos/${id}`);
      if (onDeleted) onDeleted();
    } catch (err) {
      alert("No se pudo eliminar el vuelo.");
      console.error(err);
    }
  };

  return (
    <Box display="flex" flexWrap="wrap" gap={2}>
      {flights.map((vuelo) => (
        <Card key={vuelo.id} sx={{ p: 2, width: 240 }}>
          <Typography variant="h6">Destino: {vuelo.destino}</Typography>
          <Typography variant="body2">
            Salida: {vuelo.fechaSalida.replace("T", " ")}
          </Typography>
          <Typography variant="body2">
            Llegada: {vuelo.fechaLlegada.replace("T", " ")}
          </Typography>
          <Typography variant="body2">Avión: {vuelo.avion?.modelo}</Typography>
          <Typography variant="body2">
            Origen: {vuelo.aeropuertoOrigen?.nombre}
          </Typography>
          <Typography variant="body2">
            Destino: {vuelo.aeropuertoDestino?.nombre}
          </Typography>
          <IconButton color="error" onClick={() => handleDelete(vuelo.id)}>
            <DeleteIcon />
          </IconButton>
        </Card>
      ))}
    </Box>
  );
}

