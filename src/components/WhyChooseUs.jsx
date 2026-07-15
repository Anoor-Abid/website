import { Badge, Zap, Tag, Star } from "lucide-react";
import garageImg from "@/assets/mechanics-team.png";

const points = [
  {
    icon: Badge,
    title: "Professional & Certified Technicians",
    description:
      "Our team consists of highly trained and certified professionals with years of experience.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable Service",
    description:
      "Quick turnaround times without compromising on quality or attention to detail.",
  },
  {
    icon: Tag,
    title: "Affordable Pricing",
    description:
      "Transparent pricing with no hidden fees. Quality service at competitive rates.",
  },
  {
    icon: Star,
    title: "Customer Satisfaction Guarantee",
    description:
      "We stand behind our work with a satisfaction guarantee and comprehensive warranties.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={garageImg}
            alt="Mechanics working on vehicles in a service garage"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-slate-500">
            We're committed to providing exceptional automotive and electrical
            services with unmatched expertise and customer care.
          </p>

          <div className="mt-8 space-y-6">
            {points.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                  <Icon
                    className="h-5 w-5 text-blue-600"
                    fill="currentColor"
                    strokeWidth={1.5}
                  />
                </span>
                <div>
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}