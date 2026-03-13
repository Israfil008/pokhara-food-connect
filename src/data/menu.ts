import dalBhat from "@/assets/dal-bhat.jpg";
import chickenMomo from "@/assets/chicken-momo.jpg";
import vegChowmein from "@/assets/veg-chowmein.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";
import latteCoffee from "@/assets/latte-coffee.jpg";
import cappuccino from "@/assets/cappuccino.jpg";
import chocolateCake from "@/assets/chocolate-cake.jpg";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "nepali" | "fastfood" | "cafe" | "desserts";
};

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Dal Bhat Set",
    description: "Traditional Nepali thali with rice, lentil soup, vegetables, pickle, and papadum",
    price: 350,
    image: dalBhat,
    category: "nepali",
  },
  {
    id: "2",
    name: "Chicken Momo",
    description: "Steamed dumplings filled with spiced chicken, served with tomato chutney",
    price: 250,
    image: chickenMomo,
    category: "nepali",
  },
  {
    id: "3",
    name: "Veg Chowmein",
    description: "Stir-fried noodles with fresh seasonal vegetables and Nepali spices",
    price: 180,
    image: vegChowmein,
    category: "nepali",
  },
  {
    id: "4",
    name: "Chicken Burger",
    description: "Juicy chicken patty with lettuce, tomato, cheese, and special sauce",
    price: 320,
    image: chickenBurger,
    category: "fastfood",
  },
  {
    id: "5",
    name: "French Fries",
    description: "Crispy golden fries seasoned with herbs and served with ketchup",
    price: 150,
    image: chickenBurger,
    category: "fastfood",
  },
  {
    id: "6",
    name: "Latte Coffee",
    description: "Smooth espresso with steamed milk and beautiful latte art",
    price: 200,
    image: latteCoffee,
    category: "cafe",
  },
  {
    id: "7",
    name: "Cappuccino",
    description: "Rich espresso topped with velvety milk foam",
    price: 180,
    image: cappuccino,
    category: "cafe",
  },
  {
    id: "8",
    name: "Chocolate Cake",
    description: "Rich and moist chocolate cake with chocolate ganache drizzle",
    price: 280,
    image: chocolateCake,
    category: "desserts",
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "nepali", label: "Nepali Food" },
  { id: "fastfood", label: "Fast Food" },
  { id: "cafe", label: "Cafe Drinks" },
  { id: "desserts", label: "Desserts" },
] as const;

export type Coupon = {
  code: string;
  discount: number; // percentage
};

export const coupons: Coupon[] = [
  { code: "WELCOME10", discount: 10 },
  { code: "FOOD20", discount: 20 },
];
