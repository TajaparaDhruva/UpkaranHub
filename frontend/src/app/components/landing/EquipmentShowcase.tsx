
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Monitor, Camera, Laptop } from "lucide-react";

const equipment = [
  {
    name: "MacBook Pro",
    category: "Computing",
    description: "High-performance laptop for development and creative work.",
    image: "/images/equipment/macbook.jpg",
    icon: Laptop,
  },
  {
    name: "DSLR Camera",
    category: "Photography",
    description: "Professional camera for photography and video projects.",
    image: "/images/equipment/camera.jpg",
    icon: Camera,
  },
  {
    name: "4K Monitor",
    category: "Display",
    description: "High-resolution monitor for a better working experience.",
    image: "/images/equipment/monitor.jpg",
    icon: Monitor,
  },
];

export default function EquipmentShowcase() {
  return (
    <section
      id="equipment"
      className="bg-white px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#87917A]">
              Explore Resources
            </p>

            <h2 className="font-serif text-3xl font-medium text-[#292D28] sm:text-4xl lg:text-5xl">
              Equipment for Every Idea
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#77766E] sm:text-base">
              Discover the tools and resources available to support your
              learning, creativity, and everyday work.
            </p>
          </div>

          <Link
            href="/resources"
            className="inline-flex w-fit items-center gap-2 border-b border-[#34483C] pb-2 text-sm font-medium text-[#34483C] transition hover:gap-3"
          >
            Browse all equipment
            <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* Equipment cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {equipment.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.name}
                className="group overflow-hidden rounded-2xl border border-[#E5DDCE] bg-[#F7F1E7] transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-[#EFE5D5]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-wider text-[#87917A]">
                      {item.category}
                    </span>

                    <Icon size={19} className="text-[#34483C]" />
                  </div>

                  <h3 className="text-xl font-medium text-[#292D28]">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#77766E]">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
