import { Stethoscope, Snowflake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function BatteryJumpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M8 8V7a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 8V7a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3" y="8" width="18" height="11" rx="2.5" fill="currentColor" />
      <path d="M7 13.5h2" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 12v3" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
      <path d="M13.5 13.5h3" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function EngineCheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" strokeDasharray="3 3" />
      <path d="M9.5 9a2.5 2.5 0 0 1 4.9.75c0 1.5-2.4 1.75-2.4 3.25" />
      <line x1="12" y1="16.5" x2="12" y2="16.51" />
    </svg>
  );
}

function ToolsIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0.6" strokeLinejoin="round" {...props}>
      <path d="M14.4 4.6c-1.6-.6-3.5-.2-4.7 1-1.2 1.2-1.6 3-1.1 4.6L3.3 15.5a1.6 1.6 0 0 0 0 2.3l1.9 1.9a1.6 1.6 0 0 0 2.3 0l5.3-5.3c1.6.5 3.4.1 4.6-1.1 1.2-1.2 1.6-3.1 1-4.7l-2.6 2.6-2.1-2.1 2.7-2.5Z" />
      <path d="M4.2 3.2a.6.6 0 0 1 .85 0l3.9 3.9a.6.6 0 0 1 0 .85l-.9.9a.6.6 0 0 1-.85 0l-3.9-3.9a.6.6 0 0 1 0-.85l.9-.9Z" />
      <path d="M12.5 12.5 19.7 19.7a1.1 1.1 0 0 1-1.55 1.55L11 14.05" strokeWidth="1.2" />
    </svg>
  );
}

function FullBatteryIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect x="2" y="7" width="18" height="10" rx="2.5" fill="currentColor" stroke="currentColor" strokeWidth="2" />
      <path d="M22 10v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const services = [
  { icon: BatteryJumpIcon, title: "Electrical Car Services", description: "Complete electrical system diagnostics and repairs for all vehicle makes and models." },
  { icon: FullBatteryIcon, title: "Battery Replacement", description: "Quick and reliable battery replacement service with premium quality batteries." },
  { icon: Stethoscope, title: "Car Diagnostics", description: "Advanced computer diagnostics to identify and resolve vehicle issues quickly." },
  { icon: Snowflake, title: "AC Repair", description: "Professional air conditioning repair and maintenance for optimal comfort." },
  { icon: EngineCheckIcon, title: "Engine Check", description: "Comprehensive engine inspection and maintenance to keep your car running smoothly." },
  { icon: ToolsIcon, title: "General Maintenance", description: "Regular maintenance services to extend your vehicle's lifespan and performance." },
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl border border-[#E5E7EB] bg-transparent">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-[48px] font-bold leading-[48px] text-[#111827]">Our Services</h2>
          <p className="mt-3 text-[20px] font-normal leading-[28px] text-[#4B5563]">Comprehensive automotive and electrical solutions for your vehicle</p>
        </div>
        <div className="mt-12 grid gap-6 border border-[#E5E7EB] bg-transparent md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="rounded-[16px] border border-[#E5E7EB] bg-gradient-to-b from-[#EFF6FF] to-white shadow-[0_10px_15px_0_rgba(0,0,0,0.1),0_4px_6px_0_rgba(0,0,0,0.1)]"
            >
              <CardContent className="p-6">
                <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-[12px] border border-[#E5E7EB] bg-[#007BFF]">
                  <Icon className="h-6 w-6 text-white" />
                </span>
                <h3 className="text-[24px] font-bold leading-[32px] text-slate-900">{title}</h3>
                <p className="mt-2 text-[16px] font-normal leading-[24px] text-slate-500">{description}</p>
                <a href="#services" className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:underline">
                  Learn More &rarr;
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}