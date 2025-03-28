import { createContext, useState } from "react";

export const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <ApiContext.Provider value={{ loading, setLoading, error, setError }}>
      {children}
    </ApiContext.Provider>
  );
}
