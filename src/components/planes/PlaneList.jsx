import React from "react";
import { Box, Card, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import api from "../../services/api";

export default function PlaneList({ planes = [], onDeleted }) {
  const handleDelete = async (id) => {
    const confirm = window.confirm("¿Eliminar este avión?");
    if (!confirm) return;

    try {
      await api.delete(`/aviones/${id}`);
      if (onDeleted) onDeleted();
    } catch (err) {
      alert("No se pudo eliminar el avión.");
      console.error(err);
    }
  };

  return (
    <Box display="flex" flexWrap="wrap" gap={2}>
      {planes.map((plane) => (
        <Card key={plane.id} sx={{ p: 2, width: 220 }}>
          <Typography variant="h6">{plane.modelo}</Typography>
          <Typography variant="body2">Capacidad: {plane.capacidad}</Typography>
          <IconButton color="error" onClick={() => handleDelete(plane.id)}>
            <DeleteIcon />
          </IconButton>
        </Card>
      ))}
    </Box>
  );
}


