import interiorImg from "@/assets/restaurant-interior.jpg";
import heroImg from "@/assets/hero-banner.jpg";

const AboutPage = () => (
  <div className="py-12 md:py-20">
    <div className="container max-w-4xl">
      <div className="text-center mb-12">
        <p className="text-primary text-sm font-medium tracking-widest uppercase">Our Story</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mt-1">About ISRO Restaurant</h1>
      </div>

      {/* Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="font-heading text-2xl font-bold mb-4">From Our Kitchen to Your Table</h2>
          <p className="text-muted-foreground leading-relaxed">
            Founded in the vibrant Nayabazar neighborhood of Pokhara, ISRO Restaurant was born from a passion for authentic Nepali flavors and a dream to create a space where food brings people together. Our journey began with a simple Dal Bhat set and has grown into a diverse menu that celebrates Nepal's rich culinary heritage.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            We believe great food starts with quality ingredients. Every spice is hand-selected, every vegetable is locally sourced, and every dish is prepared with the same care as a home-cooked meal.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-soft">
          <img src={heroImg} alt="ISRO Restaurant food" className="w-full h-72 object-cover" />
        </div>
      </div>

      {/* Philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-soft">
          <img src={interiorImg} alt="Restaurant interior" className="w-full h-72 object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="font-heading text-2xl font-bold mb-4">Our Chef's Philosophy</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our head chef brings decades of culinary experience and a deep respect for traditional Nepali cooking techniques. Every dish on our menu tells a story — from the slow-simmered dal to the perfectly steamed momos.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            We don't just serve food, we craft experiences. Whether you're here for a quick lunch, a family dinner, or a celebration, you'll feel the warmth and dedication that goes into every plate.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { title: "Fresh Ingredients", desc: "Locally sourced produce and premium spices for authentic flavors." },
          { title: "Warm Hospitality", desc: "Every guest is treated like family in true Nepali tradition." },
          { title: "Culinary Innovation", desc: "Traditional recipes meet modern techniques for unforgettable dishes." },
        ].map(v => (
          <div key={v.title} className="bg-card p-6 rounded-lg shadow-card text-center">
            <h3 className="font-heading font-semibold text-lg mb-2">{v.title}</h3>
            <p className="text-muted-foreground text-sm">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AboutPage;
