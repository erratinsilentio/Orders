import { supabase } from "../Supabase";
export const getOrder = async (id) => {
    let { data: order, error } = await supabase
        .from("orders")
        .select()
        .eq("id", id)
        .single();
    return order;
};
export const getOrderByTelephone = async (tel) => {
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
export const addOrder = async (order) => {
    const { data, error } = await supabase
        .from("orders")
        .insert([order])
        .select()
        .single();
    return data;
};
export const deleteOrder = async (id) => {
    const { data, error } = await supabase
        .from("orders")
        .delete()
        .eq("id", id)
        .select()
        .single();
    return data;
};
export const updateOrder = async (id, order) => {
    const { data, error } = await supabase
        .from("clients")
        .update(order)
        .eq("id", id)
        .select();
    return data;
};
export const changeOrderStatus = async (id, status) => {
    const { data, error } = await supabase
        .from("orders")
        .update({ status: status })
        .eq("id", id)
        .select();
    return data;
};
