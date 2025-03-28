import React from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Inicio" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/airports">
            <ListItemText primary="Aeropuertos" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/planes">
            <ListItemText primary="Aviones" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/flights">
            <ListItemText primary="Vuelos" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}

