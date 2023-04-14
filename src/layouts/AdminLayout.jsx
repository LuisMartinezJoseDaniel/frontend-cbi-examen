import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "../components/Navbar";

export const AdminLayout = () => {
  return (
    <Container component="main">
      <Navbar />
      <Outlet />
      <ToastContainer />
    </Container>
  );
};
