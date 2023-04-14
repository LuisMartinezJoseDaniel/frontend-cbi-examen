import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export const Home = () => {
  return (
    <Box marginY={4}>
      <Typography variant="h4" color="initial">
        Hola usuario
      </Typography>

      <Typography variant="h6" color="initial">
        Bienvenido a la aplicación!
      </Typography>
    </Box>
  );
};
