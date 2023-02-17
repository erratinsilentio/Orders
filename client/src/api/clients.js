import { supabase } from "../Supabase";
export const getClient = async (id) => {
    let { data: client, error } = await supabase
        .from("clients")
        .select("*")
        .eq("id", id)
        .single();
    return client;
};
export const getClientByTelephone = async (tel) => {
    let { data: client, error } = await supabase
        .from("clients")
        .select("*")
        .eq("telefon", tel)
        .single();
    return client;
};
export const getAllClients = async () => {
    let { data: clients, error } = await supabase.from("clients").select();
    if (error)
        return error;
    return clients;
};
export const addClient = async (client) => {
    const { data, error } = await supabase.from("clients").insert([client]);
    return data;
};
export const deleteClient = async (id) => {
    const { data, error } = await supabase.from("clients").delete().eq("id", id);
    return data;
};
export const updateClient = async (id, client) => {
    const { data, error } = await supabase
        .from("clients")
        .update(client)
        .eq("id", id);
    return data;
};
export const updateClientsOrders = async (tel, order) => {
    const client = await getClientByTelephone(tel);
    const hisOrders = client.orders;
    const newOrders = [...hisOrders, order];
    const newClient = { ...client, orders: newOrders };
    const data = updateClient(client.id, newClient);
    return data;
};
export const deleteClientsOrder = async (tel, order) => {
    const res = await getClientByTelephone(tel);
    const updatedOrders = res.orders.filter((o) => o !== order.id);
    const updatedClient = { ...res, orders: updatedOrders };
    const data = await updateClient(res.id, updatedClient);
    return data;
};
