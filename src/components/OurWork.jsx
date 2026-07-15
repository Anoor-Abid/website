import diagnosticsScreen from "@/assets/work-diagnostics-screen.png";
import acRepair from "@/assets/work-ac-repair.png";
import battery from "@/assets/work-battery.png";
import diagnosticTool from "@/assets/work-diagnostic-tool.png";
import engineCheck from "@/assets/work-engine-check.png";
import teamPhoto from "@/assets/work-team-photo.png";

const images = [
  { src: diagnosticTool, alt: "Technician using a diagnostic tool on an engine" },
  { src: engineCheck, alt: "Mechanic performing an engine check" },
  { src: acRepair, alt: "Technician repairing car AC system" },
  { src: teamPhoto, alt: "Technician working on car interior" },
  { src: diagnosticsScreen, alt: "Diagnostics equipment connected to a laptop" },
  { src: battery, alt: "Technician replacing a car battery" },
];

export default function OurWork() {
  return (
    <section className="border border-[#E5E7EB] bg-gradient-to-b from-[#EFF6FF] to-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-xl border border-[#E5E7EB] bg-transparent text-center">
          <h2 className="text-[48px] font-bold leading-[48px] text-[#111827]">
            Our Work
          </h2>
          <p className="mt-3 text-slate-500">
            See the quality and precision of our automotive services
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img
                src={img.src}
                alt={img.alt}
                className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105 md:h-56"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}