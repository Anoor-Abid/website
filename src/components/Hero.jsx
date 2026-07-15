import { Clock, DollarSign, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-car.png";

const badges = [
  { icon: Clock, label: "Fast" },
  { icon: DollarSign, label: "Affordable" },
  { icon: UserCheck, label: "Expert Technicians" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-slate-50 to-white px-6 py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Professional Electrical &amp; Automotive Services in Your City
          </h1>
          <p className="mt-5 max-w-md text-slate-500">
            Reliable, fast, and professional service for all your needs.
            Expert technicians ready to serve you 24/7.
          </p>
          <Button size="lg" className="mt-7">
            Book Your Service Now
          </Button>

          <div className="mt-10 flex flex-wrap gap-8">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                  <Icon className="h-4 w-4 text-blue-600" />
                </span>
                <span className="text-sm font-medium text-slate-700">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-slate-900 shadow-xl">
          <img
            src={heroImg}
            alt="Black BMW M4 performance car"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
