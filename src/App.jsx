import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import { Box, CssBaseline } from "@mui/material";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: (theme) => theme.palette.background.default,
          color: (theme) => theme.palette.text.primary,
          transition: "background-color 0.3s ease",
        }}
      >
        <Header />
        <Box display="flex">
          <Sidebar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              bgcolor: (theme) => theme.palette.background.default,
              color: (theme) => theme.palette.text.primary,
              minHeight: "100vh",
              transition: "background-color 0.3s ease",
            }}
          >
            <AppRoutes />
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App;

