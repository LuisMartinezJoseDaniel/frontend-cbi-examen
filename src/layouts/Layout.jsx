// import { Container } from "@mui/material";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Container component="main">
      <Outlet />
    </Container>
  );
};
