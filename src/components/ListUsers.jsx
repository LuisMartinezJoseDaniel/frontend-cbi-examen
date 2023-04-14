import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import { useEffect, useState } from "react";
import { deleteData, getData } from "../api/backendApi";
import { Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const onDeleteUser = async (id) => {
    try {
      const isConfirmed = confirm(
        `Estas seguro de eliminar al usuario con el id ${id}`
      );
      if (!isConfirmed) {
        return;
      }

      await deleteData(`/authentication/${id}`);
      navigate(0);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await getData("/authentication");
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Nombre del Usuario</TableCell>
            <TableCell align="right">Apellidos</TableCell>
            <TableCell align="right">Permiso</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(({ idAutenticacion, usuario, user, rol }) => (
            <TableRow key={idAutenticacion}>
              <TableCell align="right" component="th" scope="row">
                {idAutenticacion}
              </TableCell>
              <TableCell align="right" component="th" scope="row">
                {usuario}
              </TableCell>
              <TableCell align="right" component="th" scope="row">
                {user.nombre}
              </TableCell>
              <TableCell align="right" component="th" scope="row">
                {user.apellidoPaterno + user.apellidoMaterno}
              </TableCell>

              <TableCell align="right" component="th" scope="row">
                {rol.nombre}
              </TableCell>
              <TableCell align="right" component="th" scope="row">
                <IconButton onClick={() => onDeleteUser(idAutenticacion)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
