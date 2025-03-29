import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  Tooltip,
  IconButton,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import {
  Dashboard,
  LocationCity,
  Airlines,
  ConnectingAirports,
  GitHub,
  Menu,
  ChevronLeft,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const drawerWidth = 72;
const expandedWidth = 200;

const navItems = [
  { icon: <Dashboard />, label: "Inicio", path: "/" },
  { icon: <LocationCity />, label: "Aeropuertos", path: "/airports" },
  { icon: <Airlines />, label: "Aviones", path: "/planes" },
  { icon: <ConnectingAirports />, label: "Vuelos", path: "/flights" },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: expanded ? expandedWidth : drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: expanded ? expandedWidth : drawerWidth,
          boxSizing: "border-box",
          transition: "width 0.3s",
          overflowX: "hidden",
          backgroundColor: "background.default",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: expanded ? "space-between" : "center",
          px: 1,
          py: 2,
        }}
      >
        {expanded && <Typography variant="subtitle2">Menú</Typography>}
        <IconButton onClick={toggleSidebar}>
          {expanded ? <ChevronLeft /> : <Menu />}
        </IconButton>
      </Box>

      <Divider />

      <List>
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Tooltip
              title={!expanded ? item.label : ""}
              placement="right"
              arrow
              key={item.label}
            >
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 1.5,
                  borderRadius: 2,
                  backgroundColor: active ? "action.selected" : "transparent",
                  "&:hover": {
                    backgroundColor: "action.hover",
                  },
                }}
              >
                {item.icon}
                {expanded && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.label}
                  </motion.span>
                )}
              </ListItemButton>
            </Tooltip>
          );
        })}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <Box p={1}>
        <Tooltip title="Sobre mí" placement="right" arrow>
          <IconButton
            href="https://github.com/borizSam"
            rel="noopener noreferrer"
            sx={{
              mx: expanded ? "auto" : "auto",
              display: "block",
              mb: 1,
            }}
          >
            <GitHub />
          </IconButton>
        </Tooltip>
      </Box>
    </Drawer>
  );
}




