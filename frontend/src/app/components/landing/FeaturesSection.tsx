
import {
  CalendarCheck,
  Activity,
  ClipboardList,
  PackageCheck,
  RotateCcw,
  LayoutDashboard,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Easy Equipment Booking",
    description:
      "Browse available resources and reserve the equipment you need through a simple booking process.",
  },
  {
    number: "02",
    icon: Activity,
    title: "Real-Time Availability",
    description:
      "Check equipment availability and find suitable booking slots before submitting your request.",
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Booking Management",
    description:
      "Keep track of booking requests, approvals, cancellations and upcoming reservations.",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Inventory Tracking",
    description:
      "Monitor equipment quantities, availability and resource information from one place.",
  },
  {
    number: "05",
    icon: RotateCcw,
    title: "Simple Return Management",
    description:
      "Record equipment returns, update return conditions and maintain accurate inventory.",
  },
  {
    number: "06",
    icon: LayoutDashboard,
    title: "Manager Dashboard",
    description:
      "Give managers a clear overview of equipment, booking requests and resource activity.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-300 px-6 lg:px-12">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#87917A]">
            What We Offer
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#292D28] md:text-5xl">
            Everything You Need,
            <span className="block text-[#34483C]">
              All in One Place.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[#686D64]">
            A simpler way to discover, reserve and manage
            shared equipment for your institution.
          </p>

        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.number}
                className="group rounded-xl border border-[#E5DDCE] bg-[#FDFCF9] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#87917A] hover:shadow-lg hover:shadow-[#34483C]/5"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EEF1E7] text-[#34483C] transition-colors group-hover:bg-[#34483C] group-hover:text-white">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  <span className="text-sm font-medium text-[#B7A187]">
                    {feature.number}
                  </span>

                </div>

                <h3 className="mt-7 font-serif text-xl font-semibold text-[#292D28]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#686D64]">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-[#E5DDCE] pt-4">

                  <span className="text-xs font-medium text-[#87917A]">
                    EquipEase Feature
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-[#34483C] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}
