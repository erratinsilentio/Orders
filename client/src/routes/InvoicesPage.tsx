import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import Button from "@mui/material/Button";
import { useState } from "react";
import { BasicSelect } from "../components/invoices/Select";
import BasicTable from "../components/invoices/Table";
import { changeOrderStatus, getOrder } from "../api/orders";
import { deposit } from "../store/moneySlice";
import { pay } from "../store/orderSlice";
import { useNotificationContext } from "../utils/NotificationContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const InvoicesPage = () => {
  const queryClient = useQueryClient();
  const orders = useSelector((state: RootState) => state.order);
  const { setSuccess, setError } = useNotificationContext();
  const dispatch = useDispatch();

  const [selected, setSelected] = useState<string>("");

  const mutation = useMutation(
    async (values: string) => {
      return getOrder(values).then((order) =>
        changeOrderStatus(order.id, "payed").then((payedOrder) => {
          dispatch(deposit(payedOrder.kwota));
          dispatch(pay(payedOrder.id));
        })
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["orders"]);
        setSuccess();
      },
      onError: () => {
        setError();
      },
    }
  );

  const handlePay = async (id: string) => mutation.mutate(id);

  return (
    <>
      <BasicTable orders={orders} />
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <BasicSelect
          orders={orders}
          setSelected={setSelected}
          selected={selected}
        />
        <Button
          variant="outlined"
          onClick={() => handlePay(selected)}
          style={{ minWidth: "49%" }}
        >
          ROZLICZ
        </Button>
      </section>
    </>
  );
};
