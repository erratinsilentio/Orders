import style from "../styles/orders.module.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { DataTable } from "../components/orders/Table";

export const OrdersPage = () => {
  return (
    <div className={style.container}>
      <Link to={"/orders/add"} className={style.link}>
        <Button variant="outlined">Add order</Button>
      </Link>
      <DataTable />
    </div>
  );
};
