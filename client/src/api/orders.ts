type Order = {
  tytul: string;
  ilosc: string | number;
  opis: string;
  telefon: string;
};

export const getOrder = async (id: string) => {
  const response = await fetch(`http://localhost:3000/orders/${id}`);
  const data = await response.json();
  console.log(data);
  return data;
};

export const getAllOrders = async () => {
  const response = await fetch(`http://localhost:3000/orders/`);
  const data = await response.json();
  console.log(data);
  return data;
};

export const addOrder = async (order: Order) => {
  const response = await fetch(`http://localhost:3000/orders`, {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(order),
  });
  const data = await response.json();
  console.log(data);
  return data;
};

export const deleteOrder = async (id: string) => {
  const response = await fetch(`http://localhost:3000/orders/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  console.log(data);
};

export const updateOrder = async (id: string, order: Order) => {
  const response = await fetch(`http://localhost:3000/orders/${id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(order),
  });
  const data = await response.json();
  console.log(data);
};
