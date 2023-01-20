import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { Client, Order } from "../../data";
import { formatPhone } from "../../utils/formatPhone";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/orderSlice";
import { RootState } from "../../store/store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNotificationContext } from "../../utils/NotificationContext";
import { changeOrderStatus } from "../../api/orders";

export const DataTable = ({ orders }: { orders: Order[] }) => {
  const orderState = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { setSuccess, setError } = useNotificationContext();

  const mutation = useMutation(
    async (values: Order) => {
      return await changeOrderStatus(values.id, "awaiting");
    },
    {
      onSuccess: (values) => {
        queryClient.invalidateQueries(["orders"]);
        dispatch(add(values));
        setSuccess();
      },
      onError: () => {
        setError();
      },
    }
  );

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        style={{ backgroundColor: "#f0f9ff" }}
      >
        <TableHead>
          <TableRow>
            <TableCell>Klient</TableCell>
            <TableCell align="right">Tytuł</TableCell>
            <TableCell align="right">Ilość</TableCell>
            <TableCell align="right">Detale</TableCell>
            <TableCell align="right">Przenieś</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {formatPhone(order.telefon)}
              </TableCell>
              <TableCell align="right">{order.tytul}</TableCell>
              <TableCell align="right">{order.ilosc}</TableCell>
              <TableCell align="right">
                <Link to={`/orders/${order.id}`}>Więcej</Link>
              </TableCell>
              <TableCell align="right">
                <Checkbox
                  onChange={() => mutation.mutate(order)}
                  checked={order.status !== "new" && true}
                  disabled={order.status !== "new" && true}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
