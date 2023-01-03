import { useLocation, Link } from "react-router-dom";
import style from "../styles/orderDetails.module.css";

export const OrderDetailsPage = () => {
  const { state } = useLocation();
  const { client, order } = state;

  console.log(state);
  return (
    <div className={style.container}>
      <p>
        <Link to={`/clients/${client.ID}`} state={client}>
          {client.Imie + " " + client.Nazwisko}
        </Link>
      </p>
      <p>{order.Tytul}</p>
      <p>{order.Ilosc}</p>
      <p>{order.Opis}</p>
    </div>
  );
};
