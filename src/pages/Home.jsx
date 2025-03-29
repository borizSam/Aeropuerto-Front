import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

export default function Home() {
  const navigate = useNavigate();
  const [counts, setCounts] = useState({
    aeropuertos: 0,
    aviones: 0,
    vuelos: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const [aer, avi, vue] = await Promise.all([
        api.get("/aeropuertos"),
        api.get("/aviones"),
        api.get("/vuelos"),
      ]);
      setCounts({
        aeropuertos: aer.data.length,
        aviones: avi.data.length,
        vuelos: vue.data.length,
      });
    };

    fetchStats();
  }, []);

  const sections = [
    {
      title: "Aeropuertos",
      path: "/airports",
      count: counts.aeropuertos,
      icon: <FlightTakeoffIcon fontSize="large" />,
    },
    {
      title: "Aviones",
      path: "/planes",
      count: counts.aviones,
      icon: <AirplaneTicketIcon fontSize="large" />,
    },
    {
      title: "Vuelos",
      path: "/flights",
      count: counts.vuelos,
      icon: <TravelExploreIcon fontSize="large" />,
    },
  ];

  return (
    <Container>
      <Box textAlign="center" mt={4}>
        <Typography variant="h4" sx={{ mt: 4 }}>
          ✈️ Bienvenido al Gestor de Vuelos
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Administra aeropuertos, aviones y vuelos desde un solo lugar.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {sections.map((section) => (
            <Grid item xs={12} sm={6} md={4} key={section.title}>
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: 4,
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <CardActionArea onClick={() => navigate(section.path)}>
                  <CardContent>
                    <Box mb={1} fontSize="2rem" textAlign="center">
                      {section.icon}
                    </Box>
                    <Typography variant="h6" align="center">
                      {section.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                    >
                      {section.count} registrados
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

