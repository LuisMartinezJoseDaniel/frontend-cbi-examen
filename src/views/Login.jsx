import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/admin");
  };

  return (
    <Box
      display="grid"
      sx={{
        placeContent: "center",
      }}
    >
      <Typography variant="h4" marginY={4}>
        Iniciar sesión
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container gap={4}>
          <Grid item xs={12}>
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
          <Grid item xs={12}>
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
          <Grid item xs={12}>
            <Button variant="contained" type="submit">
              Ingresar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
