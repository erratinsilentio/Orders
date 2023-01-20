import { Status } from "../data";

type Order = {
  tytul: string;
  ilosc: string | number;
  opis: string;
  telefon: string;
  kwota: number;
};

export const getOrder = async (id: string | number) => {
  const response = await fetch(`http://localhost:3000/orders/${id}`);
  const data = await response.json();
  return data;
};

export const getAllOrders = async () => {
  const response = await fetch(`http://localhost:3000/orders/`);
  const data = await response.json();
  return data;
};

export const addOrder = async (order: Order) => {
  const newOrder = { ...order, status: "new" };

  const response = await fetch(`http://localhost:3000/orders`, {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(newOrder),
  });
  const data = await response.json();
  return data;
};

export const deleteOrder = async (id: string | number) => {
  const response = await fetch(`http://localhost:3000/orders/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};

export const updateOrder = async (id: string | number, order: Order) => {
  const response = await fetch(`http://localhost:3000/orders/${id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(order),
  });
  const data = await response.json();
  return data;
};

export const changeOrderStatus = async (
  id: string | number,
  status: Status
) => {
  const order = await getOrder(id);
  const updatedOrder = { ...order, status: status };
  const response = await updateOrder(id, updatedOrder);
  return response;
};
