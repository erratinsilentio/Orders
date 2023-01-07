import { Client, Order } from "../../data";
import { Link } from "react-router-dom";
import style from "./orderDetails.module.css";
import { DataBox } from "../card/Box";

type Props = {
  order: Order;
  client: Client;
};

export const FullOrderCard: React.FC<Props> = ({ order, client }) => {
  return (
    <DataBox className={style.box}>
      <div className={style.container}>
        <div className={style.right}>
          <p>
            <Link to={`/clients/${client.id}`}>{client.imie + " " + client.nazwisko}</Link>
          </p>
          <p>Tytuł: {order.tytul}</p>
          <p>Opis: {order.opis}</p>
          <p>Ilość: {order.ilosc}</p>
        </div>
      </div>
    </DataBox>
  );
};