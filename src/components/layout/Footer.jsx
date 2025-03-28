import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 3,
        mt: 'auto',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Aeropuerto App. Todos los derechos reservados.
      </Typography>
    </Box>
  );
}
