import { Order, Client } from "../data";
import { supabase } from "../Supabase";

export const getClient = async (id: string | number) => {
  let { data: client, error } = await supabase
    .from("clients")
    .select("*")
    .eq("id", id)
    .single();

  return client;
};

export const getClientByTelephone = async (tel: string) => {
  let { data: client, error } = await supabase
    .from("clients")
    .select("*")
    .eq("telefon", tel)
    .single();

  return client;
};

export const getAllClients = async () => {
  let { data: clients, error } = await supabase.from("clients").select();
  if (error) return error;

  return clients as Client[];
};

export const addClient = async (client: Omit<Client, "id">) => {
  const { data, error } = await supabase.from("clients").insert([client]);
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

export const updateClientsOrders = async (tel: string, order: Order) => {
  const client = await getClientByTelephone(tel);
  const hisOrders = client.orders;
  const newOrders = [...hisOrders, order];
  const newClient = { ...client, orders: newOrders };
  const data = updateClient(client.id, newClient);

  return data;
};

export const deleteClientsOrder = async (tel: string, order: Order) => {
  const res = await getClientByTelephone(tel);
  const updatedOrders = res.orders.filter((o) => o !== order.id);
  const updatedClient = { ...res, orders: updatedOrders };
  const data = await updateClient(res.id, updatedClient);

  return data;
};
