import { red } from "@mui/material/colors";
import { Order, Client } from "../data";
import { supabase } from "../main";
import { getOrderByTelephone } from "./orders";

export const getClient = async (id: string | number) => {
  let { data: clients, error } = await supabase
    .from("clients")
    .select("*")
    .eq("id", id);
  console.log(clients);
  return clients[0] as Client[];
};

export const getClientByTelephone = async (tel: string) => {
  let { data: clients, error } = await supabase
    .from("clients")
    .select("*")
    .eq("telefon", tel);

  return clients[0];
};

export const getAllClients = async () => {
  let { data: clients, error } = await supabase.from("clients").select();
  if (error) return error;
  return clients as Client[];
};

export const addClient = async (client: Omit<Client, "id">) => {
  const { data, error } = await supabase.from("clients").insert([client]);
  console.log(data);
  return data;
};

export const deleteClient = async (id: string | number) => {
  const { data, error } = await supabase.from("clients").delete().eq("id", id);
  return data;
};

export const updateClient = async (id: string | number, client: Client) => {
  const { data, error } = await supabase
    .from("clients")
    .update(client)
    .eq("id", id);
  return data;
};

/////

export const updateClientsOrders = async (tel: string, order: Order) => {
  const client = await getClientByTelephone(tel);
  const hisOrders = client.orders;
  const newOrder = await getOrderByTelephone(tel);
  const newOrderID = newOrder.id;
  const newOrders = [...hisOrders, newOrderID];
  console.log("new", newOrders);

  const { data, error } = await supabase
    .from("clients")
    .update({ orders: newOrders })
    .eq("tel", tel);
  return data;
};

export const deleteClientsOrder = async (tel: string, order: Order) => {
  const res = await getClientByTelephone(tel);

  const updatedOrders = res.orders.filter((o) => o.id !== order.id);
  const updatedClient = { ...res, orders: updatedOrders };
  const data = await updateClient(res.id, updatedClient);
  return data;
};
