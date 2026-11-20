
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import DashboardNavbar from "@/components/layout/DashboardNavbar";
import BookingForm from "@/components/bookings/BookingForm";
import { equipmentList } from "@/data/equipment";
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Package,
} from "lucide-react";

type EquipmentDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EquipmentDetailsPage({
  params,
}: EquipmentDetailsPageProps) {
  const { id } = await params;

  const equipment = equipmentList.find((item) => item.id === id);

  if (!equipment) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F7F1E7]">
      <DashboardNavbar />

      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:py-14">

        <Link
          href="/resources"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#526B57] hover:underline"
        >
          <ArrowLeft size={17} />
          Back to Equipment
        </Link>

        <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">

          <section>
            <div className="relative h-72 overflow-hidden rounded-2xl bg-[#EFE5D5] sm:h-96">
              <Image
                src={equipment.image}
                alt={equipment.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#87917A]">
                {equipment.category}
              </p>

              <h1 className="mt-3 font-serif text-3xl font-medium text-[#292D28] sm:text-4xl">
                {equipment.name}
              </h1>

              <p className="mt-5 text-sm leading-7 text-[#77766E]">
                {equipment.description}
              </p>

              {/* Availability */}
              <div className="mt-7 flex items-center gap-3 border-y border-[#E5DDCE] py-5">
                {equipment.available ? (
                  <CheckCircle2 size={21} className="text-[#526B57]" />
                ) : (
                  <XCircle size={21} className="text-red-500" />
                )}

                <div>
                  <p className="text-sm font-semibold text-[#292D28]">
                    {equipment.available
                      ? "Currently Available"
                      : "Currently Unavailable"}
                  </p>

                  <p className="mt-1 text-xs text-[#77766E]">
                    {equipment.available
                      ? "You can submit a booking request."
                      : "This equipment cannot be booked right now."}
                  </p>
                </div>
              </div>

              {/* Additional information */}
              <div className="mt-7 flex items-start gap-3">
                <Package size={20} className="mt-1 text-[#87917A]" />

                <div>
                  <h3 className="text-sm font-semibold text-[#292D28]">
                    Equipment Information
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#77766E]">
                    Booking requests are subject to manager approval
                    and equipment availability.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Booking form */}
          <section>
            {equipment.available ? (
              <BookingForm
                equipmentId={equipment.id}
                equipmentName={equipment.name}
              />
            ) : (
              <div className="rounded-2xl border border-[#E5DDCE] bg-white p-8">
                <h2 className="font-serif text-2xl text-[#292D28]">
                  Equipment Unavailable
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#77766E]">
                  This equipment is currently unavailable for booking.
                  Please explore other equipment.
                </p>

                <Link
                  href="/resources"
                  className="mt-6 inline-flex rounded-xl bg-[#34483C] px-5 py-3 text-sm font-medium text-white hover:bg-[#293B30]"
                >
                  Browse Other Equipment
                </Link>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
