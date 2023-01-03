import style from "../styles/orders.module.css";
import { clientData } from "../data";
import { Link } from "react-router-dom";
import { DataTable } from "../components/Table";

export const OrdersPage = () => {
  return (
    <div className={style.container}>
      <Link to={"/orders/add"} className={style.link}>
        <button>New Order</button>
      </Link>
      <DataTable />
    </div>
  );
};
