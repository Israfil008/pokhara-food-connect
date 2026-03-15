import { supabase } from "./supabase";

export async function createOrder(order: any) {
  const { data, error } = await supabase
    .from("orders")
    .insert([order])
    .select();

  if (error) {
    console.error("Supabase error:", error);
    alert("Order failed");
    return;
  }

  if (!data || data.length === 0) {
    console.error("Insert returned no rows");
    alert("Order not saved");
    return;
  }

  console.log("Order inserted:", data);
  alert("Order placed successfully!");
}