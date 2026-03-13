import { Link } from "react-router-dom";
import { ArrowRight, UtensilsCrossed, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";
import { menuItems } from "@/data/menu";
import MenuCard from "@/components/MenuCard";

const Index = () => {
  const featured = menuItems.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <img src={heroBanner} alt="ISRO Restaurant food spread" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative container h-full flex flex-col justify-center">
          <div className="max-w-xl animate-fade-in-up">
            <p className="text-primary-foreground/70 font-body text-sm tracking-widest uppercase mb-3">Nayabazar, Pokhara</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
              Taste the Soul of Nepal
            </h1>
            <p className="text-primary-foreground/80 mt-4 text-lg max-w-md">
              Authentic Nepali cuisine, fresh fast food, handcrafted drinks, and delightful desserts — all under one roof.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/menu"><Button size="lg">View Menu <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <Link to="/menu"><Button size="lg" variant="secondary">Order Online</Button></Link>
              <Link to="/reserve"><Button size="lg" variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20">Reserve Table</Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 bg-warm">
        <div className="container text-center max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Welcome to ISRO Restaurant</h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Nestled in the vibrant heart of Nayabazar, Pokhara, we bring together the rich flavors of traditional Nepali cooking with modern culinary creativity. Every dish is crafted with love, fresh ingredients, and the spirit of Himalayan hospitality.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="flex items-center gap-3 text-sm"><UtensilsCrossed className="h-5 w-5 text-primary" /> Fresh Ingredients</div>
            <div className="flex items-center gap-3 text-sm"><Clock className="h-5 w-5 text-primary" /> Open 7 AM – 10 PM</div>
            <div className="flex items-center gap-3 text-sm"><MapPin className="h-5 w-5 text-primary" /> Nayabazar, Pokhara</div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-primary text-sm font-medium tracking-widest uppercase">Our Specialties</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-1">Featured Dishes</h2>
            </div>
            <Link to="/menu" className="hidden md:inline-flex text-primary font-medium text-sm hover:underline">
              View full menu <ArrowRight className="ml-1 h-4 w-4 inline" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map(item => <MenuCard key={item.id} item={item} />)}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/menu"><Button variant="outline">View Full Menu</Button></Link>
          </div>
        </div>
      </section>

      {/* Coupon Banner */}
      <section className="bg-primary py-12">
        <div className="container text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">Special Offer!</h2>
          <p className="text-primary-foreground/80 mt-2">Use code <span className="font-bold text-primary-foreground bg-primary-foreground/20 px-2 py-1 rounded">WELCOME10</span> for 10% off your first order</p>
          <Link to="/menu" className="mt-6 inline-block">
            <Button variant="secondary" size="lg">Order Now</Button>
          </Link>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-center mb-8">Find Us</h2>
          <div className="rounded-lg overflow-hidden shadow-soft aspect-video max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.927!2d83.985!3d28.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNayabazar%2C+Pokhara!5e0!3m2!1sen!2snp!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="ISRO Restaurant Location"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
