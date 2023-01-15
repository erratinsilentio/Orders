import { Client, Order } from "../../data";
import { Link, useNavigate } from "react-router-dom";
import style from "./orderDetails.module.css";
import { DataBox } from "../card/Box";
import { formatName } from "../../utils/formatName";
import Button from "@mui/material/Button";
import { useModalContext } from "../../utils/ModalContext";
import { useCallback } from "react";
import { deleteOrder } from "../../api/orders";
import { deleteClientsOrder } from "../../api/clients";
import { useNotificationContext } from "../../utils/NotificationContext";
import { setDefaultResultOrder } from "dns";
import useConfirm from "../../utils/useConfirm";

type Props = {
  order: Order;
  client: Client;
};

export const FullOrderCard: React.FC<Props> = ({ order, client }) => {
  const navigate = useNavigate();
  const { confirm } = useConfirm();
  const { setSuccess, setError } = useNotificationContext();

  const showConfirm = async () => {
    const isConfirmed = await confirm("Do you confirm your choice?");

    if (isConfirmed) {
      deleteOrder(order.id)
        .then((data) => {
          deleteClientsOrder(data.telefon, data);
        })
        .then(() => {
          setSuccess();
          navigate("/orders");
        })
        .catch(setError);
    }
  };

  return (
    <DataBox className={style.box}>
      <div className={style.container}>
        <div className={style.right}>
          <p>
            <Link to={`/clients/${client.id}`}>
              {formatName(client.imie + " " + client.nazwisko)}
            </Link>
          </p>
          <p>Tytuł: {order.tytul}</p>
          <p>Opis: {order.opis}</p>
          <p>Ilość: {order.ilosc}</p>
          <Button onClick={showConfirm} variant="outlined">
            DELETE
          </Button>
        </div>
      </div>
    </DataBox>
  );
};
