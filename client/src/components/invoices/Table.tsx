import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { OrderSlice } from "../../store/orderSlice";

export default function BasicTable({ orders }: { orders: OrderSlice[] }) {
  return (
    <TableContainer
      component={Paper}
      style={{
        marginTop: "10px",
        marginBottom: "15px",
        backgroundColor: "#f0f9ff",
      }}
    >
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Tytuł</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map(
            (order) =>
              String(order.id)?.length > 0 && (
                <TableRow
                  key={order.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {order.id}
                  </TableCell>
                  <TableCell align="right">{order.tytul}</TableCell>
                </TableRow>
              )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
