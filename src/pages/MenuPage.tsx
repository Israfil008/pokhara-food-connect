import { useState } from "react";
import { menuItems, categories } from "@/data/menu";
import MenuCard from "@/components/MenuCard";

const MenuPage = () => {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? menuItems : menuItems.filter(i => i.category === active);

  return (
    <div className="py-12 md:py-20">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-medium tracking-widest uppercase">Explore Our</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mt-1">Menu</h1>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            From authentic Nepali thalis to cafe favorites — there's something for every palate.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === c.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(item => <MenuCard key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
