import { supabase } from "./supabase";

export async function createOrder(order:any) {

const { data, error } = await supabase
.from("orders")
.insert([order]);

if(error){
console.error(error);
alert("Order failed");
}else{
alert("Order placed successfully!");
}

}
