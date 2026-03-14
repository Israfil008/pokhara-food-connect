import { createOrder } from "@/lib/orders";
import type { MenuItem } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const MenuCard = ({ item }: { item: MenuItem }) => {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(item);
    toast.success(`${item.name} added to cart`);
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300">
      <div className="aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-heading font-semibold text-lg">{item.name}</h3>
        <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="font-heading font-bold text-primary text-lg">NPR {item.price}</span>
          <Button size="sm" onClick={handleAdd} className="gap-1">
            <Plus className="h-4 w-4" /> Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
