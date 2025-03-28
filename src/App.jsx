import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import { Box, CssBaseline } from "@mui/material";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />

      <Box display="flex">
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <AppRoutes />
        </Box>
      </Box>
    </Router>
  );
}

export default App;
