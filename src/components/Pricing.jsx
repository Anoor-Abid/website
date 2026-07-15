import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: 99,
    features: ["Basic Diagnostics", "Oil Change", "Tire Rotation", "Fluid Check"],
    highlighted: false,
  },
  {
    name: "Standard",
    price: 199,
    features: [
      "Everything in Basic",
      "Advanced Diagnostics",
      "Battery Check",
      "AC Service",
      "Priority Support",
    ],
    highlighted: true,
    badge: "RECOMMENDED",
  },
  {
    name: "Premium",
    price: 299,
    features: [
      "Everything in Standard",
      "Full Engine Check",
      "Electrical System Repair",
      "Free Pickup & Drop",
      "1 Year Warranty",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
            Pricing Packages
          </h2>
          <p className="mt-3 text-slate-500">
            Choose the perfect plan for your automotive needs
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "scale-105 bg-blue-600 text-white shadow-xl"
                  : "border border-slate-200 bg-white"
              }`}
            >
              {plan.badge && (
                <span className="absolute right-6 top-6 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-slate-900">
                  {plan.badge}
                </span>
              )}

              <h3
                className={`text-lg font-bold ${
                  plan.highlighted ? "text-white" : "text-slate-900"
                }`}
              >
                {plan.name}
              </h3>
              <p className="mt-2">
                <span className="text-4xl font-extrabold">${plan.price}</span>
                <span
                  className={
                    plan.highlighted ? "text-blue-100" : "text-slate-500"
                  }
                >
                  /service
                </span>
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check
                      className={`h-4 w-4 shrink-0 ${
                        plan.highlighted ? "text-white" : "text-blue-600"
                      }`}
                    />
                    <span className={plan.highlighted ? "text-blue-50" : "text-slate-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`mt-8 w-full ${
                  plan.highlighted
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
