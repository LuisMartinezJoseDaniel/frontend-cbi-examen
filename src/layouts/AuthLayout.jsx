import { Container, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <Container component="main">
      <Outlet />
    </Container>
  );
};
