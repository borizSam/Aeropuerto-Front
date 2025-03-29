import React, { useEffect, useState } from "react";
import { Box, Card, Typography, Grid } from "@mui/material";
import api from "../../services/api";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

const StatCard = ({ icon, label, value }) => (
  <Card sx={{ p: 2, textAlign: "center", minWidth: 200 }}>
    <Box fontSize="2.5rem">{icon}</Box>
    <Typography variant="h6">{label}</Typography>
    <Typography variant="h4">{value}</Typography>
  </Card>
);

export default function StatsCards() {
  const [stats, setStats] = useState({
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
      setStats({
        aeropuertos: aer.data.length,
        aviones: avi.data.length,
        vuelos: vue.data.length,
      });
    };

    fetchStats();
  }, []);

  return (
    <Grid container spacing={3} justifyContent="center" sx={{ my: 3 }}>
      <Grid item>
        <StatCard icon={<FlightTakeoffIcon />} label="Aeropuertos" value={stats.aeropuertos} />
      </Grid>
      <Grid item>
        <StatCard icon={<AirplaneTicketIcon />} label="Aviones" value={stats.aviones} />
      </Grid>
      <Grid item>
        <StatCard icon={<TravelExploreIcon />} label="Vuelos" value={stats.vuelos} />
      </Grid>
    </Grid>
  );
}
