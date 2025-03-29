import { useEffect, useState } from "react";
import api from "../services/api";

export default function usePlanes(refresh) {
  const [planes, setPlanes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanes = async () => {
      setLoading(true);
      try {
        const res = await api.get("/aviones");
        setPlanes(res.data);
      } catch (err) {
        console.error("Error cargando aviones:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanes();
  }, [refresh]);

  return { planes, loading };
}
