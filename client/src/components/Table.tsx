import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { clientData } from "../data";

const clientsWithOrders = clientData.filter((client) => client.Orders.length > 0);

export const DataTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Klient</TableCell>
            <TableCell align="right">Tytuł</TableCell>
            <TableCell align="right">Ilość</TableCell>
            <TableCell align="right">Detale</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientsWithOrders.map((client) =>
            client.Orders.map((order) => (
              <TableRow key={client.ID} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {client.Telefon}
                </TableCell>
                <TableCell align="right">{order.Tytul}</TableCell>
                <TableCell align="right">{order.Ilosc}</TableCell>
                <TableCell align="right">
                  <Link to={`/orders/${order.ID}`} state={{ client: client, order: order }}>
                    Więcej
                  </Link>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
