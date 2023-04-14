import { Person } from "@mui/icons-material";
import { Container, Button, Box } from "@mui/material";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
  const navigate = useLocation();

  console.log(navigate);

  return (
    <Box component="nav" display="flex" justifyContent="space-between">
      <Box>
        <Button
          variant={navigate.pathname === "/" ? "contained" : "outlined"}
          component={Link}
          to="/"
          sx={{
            marginRight: 1,
          }}
        >
          Inicio
        </Button>
        <Button
          variant={navigate.pathname === "/admin" ? "contained" : "outlined"}
          component={Link}
          to="/admin"
        >
          Admin
        </Button>
      </Box>
      <Button component={Link} to="/auth/login">
        <Person />
      </Button>
    </Box>
  );
};
