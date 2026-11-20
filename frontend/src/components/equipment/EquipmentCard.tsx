
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, XCircle } from "lucide-react";
import type { Equipment } from "@/data/equipment";

type EquipmentCardProps = {
  equipment: Equipment;
};

export default function EquipmentCard({
  equipment,
}: EquipmentCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#E5DDCE] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Equipment image */}
      <div className="relative h-56 bg-[#EFE5D5]">
        <Image
          src={equipment.image}
          alt={equipment.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />

        <span
          className={`absolute right-4 top-4 rounded-full px-3 py-1.5 text-xs font-medium ${
            equipment.available
              ? "bg-[#E7EFE5] text-[#34483C]"
              : "bg-[#FCE8E6] text-[#B54747]"
          }`}
        >
          {equipment.available ? "Available" : "Unavailable"}
        </span>
      </div>

      {/* Equipment details */}
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#87917A]">
          {equipment.category}
        </p>

        <h2 className="mt-2 text-xl font-medium text-[#292D28]">
          {equipment.name}
        </h2>

        <p className="mt-3 min-h-12 text-sm leading-6 text-[#77766E]">
          {equipment.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-[#E5DDCE] pt-4">
          <div className="flex items-center gap-2 text-xs text-[#77766E]">
            {equipment.available ? (
              <CheckCircle2 size={15} className="text-[#526B57]" />
            ) : (
              <XCircle size={15} className="text-red-500" />
            )}

            {equipment.available ? "Ready to book" : "Currently unavailable"}
          </div>

          <Link
            href={`/resources/${equipment.id}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#34483C] hover:underline"
          >
            View
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
