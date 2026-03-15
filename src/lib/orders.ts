async function placeOrder(order) {

await fetch("https://script.google.com/macros/s/AKfycbyp8CzuywkNEc0HItkQ2zyslqz53MChI1HWiACfh1cAJfyqa0VqoeOedlz03e8xJ-9K/exec", {
method: "POST",
body: JSON.stringify(order)
});

alert("Order sent!");

}