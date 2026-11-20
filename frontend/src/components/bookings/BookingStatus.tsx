
import type { BookingStatus as BookingStatusType } from "@/data/bookings";

type BookingStatusProps = {
  status: BookingStatusType;
};

const statusStyles: Record<BookingStatusType, string> = {
  Pending: "bg-[#F6EEDC] text-[#96713B]",
  Approved: "bg-[#E7EFE5] text-[#34483C]",
  Rejected: "bg-[#FCE8E6] text-[#B54747]",
  Completed: "bg-[#EFEFEF] text-[#666666]",
};

export default function BookingStatus({
  status,
}: BookingStatusProps) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1.5 text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
