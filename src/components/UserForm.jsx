import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { storeData } from "../api/backendApi";
import { useNavigate } from "react-router-dom";
import { ArrowBackIos } from "@mui/icons-material";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";
import { BackendAlert } from "./BackendAlert";

export const UserForm = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [backendErrors, setBackendErrors] = useState([]);
  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsSaving(true);
      const dataToSend = {
        usuario: data.username,
        contrasena: data.password,
        rol: {
          nombre: data.nombreRol,
          descripcion: data.descripcionRol,
        },
        user: {
          nombre: data.nombre,
          apellidoPaterno: data.apellidoPaterno,
          apellidoMaterno: data.apellidoMaterno,
        },
      };

      await storeData("/authentication", dataToSend);
      toast("Usuario agregado correctamente");
      setIsSaving(false);
      navigate("/admin");
    } catch (error) {
      if (isAxiosError(error)) {
        const errors = [];
        errors.push(error.response?.data.message);
        console.log(error.response?.data.message);
        setBackendErrors(errors);
      }
      console.log(error);
      setIsSaving(false);
    }
  };

  return (
    <Box
      display="grid"
      sx={{
        placeContent: "center",
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" marginY={4}>
          Dar de alta a un nuevo usuario
        </Typography>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIos />
        </IconButton>
      </Box>
      {backendErrors.length > 0 && (
        <BackendAlert backendErrors={backendErrors} />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField
                label="Usuario"
                {...register("username", {
                  required: "Este campo es requerido",
                })}
                error={!!errors.username}
                helperText={errors.username?.message}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField
                label="Contraseña"
                type="password"
                {...register("password", {
                  required: "Este campo es requerido",
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <TextField
                label="Nombre"
                {...register("nombre", {
                  required: "Este campo es requerido",
                })}
                error={!!errors.nombre}
                helperText={errors.nombre?.message}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <TextField
                label="Apellido Paterno"
                {...register("apellidoPaterno", {
                  required: "Este campo es requerido",
                })}
                error={!!errors.apellidoPaterno}
                helperText={errors.apellidoPaterno?.message}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <TextField
                label="Apellido Materno"
                {...register("apellidoMaterno", {
                  required: "Este campo es requerido",
                })}
                error={!!errors.apellidoMaterno}
                helperText={errors.apellidoMaterno?.message}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                label="Nombre del Permiso"
                {...register("nombreRol", {
                  required: "Este campo es requerido",
                  minLength: {
                    value: 3,
                    message: "El nombre debe tener al menos 3 caracteres",
                  },
                })}
                error={!!errors.nombre}
                helperText={errors.nombre?.message}
              ></TextField>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                label="Descripcion del permiso"
                {...register("descripcionRol", {
                  required: "Este campo es requerido",
                })}
                error={!!errors.descripcionRol}
                helperText={errors.descripcionRol?.message}
              ></TextField>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" disabled={isSaving}>
              Registrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
