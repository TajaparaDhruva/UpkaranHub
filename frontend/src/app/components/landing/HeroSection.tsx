
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-[#F7F1E7]"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2 lg:px-12">

        {/* Left Content */}
        <div className="max-w-2xl">

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#D8DFD0] bg-[#EEF1E7] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#87917A]" />

            <span className="text-xs font-semibold uppercase tracking-wider text-[#34483C]">
              Smart Equipment Management
            </span>
          </div>

          <h1 className="font-serif text-5xl font-semibold leading-[1.12] tracking-tight text-[#292D28] sm:text-6xl lg:text-7xl">
            Book. Manage.
            <span className="mt-2 block text-[#34483C]">
              Get It Done.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-[#686D64] md:text-lg">
            Your equipment booking, made effortless.
            Discover available resources, reserve what
            you need, and manage every booking in one
            simple and organized platform.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">

            <Link
              href="/signup"
              className="group inline-flex items-center gap-3 rounded-md bg-[#34483C] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#293A30]"
            >
              Get Started

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#equipment"
              className="group inline-flex items-center gap-3 rounded-md border border-[#B7A187] px-7 py-4 text-sm font-semibold text-[#34483C] transition-all duration-300 hover:bg-[#EFE5D5]"
            >
              Explore Equipment

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </div>

          {/* Supporting Information */}
          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#E5DDCE] pt-7">

            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-[#87917A]" />
              <span className="text-sm text-[#555B52]">
                Easy Booking
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-[#87917A]" />
              <span className="text-sm text-[#555B52]">
                Real-time Availability
              </span>
            </div>

          </div>
        </div>

        {/* Right Image */}
        <div className="relative">

          <div className="relative h-[350px] overflow-hidden rounded-2xl sm:h-[450px] lg:h-[530px]">

            <Image
              src="/images/equipment-hero.jpg"
              alt="Professional laptop, camera and projector equipment"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#292D28]/35 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 text-white">
              <p className="text-xs font-medium uppercase tracking-[0.2em]">
                One Platform
              </p>

              <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
                Every Resource.
              </h2>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
