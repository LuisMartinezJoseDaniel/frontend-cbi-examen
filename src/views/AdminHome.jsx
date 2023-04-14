import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { ListUsers } from "../components/ListUsers";
import { Link, useNavigate } from "react-router-dom";
import { ArrowBackIos } from "@mui/icons-material";

export const AdminHome = () => {
  const navigate = useNavigate();

  return (
    <Box my={4}>
      <Typography variant="h4" component="h4">
        Hola admin
      </Typography>

      <Card component="section">
        <CardContent>
          <Button variant="contained" component={Link} to="/admin/users/create">
            Crear nuevo usuario
          </Button>
          <ListUsers />
        </CardContent>
      </Card>
    </Box>
  );
};
