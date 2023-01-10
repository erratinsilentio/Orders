import { useParams } from "react-router-dom";
import style from "../styles/orderDetails.module.css";
import { getOrder } from "../api/orders";
import { getClientByTelephone } from "../api/clients";
import { FullOrderCard } from "../components/orders/OrderDetailsCard";
import { useQuery } from "@tanstack/react-query";

export const OrderDetailsPage = () => {
  const params = useParams();

  const { data: order } = useQuery(["order"], () => getOrder(params.id));

  const tel = order?.telefon;

  const {
    data: client,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["client", tel],
    queryFn: () => getClientByTelephone(tel),
    enabled: !!tel,
  });

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>loading...</p>;

  return (
    <div className={style.container}>
      <FullOrderCard order={order} client={client} />
    </div>
  );
};
