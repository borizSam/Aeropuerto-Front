import { useEffect, useState } from "react";
import api from "../services/api";

export default function useAirports() {
  const [airports, setAirports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const res = await api.get("/aeropuertos");
        setAirports(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAirports();
  }, []);

  return { airports, loading, error };
}
