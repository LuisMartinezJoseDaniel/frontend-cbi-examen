import { Alert, Box } from "@mui/material";
import React from "react";

export const BackendAlert = ({ backendErrors }) => {
  return (
    <Box component={"section"} marginY={2}>
      {backendErrors.length > 0 &&
        backendErrors.map((error, index) => (
          <Alert severity="error" key={index}>
            {error}
          </Alert>
        ))}
    </Box>
  );
};
