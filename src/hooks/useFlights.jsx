import { useEffect, useState } from "react";
import api from "../services/api";

export default function useFlights(refresh) {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlights = async () => {
      setLoading(true);
      try {
        const res = await api.get("/vuelos");
        setFlights(res.data);
      } catch (err) {
        console.error("Error cargando vuelos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, [refresh]);

  return { flights, loading };
}
