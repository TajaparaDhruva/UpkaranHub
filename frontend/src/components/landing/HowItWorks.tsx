import {
  Search,
  CalendarDays,
  Send,
  BadgeCheck,
  PackageCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Browse Equipment",
    description:
      "Explore available equipment and find the resources you need.",
    icon: Search,
  },
  {
    number: "02",
    title: "Select Date & Time",
    description:
      "Choose the date and time that works best for your schedule.",
    icon: CalendarDays,
  },
  {
    number: "03",
    title: "Submit Booking Request",
    description:
      "Send your booking request with just a few simple details.",
    icon: Send,
  },
  {
    number: "04",
    title: "Receive Approval",
    description:
      "Get notified when your equipment booking is approved.",
    icon: BadgeCheck,
  },
  {
    number: "05",
    title: "Collect & Return",
    description:
      "Collect your equipment and return it after use.",
    icon: PackageCheck,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#F7F1E7] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#87917A]">
            Simple Process
          </p>

          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#292D28] sm:text-4xl lg:text-5xl">
            How It Works
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#77766E] sm:text-base">
            From finding the right equipment to returning it, everything
            is designed to be simple and convenient.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">

                <div className="flex items-start gap-5 md:flex-col md:items-center md:text-center">

                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#DCD3C3] bg-white text-[#34483C]">
                    <Icon size={25} strokeWidth={1.6} />

                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#34483C] text-[10px] font-semibold text-white">
                      {index + 1}
                    </span>
                  </div>

                  <div className="pt-1 md:pt-5">
                    <p className="text-xs font-semibold tracking-widest text-[#B7A187]">
                      STEP {step.number}
                    </p>

                    <h3 className="mt-2 text-lg font-medium text-[#292D28]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#77766E]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
