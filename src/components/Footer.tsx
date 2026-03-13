import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background/80">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-heading text-xl font-bold text-background mb-4">ISRO Restaurant</h3>
          <p className="text-sm leading-relaxed text-background/60">
            Serving authentic Nepali cuisine and modern favorites in the heart of Pokhara since 2020.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/menu" className="hover:text-background transition-colors">Menu</Link>
            <Link to="/reserve" className="hover:text-background transition-colors">Reserve Table</Link>
            <Link to="/about" className="hover:text-background transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-background transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" /> Nayabazar, Pokhara, Nepal</span>
            <span className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> +977-61-123456</span>
            <span className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> info@isrorestaurant.com</span>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 mt-10 pt-6 text-center text-xs text-background/40">
        © {new Date().getFullYear()} ISRO Restaurant. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
