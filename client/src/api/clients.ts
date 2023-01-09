import { Order } from "../data";

type Client = {
  id: string;
  imie: string;
};

export const getClient = async (id: string | number) => {
  const response = await fetch(`http://localhost:3000/clients/${id}`);
  const data = await response.json();
  console.log(data);
  return data as Client;
};

export const getClientByTelephone = async (tel: string) => {
  const response = await fetch(`http://localhost:3000/clients/`);
  const data = await response.json();
  const client = data.find((cl) => cl.telefon === tel);
  console.log(client);
  return client;
};

export const getAllClients = async () => {
  const response = await fetch(`http://localhost:3000/clients/`);
  const data = await response.json();
  console.log(data);
  return data as Client[];
};

export const addClient = async (client: Omit<Client, "id">) => {
  const response = await fetch(`http://localhost:3000/clients`, {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(client),
  });
  const data = await response.json();
  console.log(data);
  return data as Client;
};

export const deleteClient = async (id: string | number) => {
  const response = await fetch(`http://localhost:3000/clients/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  console.log(data);
};

export const updateClient = async (id: string | number, client: Client) => {
  const response = await fetch(`http://localhost:3000/clients/${id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(client),
  });
  const data = await response.json();
  console.log(data);
};

export const updateClientsOrders = async (tel: string, order: Order) => {
  const res = await getClientByTelephone(tel);

  console.log(res);
  res.orders = [
    ...res.orders,
    { id: order.id, tytul: order.tytul, ilosc: order.ilosc, opis: order.opis },
  ];

  const response = await fetch(`http://localhost:3000/clients/${res.id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(res),
  });
  const data = await response.json();
  console.log(data);
};
