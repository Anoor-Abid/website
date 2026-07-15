import { MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <section id="contact" className="border border-[#E5E7EB] bg-gradient-to-b from-[#EFF6FF] to-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="border border-[#E5E7EB] bg-transparent">
          <h2 className="text-[48px] font-bold leading-[48px] text-[#111827]">
            Book Your Service Now
          </h2>
          <p className="mt-3 max-w-md text-slate-500">
            Fill out the form and our team will get back to you within 24
            hours.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600">
                <MapPin className="h-5 w-5 text-white" />
              </span>
              <div>
                <p className="font-bold text-slate-900">Location</p>
                <p className="text-sm text-slate-500">
                  123 Service Street, Auto City, AC 12345
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600">
                <Phone className="h-5 w-5 text-white" />
              </span>
              <div>
                <p className="font-bold text-slate-900">Phone</p>
                <p className="text-sm text-slate-500">(555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}