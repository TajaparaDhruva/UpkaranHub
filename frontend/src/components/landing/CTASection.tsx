
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#34483C] px-7 py-16 text-center sm:px-12 lg:py-20">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C6D0C1]">
          Get Started with UpkaranHub
        </p>

        <h2 className="mx-auto max-w-3xl font-serif text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
          The Right Equipment Is Just a Booking Away.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#D5DDD3] sm:text-base">
          Discover available resources, make your booking, and spend
          more time focusing on what matters.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F7F1E7] px-7 py-3.5 text-sm font-semibold text-[#34483C] transition hover:bg-white"
          >
            Create Your Account
            <ArrowRight size={17} />
          </Link>

          <Link
            href="/resources"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Explore Equipment
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
