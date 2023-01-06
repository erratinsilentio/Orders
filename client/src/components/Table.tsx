import * as React from "react";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { getAllOrders } from "../api/orders";
import { Order } from "../data";

export const DataTable = () => {
  const [orders, setOrders] = useState<Order[] | null>(null);

  useEffect(() => {
    getAllOrders().then((data) => {
      setOrders(data);
      console.log(orders);
    });
  }, []);

  if (!orders) return <p>loading...</p>;

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
          {orders.map((order) => (
            <TableRow key={order.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {order.telefon}
              </TableCell>
              <TableCell align="right">{order.tytul}</TableCell>
              <TableCell align="right">{order.ilosc}</TableCell>
              <TableCell align="right">
                <Link to={`/orders/${order.id}`}>Więcej</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
