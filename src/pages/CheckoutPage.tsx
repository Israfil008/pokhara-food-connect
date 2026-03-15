import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const CheckoutPage = () => {
  const { items, total, appliedDiscount, clearCart } = useCart();
  const navigate = useNavigate();
  const [stage, setStage] = useState<"paying" | "success">("paying");

  const [orderId] = useState(`ISRO-${Date.now().toString(36).toUpperCase()}`);
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");
  useEffect(() => {
    if (items.length === 0 && stage === "paying") navigate("/cart");
  }, [items, stage, navigate]);

const handleMockPayment = async () => {
  try {
    await fetch("https://script.google.com/macros/s/AKfycbyOEox7TOjmcLXFxYKKWHtJDbo3gUXbD3Epe0Kz1UfOWEWJonLHPIyDMRttOnSSsIzEHA/exec", {
      method: "POST",
body: JSON.stringify({
  name: name,
  phone: phone,
  address: address,
  item: items.map(i => i.name).join(", "),
  quantity: items.map(i => i.quantity).join(", "),
  time: new Date().toISOString()
})
    });
  } catch (err) {
    console.log("Order send failed", err);
  }

  setTimeout(() => setStage("success"), 1500);
};

  if (stage === "success") {
    return (
      <div className="py-20 text-center container max-w-lg">
        <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
        <h1 className="font-heading text-3xl font-bold">Order Confirmed!</h1>
        <p className="text-muted-foreground mt-2">Your order has been placed successfully.</p>
        <div className="bg-card mt-6 p-6 rounded-lg shadow-card">
          <p className="text-sm text-muted-foreground">Order ID</p>
          <p className="font-heading font-bold text-xl text-primary">{orderId}</p>
          <p className="text-sm text-muted-foreground mt-4">Total Paid</p>
          <p className="font-heading font-bold text-2xl">NPR {Math.round(total)}</p>
        </div>
        <Button className="mt-8" onClick={() => { clearCart(); navigate("/"); }}>Back to Home</Button>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-lg">
        <h1 className="font-heading text-3xl font-bold mb-8">Payment</h1>
        <div className="bg-card p-6 rounded-lg shadow-card space-y-4">
          <h2 className="font-heading font-semibold">Order Summary</h2>
          {items.map(i => (
            <div key={i.id} className="flex justify-between text-sm">
              <span>{i.name} × {i.quantity}</span>
              <span>NPR {i.price * i.quantity}</span>
            </div>
          ))}
          {appliedDiscount > 0 && <p className="text-success text-sm">Discount: {appliedDiscount}%</p>}
          <div className="border-t pt-3 flex justify-between font-bold">
            <span>Total</span><span>NPR {Math.round(total)}</span>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm text-muted-foreground mb-3">Pay with eSewa (Mock)</p>
            <Button className="w-full bg-success hover:bg-success/90 text-success-foreground" size="lg" onClick={handleMockPayment}>
              Pay NPR {Math.round(total)} via eSewa
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-2">This is a mock payment for development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
