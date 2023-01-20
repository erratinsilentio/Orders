import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

import Button from "@mui/material/Button";
import { useState } from "react";
import { BasicSelect } from "../components/invoices/Select";
import BasicTable from "../components/invoices/Table";
import { changeOrderStatus, getOrder } from "../api/orders";
import { deposit, withdraw } from "../store/moneySlice";
import { pay } from "../store/orderSlice";
import { useNotificationContext } from "../utils/NotificationContext";

export const InvoicesPage = () => {
  const orders = useSelector((state: RootState) => state.order);
  const { setSuccess, setError } = useNotificationContext();
  const dispatch = useDispatch();

  const [selected, setSelected] = useState<string>("");

  const handlePay = async (id: string) => {
    try {
      const order = await getOrder(id);
      const payedOrder = await changeOrderStatus(order.id, "payed");
      dispatch(deposit(payedOrder.kwota));
      dispatch(pay(payedOrder.id));
      setSuccess();
    } catch {
      setError();
    }
  };

  return (
    <>
      <BasicTable orders={orders} />
      <BasicSelect
        orders={orders}
        setSelected={setSelected}
        selected={selected}
      />
      <Button variant="outlined" onClick={() => handlePay(selected)}>
        ROZLICZ
      </Button>
    </>
  );
};
