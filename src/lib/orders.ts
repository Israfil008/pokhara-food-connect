import { supabase } from "./supabase";

async function placeOrder(order) {

await fetch("https://script.google.com/macros/s/AKfycbzxBwBXfKWPsnPh-xyKF-v0HG8wbih51tCiGNIJ5emz0UReFBWZA_WJa-ckiBNwFN8/exec", {
method: "POST",
body: JSON.stringify(order)
});

alert("Order sent!");

}