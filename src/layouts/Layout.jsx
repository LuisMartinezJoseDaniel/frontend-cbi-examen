import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
  return (
    <Container component="main">
      <Navbar />
      <Outlet />
    </Container>
  );
};
