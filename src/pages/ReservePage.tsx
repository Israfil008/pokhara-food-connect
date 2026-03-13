import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { CheckCircle } from "lucide-react";

const ReservePage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", guests: "", date: "", time: "", requests: "" });

  const update = (field: string, value: string) => setForm(p => ({ ...p, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.guests || !form.date || !form.time) {
      toast.error("Please fill in all required fields");
      return;
    }
    setSubmitted(true);
    toast.success("Reservation submitted!");
  };

  if (submitted) {
    return (
      <div className="py-20 text-center container max-w-lg">
        <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
        <h1 className="font-heading text-3xl font-bold">Reservation Confirmed!</h1>
        <p className="text-muted-foreground mt-2">We'll call you at {form.phone} to confirm your booking.</p>
        <div className="bg-card mt-6 p-6 rounded-lg shadow-card text-left space-y-2 text-sm">
          <p><strong>Name:</strong> {form.name}</p>
          <p><strong>Date:</strong> {form.date}</p>
          <p><strong>Time:</strong> {form.time}</p>
          <p><strong>Guests:</strong> {form.guests}</p>
          {form.requests && <p><strong>Special Requests:</strong> {form.requests}</p>}
        </div>
        <Button className="mt-6" onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", guests: "", date: "", time: "", requests: "" }); }}>
          Make Another Reservation
        </Button>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-xl">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-medium tracking-widest uppercase">Book a Table</p>
          <h1 className="font-heading text-4xl font-bold mt-1">Reserve Your Table</h1>
          <p className="text-muted-foreground mt-3">Enjoy a memorable dining experience at ISRO Restaurant.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card p-6 md:p-8 rounded-lg shadow-card space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Name *</label>
              <Input value={form.name} onChange={e => update("name", e.target.value)} placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Phone *</label>
              <Input value={form.phone} onChange={e => update("phone", e.target.value)} placeholder="+977-..." />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Guests *</label>
              <Input type="number" min="1" max="20" value={form.guests} onChange={e => update("guests", e.target.value)} placeholder="2" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Date *</label>
              <Input type="date" value={form.date} onChange={e => update("date", e.target.value)} />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Time *</label>
              <Input type="time" value={form.time} onChange={e => update("time", e.target.value)} />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Special Requests</label>
            <textarea
              value={form.requests}
              onChange={e => update("requests", e.target.value)}
              placeholder="Any dietary requirements or special occasions?"
              className="w-full rounded-md border bg-background px-3 py-2 text-sm min-h-[80px] focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <Button type="submit" size="lg" className="w-full">Reserve Table</Button>
        </form>
      </div>
    </div>
  );
};

export default ReservePage;
