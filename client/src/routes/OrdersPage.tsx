import style from "../styles/orders.module.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { DataTable } from "../components/orders/Table";
import { getAllOrders } from "../api/orders";
import { useQuery } from "@tanstack/react-query";
import { useUserContext } from "../utils/UserContext";
import { useMemo } from "react";

export const OrdersPage = () => {
  const { data, isLoading, error } = useQuery(["orders"], getAllOrders);
  const { users } = useUserContext();

  const table = useMemo(() => {
    return <DataTable orders={data} />;
  }, [data]);

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>error...</p>;

  return (
    <div className={style.container}>
      <Link to={"/orders/add"} className={style.link}>
        <Button variant="outlined">Add order</Button>
      </Link>
      {table}
    </div>
  );
};
