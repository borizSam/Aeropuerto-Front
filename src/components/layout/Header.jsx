import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { Brightness4, Brightness7, FlightTakeoff } from "@mui/icons-material";
import { ColorModeContext } from "../../context/ThemeContext";

export default function Header() {
  const { toggleColorMode, mode } = useContext(ColorModeContext);

  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo + nombre */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <FlightTakeoff fontSize="large" />
          <Typography variant="h6" noWrap component="div">
            Aeropuerto App
          </Typography>
        </Box>

        {/* Modo oscuro/claro */}
        <IconButton onClick={toggleColorMode} color="inherit">
          {mode === "light" ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
