
import {
  GraduationCap,
  Clock3,
  Boxes,
  ArrowUpRight,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Built for Campus Life",
    description:
      "A convenient way for students to access the equipment they need.",
  },
  {
    icon: Clock3,
    title: "Less Time, Less Hassle",
    description:
      "Reduce manual booking steps with a simple digital process.",
  },
  {
    icon: Boxes,
    title: "Better Resource Management",
    description:
      "Help managers organize equipment, availability, and bookings.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#F7F1E7] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#87917A]">
            About UpkaranHub
          </p>

          <h2 className="max-w-xl font-serif text-3xl font-medium leading-tight text-[#292D28] sm:text-4xl lg:text-5xl">
            Making Equipment Access Simple and Organized.
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-8 text-[#77766E] sm:text-base">
            UpkaranHub is an equipment and resource booking platform
            designed to make campus resource management easier.
            Students can explore equipment, check availability, and
            submit booking requests, while managers can organize
            resources and manage bookings from one place.
          </p>

          <a
            href="#how-it-works"
            className="mt-8 inline-flex items-center gap-2 border-b border-[#34483C] pb-2 text-sm font-medium text-[#34483C] transition hover:gap-3"
          >
            Discover how it works
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="border-l border-[#DCD3C3] pl-6 sm:pl-10">
          <div className="mb-8">
            <p className="font-serif text-5xl text-[#34483C] sm:text-6xl">
              One platform.
            </p>
            <p className="mt-2 font-serif text-3xl text-[#B7A187] sm:text-4xl">
              Better resource access.
            </p>
          </div>

          <div className="space-y-8">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EFE5D5] text-[#34483C]">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <div>
                    <h3 className="text-base font-medium text-[#292D28]">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-[#77766E]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
