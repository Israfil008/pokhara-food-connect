import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { toast.error("Please fill in all fields"); return; }
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium tracking-widest uppercase">Get in Touch</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mt-1">Contact Us</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <div>
              <h2 className="font-heading text-xl font-semibold mb-4">Visit Us</h2>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Nayabazar, Pokhara, Nepal" },
                  { icon: Phone, label: "+977-61-123456" },
                  { icon: Mail, label: "info@isrorestaurant.com" },
                  { icon: Clock, label: "Open daily: 7 AM – 10 PM" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-sm">
                    <Icon className="h-5 w-5 text-primary shrink-0" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-soft aspect-video">
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

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card p-6 md:p-8 rounded-lg shadow-card space-y-4 h-fit">
            <h2 className="font-heading text-xl font-semibold">Send a Message</h2>
            <Input placeholder="Your name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
            <Input type="email" placeholder="Your email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} />
            <textarea
              placeholder="Your message"
              value={form.message}
              onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm min-h-[120px] focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button type="submit" className="w-full" size="lg">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
