import { Client, Order } from "../../data";
import { Link, useNavigate } from "react-router-dom";
import style from "./orderDetails.module.css";
import { DataBox } from "../card/Box";
import { formatName } from "../../utils/formatName";
import Button from "@mui/material/Button";
import { deleteOrder } from "../../api/orders";
import { deleteClientsOrder } from "../../api/clients";
import { useNotificationContext } from "../../utils/NotificationContext";
import useConfirm from "../../utils/useConfirm";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  order: Order;
  client: Client;
};

export const FullOrderCard: React.FC<Props> = ({ order, client }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showModal } = useConfirm();
  const { setSuccess, setError } = useNotificationContext();

  const mutation = useMutation(
    async (values: Order) => {
      return deleteOrder(values.id).then((data) => {
        deleteClientsOrder(data.telefon, data);
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["clients", "orders", "order"]);
        setSuccess();
        navigate("/orders");
      },
      onError: () => {
        setError();
      },
    }
  );

  const showConfirm = async () => {
    const isConfirmed = await showModal();

    if (isConfirmed) {
      mutation.mutate(order);
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
