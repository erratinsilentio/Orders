import { Client, Order } from "../data";

export const formatPhone = (client: Client | Order) => {
  let phone = client.telefon;
  return (
    phone.slice(0, 3) +
    " " +
    phone.slice(3, 6) +
    " " +
    phone.slice(6, 9) +
    " " +
    phone.slice(9)
  );
};
