
import Link from "next/link";
import ManagerNavbar from "@/components/layout/ManagerNavbar";
import {
  Package,
  CheckCircle2,
  Clock,
  CalendarCheck,
  ArrowUpRight,
  ClipboardList,
  Plus,
} from "lucide-react";

const stats = [
  {
    title: "Total Equipment",
    value: "48",
    description: "Resources registered",
    icon: Package,
  },
  {
    title: "Available Equipment",
    value: "36",
    description: "Ready for booking",
    icon: CheckCircle2,
  },
  {
    title: "Pending Requests",
    value: "08",
    description: "Awaiting your approval",
    icon: Clock,
  },
  {
    title: "Approved Bookings",
    value: "24",
    description: "Currently approved",
    icon: CalendarCheck,
  },
];

const recentBookings = [
  {
    id: "B001",
    student: "Rahul Patel",
    equipment: "MacBook Pro",
    date: "20 Nov 2026",
    status: "Pending",
  },
  {
    id: "B002",
    student: "Priya Shah",
    equipment: "DSLR Camera",
    date: "22 Nov 2026",
    status: "Approved",
  },
  {
    id: "B003",
    student: "Amit Desai",
    equipment: "4K Monitor",
    date: "23 Nov 2026",
    status: "Pending",
  },
  {
    id: "B004",
    student: "Neha Patel",
    equipment: "Projector",
    date: "24 Nov 2026",
    status: "Rejected",
  },
];

function getStatusStyle(status: string) {
  switch (status) {
    case "Approved":
      return "bg-[#E7EFE5] text-[#34483C]";
    case "Pending":
      return "bg-[#F6EEDC] text-[#96713B]";
    case "Rejected":
      return "bg-[#FCE8E6] text-[#B54747]";
    default:
      return "bg-[#EFEFEF] text-[#666666]";
  }
}

export default function ManagerDashboardPage() {
  return (
    <main className="min-h-screen bg-[#F7F1E7]">
      <ManagerNavbar />

      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:py-14">
        {/* Welcome section */}
        <section className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#87917A]">
              Manager Dashboard
            </p>

            <h1 className="mt-3 font-serif text-3xl text-[#292D28] sm:text-4xl">
              Welcome back, Manager!
            </h1>

            <p className="mt-3 text-sm leading-7 text-[#77766E]">
              Here's what's happening with your equipment and bookings.
            </p>
          </div>

          <Link
            href="/manager/resources"
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#34483C] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#293B30]"
          >
            <Plus size={17} />
            Add Equipment
          </Link>
        </section>

        {/* Statistics */}
        <section className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <article
                key={stat.title}
                className="rounded-2xl border border-[#E5DDCE] bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#77766E]">
                    {stat.title}
                  </p>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EFE5D5] text-[#34483C]">
                    <Icon size={20} />
                  </div>
                </div>

                <h2 className="mt-5 text-3xl font-semibold text-[#292D28]">
                  {stat.value}
                </h2>

                <p className="mt-2 text-xs text-[#87917A]">
                  {stat.description}
                </p>
              </article>
            );
          })}
        </section>

        {/* Quick actions */}
        <section className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          <Link
            href="/manager/resources"
            className="group flex items-center justify-between rounded-2xl border border-[#E5DDCE] bg-white p-6 transition hover:border-[#87917A]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFE5D5] text-[#34483C]">
                <Package size={23} />
              </div>

              <div>
                <h3 className="font-semibold text-[#292D28]">
                  Manage Equipment
                </h3>

                <p className="mt-1 text-sm text-[#77766E]">
                  Add, update, and manage resources.
                </p>
              </div>
            </div>

            <ArrowUpRight
              size={20}
              className="text-[#87917A] transition group-hover:text-[#34483C]"
            />
          </Link>

          <Link
            href="/manager/bookings"
            className="group flex items-center justify-between rounded-2xl border border-[#E5DDCE] bg-white p-6 transition hover:border-[#87917A]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFE5D5] text-[#34483C]">
                <ClipboardList size={23} />
              </div>

              <div>
                <h3 className="font-semibold text-[#292D28]">
                  Manage Bookings
                </h3>

                <p className="mt-1 text-sm text-[#77766E]">
                  Review and process student requests.
                </p>
              </div>
            </div>

            <ArrowUpRight
              size={20}
              className="text-[#87917A] transition group-hover:text-[#34483C]"
            />
          </Link>
        </section>

        {/* Recent bookings */}
        <section className="mt-10 rounded-2xl border border-[#E5DDCE] bg-white p-6 sm:p-8">
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-serif text-2xl text-[#292D28]">
                Recent Booking Requests
              </h2>

              <p className="mt-2 text-sm text-[#77766E]">
                Review the latest equipment booking activity.
              </p>
            </div>

            <Link
              href="/manager/bookings"
              className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-[#34483C] hover:underline"
            >
              View All Bookings
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left">
              <thead>
                <tr className="border-b border-[#E5DDCE] text-xs text-[#87917A]">
                  <th className="pb-4 font-medium">Booking ID</th>
                  <th className="pb-4 font-medium">Student</th>
                  <th className="pb-4 font-medium">Equipment</th>
                  <th className="pb-4 font-medium">Date</th>
                  <th className="pb-4 font-medium">Status</th>
                </tr>
              </thead>

              <tbody>
                {recentBookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="border-b border-[#F0EBE2] last:border-0"
                  >
                    <td className="py-5 text-sm font-medium text-[#34483C]">
                      {booking.id}
                    </td>

                    <td className="py-5 text-sm text-[#292D28]">
                      {booking.student}
                    </td>

                    <td className="py-5 text-sm text-[#77766E]">
                      {booking.equipment}
                    </td>

                    <td className="py-5 text-sm text-[#77766E]">
                      {booking.date}
                    </td>

                    <td className="py-5">
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-medium ${getStatusStyle(
                          booking.status
                        )}`}
                      >
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
