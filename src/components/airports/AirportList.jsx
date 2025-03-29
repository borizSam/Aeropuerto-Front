import React from "react";
import { Box, Card, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import api from "../../services/api";

export default function AirportList({ airports = [], onDeleted }) {
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("¿Eliminar este aeropuerto?");
    if (!confirmDelete) return;

    try {
      await api.delete(`/aeropuertos/${id}`);
      if (onDeleted) onDeleted();
    } catch (err) {
      if (err.response?.status === 500) {
        alert("Este aeropuerto tiene vuelos asociados y no puede eliminarse.");
      } else {
        alert("Error al eliminar el aeropuerto.");
      }
      console.error(err);
    }
  };

  return (
    <Box display="flex" flexWrap="wrap" gap={2}>
      {airports.map((airport) => (
        <Card key={airport.id} sx={{ p: 2, width: 220 }}>
          <Typography variant="h6">{airport.nombre}</Typography>
          <Typography variant="body2">{airport.ciudad}</Typography>
          <IconButton color="error" onClick={() => handleDelete(airport.id)}>
            <DeleteIcon />
          </IconButton>
        </Card>
      ))}
    </Box>
  );
}





