import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = ["Home", "Services", "About", "Pricing", "Testimonials", "Contact"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
            <Zap className="h-5 w-5 text-white" fill="white" />
          </span>
          <span className="text-lg font-bold text-slate-900">ElectroAuto</span>
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <Button size="sm">Book Service</Button>
      </nav>
    </header>
  );
}
