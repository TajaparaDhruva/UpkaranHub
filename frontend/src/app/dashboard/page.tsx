
import Link from "next/link";
import DashboardNavbar from "@/components/layout/DashboardNavbar";
import {
  Package,
  CalendarCheck,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  Search,
} from "lucide-react";

const stats = [
  {
    title: "Total Bookings",
    value: "12",
    description: "All your booking requests",
    icon: CalendarCheck,
  },
  {
    title: "Active Bookings",
    value: "03",
    description: "Currently approved",
    icon: Package,
  },
  {
    title: "Pending Requests",
    value: "02",
    description: "Waiting for approval",
    icon: Clock,
  },
  {
    title: "Completed",
    value: "07",
    description: "Successfully returned",
    icon: CheckCircle2,
  },
];

const recentBookings = [
  {
    name: "MacBook Pro",
    category: "Computing",
    date: "20 Nov 2026",
    status: "Approved",
  },
  {
    name: "DSLR Camera",
    category: "Photography",
    date: "22 Nov 2026",
    status: "Pending",
  },
  {
    name: "4K Monitor",
    category: "Display",
    date: "15 Nov 2026",
    status: "Completed",
  },
];

export default function StudentDashboardPage() {
  return (
    <main className="min-h-screen bg-[#F7F1E7]">
      <DashboardNavbar />

      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:py-14">
        {/* Welcome */}
        <section className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium text-[#87917A]">
              STUDENT DASHBOARD
            </p>

            <h1 className="mt-3 font-serif text-3xl text-[#292D28] sm:text-4xl">
              Welcome back, Student!
            </h1>

            <p className="mt-3 text-sm text-[#77766E]">
              Here's an overview of your equipment bookings.
            </p>
          </div>

          <Link
            href="/resources"
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#34483C] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#293B30]"
          >
            <Search size={17} />
            Browse Equipment
          </Link>
        </section>

        {/* Statistics */}
        <section className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
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
              </div>
            );
          })}
        </section>

        {/* Recent bookings */}
        <section className="mt-12 rounded-2xl border border-[#E5DDCE] bg-white p-6 sm:p-8">
          <div className="mb-7 flex items-center justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl text-[#292D28]">
                Recent Bookings
              </h2>

              <p className="mt-2 text-sm text-[#77766E]">
                Check the latest updates on your requests.
              </p>
            </div>

            <Link
              href="/my-bookings"
              className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-[#34483C] hover:underline"
            >
              View All
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-150 text-left">
              <thead>
                <tr className="border-b border-[#E5DDCE] text-xs text-[#87917A]">
                  <th className="pb-4 font-medium">Equipment</th>
                  <th className="pb-4 font-medium">Category</th>
                  <th className="pb-4 font-medium">Booking Date</th>
                  <th className="pb-4 font-medium">Status</th>
                </tr>
              </thead>

              <tbody>
                {recentBookings.map((booking) => (
                  <tr
                    key={booking.name}
                    className="border-b border-[#F0EBE2] last:border-0"
                  >
                    <td className="py-5 text-sm font-medium text-[#292D28]">
                      {booking.name}
                    </td>

                    <td className="py-5 text-sm text-[#77766E]">
                      {booking.category}
                    </td>

                    <td className="py-5 text-sm text-[#77766E]">
                      {booking.date}
                    </td>

                    <td className="py-5">
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                          booking.status === "Approved"
                            ? "bg-[#E7EFE5] text-[#34483C]"
                            : booking.status === "Pending"
                              ? "bg-[#F6EEDC] text-[#96713B]"
                              : "bg-[#EFEFEF] text-[#666666]"
                        }`}
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
