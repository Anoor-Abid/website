import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = ["Home", "Services", "Pricing", "About", "Testimonials", "Contact"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex h-[80px] items-center border-b border-[#E5E7EB] bg-white shadow-[0_4px_6px_0_rgba(0,0,0,0.1)]">
      <nav className="mx-auto flex h-[80px] w-full max-w-7xl items-center justify-between bg-transparent px-6">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
            <Zap className="h-5 w-5 text-white" fill="white" />
          </span>
          <span className="text-lg font-bold text-slate-900">ElectroAuto</span>
        </div>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">{link}</a>
            </li>
          ))}
        </ul>
        <Button size="sm">Book Service</Button>
      </nav>
    </header>
  );
}