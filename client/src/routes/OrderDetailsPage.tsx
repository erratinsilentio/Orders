import { useLocation, Link, useParams } from "react-router-dom";
import style from "../styles/orderDetails.module.css";
import { getOrder } from "../api/orders";
import { getAllClients, getClientByTelephone } from "../api/clients";
import { useEffect, useState } from "react";

export const OrderDetailsPage = () => {
  const [order, setOrder] = useState(null);
  const [client, setClient] = useState(null);

  const params = useParams();

  useEffect(() => {
    getOrder(params.id).then((data) => {
      setOrder(data);
      getClientByTelephone(data?.telefon).then((res) => setClient(res));
    });
  }, []);
  // console.log(params.id);
  if (!order || !client) return <p>loading...</p>;
  console.log(order, client);

  return (
    <div className={style.container}>
      <p>{<Link to={`/clients/${client.id}`}>{client.imie + " " + client.nazwisko}</Link>}</p>
      <p>{order.tytul}</p>
      <p>{order.ilosc}</p>
      <p>{order.opis}</p>
    </div>
  );
};
