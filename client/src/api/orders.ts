import { Status } from "../data";
import { supabase } from "../Supabase";

type Order = {
  tytul: string;
  ilosc: string | number;
  opis: string;
  telefon: string;
  kwota: number;
};

export const getOrder = async (id: string | number) => {
  let { data: order, error } = await supabase
    .from("orders")
    .select()
    .eq("id", id)
    .single();

  return order;
};

export const getOrderByTelephone = async (tel: string | number) => {
  let { data: order, error } = await supabase
    .from("orders")
    .select()
    .eq("telefon", tel)
    .single();

  return order;
};

export const getAllOrders = async () => {
  let { data: orders, error } = await supabase.from("orders").select();
  return orders;
};

export const addOrder = async (order: Order) => {
  const { data, error } = await supabase
    .from("orders")
    .insert([order])
    .select()
    .single();

  return data;
};

export const deleteOrder = async (id: string | number) => {
  const { data, error } = await supabase
    .from("orders")
    .delete()
    .eq("id", id)
    .select()
    .single();

  return data;
};

export const updateOrder = async (id: string | number, order: Order) => {
  const { data, error } = await supabase
    .from("clients")
    .update(order)
    .eq("id", id)
    .select();

  return data;
};

export const changeOrderStatus = async (
  id: string | number,
  status: Status
) => {
  const { data, error } = await supabase
    .from("orders")
    .update({ status: status })
    .eq("id", id)
    .select();

  return data;
};
