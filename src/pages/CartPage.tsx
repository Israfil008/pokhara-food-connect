import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus, Trash2, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const CartPage = () => {
  const { items, updateQuantity, removeItem, couponCode, setCouponCode, applyCoupon, appliedDiscount, subtotal, total } = useCart();
  const navigate = useNavigate();
  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">("delivery");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleApplyCoupon = () => {
    if (applyCoupon()) toast.success(`Coupon applied! ${appliedDiscount || couponCode}% off`);
    else toast.error("Invalid coupon code");
  };

  const handleCheckout = () => {
    if (!name || !phone) { toast.error("Please fill in your name and phone number"); return; }
    if (deliveryType === "delivery" && !address) { toast.error("Please enter delivery address"); return; }
    if (items.length === 0) { toast.error("Your cart is empty"); return; }
    navigate("/checkout");
  };

  if (items.length === 0) {
    return (
      <div className="py-20 text-center container">
        <h1 className="font-heading text-3xl font-bold">Your Cart is Empty</h1>
        <p className="text-muted-foreground mt-2">Browse our menu and add some delicious items!</p>
        <Link to="/menu"><Button className="mt-6">Browse Menu</Button></Link>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-4xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Items */}
          <div className="lg:col-span-3 space-y-4">
            {items.map(item => (
              <div key={item.id} className="flex gap-4 bg-card p-4 rounded-lg shadow-card">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md object-cover" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold">{item.name}</h3>
                  <p className="text-muted-foreground text-sm">NPR {item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="h-7 w-7 rounded-md border flex items-center justify-center hover:bg-secondary">
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="h-7 w-7 rounded-md border flex items-center justify-center hover:bg-secondary">
                      <Plus className="h-3 w-3" />
                    </button>
                    <button onClick={() => removeItem(item.id)} className="ml-auto text-destructive hover:text-destructive/80">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <span className="font-heading font-bold whitespace-nowrap">NPR {item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-2">
            <div className="bg-card p-6 rounded-lg shadow-card space-y-4">
              <h2 className="font-heading font-semibold text-lg">Order Summary</h2>

              {/* Coupon */}
              <div className="flex gap-2">
                <Input placeholder="Coupon code" value={couponCode} onChange={e => setCouponCode(e.target.value)} />
                <Button variant="outline" size="sm" onClick={handleApplyCoupon}><Tag className="h-4 w-4" /></Button>
              </div>
              {appliedDiscount > 0 && <p className="text-success text-sm">✓ {appliedDiscount}% discount applied</p>}

              <div className="border-t pt-4 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>NPR {subtotal}</span></div>
                {appliedDiscount > 0 && <div className="flex justify-between text-success"><span>Discount</span><span>-NPR {Math.round(subtotal * appliedDiscount / 100)}</span></div>}
                <div className="flex justify-between font-bold text-base border-t pt-2"><span>Total</span><span>NPR {Math.round(total)}</span></div>
              </div>

              {/* Delivery/Pickup */}
              <div className="flex gap-2">
                <button onClick={() => setDeliveryType("delivery")} className={`flex-1 py-2 rounded-md text-sm font-medium ${deliveryType === "delivery" ? "bg-primary text-primary-foreground" : "bg-secondary"}`}>Delivery</button>
                <button onClick={() => setDeliveryType("pickup")} className={`flex-1 py-2 rounded-md text-sm font-medium ${deliveryType === "pickup" ? "bg-primary text-primary-foreground" : "bg-secondary"}`}>Pickup</button>
              </div>

              <div className="space-y-3">
                <Input placeholder="Full name" value={name} onChange={e => setName(e.target.value)} />
                <Input placeholder="Phone number" value={phone} onChange={e => setPhone(e.target.value)} />
                {deliveryType === "delivery" && <Input placeholder="Delivery address" value={address} onChange={e => setAddress(e.target.value)} />}
              </div>

              <Button className="w-full" size="lg" onClick={handleCheckout}>
                Proceed to Payment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
