import { Quote } from "lucide-react";
import avatarMichael from "@/assets/avatar-michael.png";
import avatarSarah from "@/assets/avatar-sarah.png";
import avatarDavid from "@/assets/avatar-david.png";

const testimonials = [
  {
    quote:
      "Excellent service! They diagnosed and fixed my car's electrical issue quickly. Very professional and affordable.",
    name: "Michael Johnson",
    role: "Business Owner",
    avatar: avatarMichael,
  },
  {
    quote:
      "Best automotive service I've experienced. The technicians are knowledgeable and the pricing is transparent. Highly recommend!",
    name: "Sarah Williams",
    role: "Marketing Manager",
    avatar: avatarSarah,
  },
  {
    quote:
      "They saved me so much time and money. Fast, reliable, and honest service. I'll definitely be coming back for all my car needs.",
    name: "David Martinez",
    role: "Software Engineer",
    avatar: avatarDavid,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="border border-[#E5E7EB] bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-slate-500">
            Real feedback from satisfied customers
          </p>
        </div>

        <div className="mt-12 grid gap-6 border border-[#E5E7EB] bg-transparent md:grid-cols-3">
          {testimonials.map(({ quote, name, role, avatar }) => (
            <div
              key={name}
              className="rounded-[16px] border border-[#E5E7EB] bg-gradient-to-b from-[#EFF6FF] to-white p-6 text-center"
            >
              <span className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                <Quote className="h-4 w-4 text-white" fill="white" />
              </span>
              <p className="text-[16px] leading-[24px] text-[#374151]">"{quote}"</p>
              <div className="mt-5 flex items-center justify-center gap-3">
                <img
                  src={avatar}
                  alt={name}
                  className="h-12 w-12 rounded-full border border-[#E5E7EB] object-cover"
                />
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-900">{name}</p>
                  <p className="text-xs text-slate-500">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}