
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import DashboardNavbar from "@/components/layout/DashboardNavbar";
import BookingStatus from "@/components/bookings/BookingStatus";
import { bookingList } from "@/data/bookings";
import {
  CalendarDays,
  Package,
  Search,
  ArrowUpRight,
  ClipboardList,
} from "lucide-react";

const filters = [
  "All",
  "Pending",
  "Approved",
  "Rejected",
  "Completed",
] as const;

export default function MyBookingsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredBookings = useMemo(() => {
    return bookingList.filter((booking) => {
      const matchesStatus =
        activeFilter === "All" || booking.status === activeFilter;

      const matchesSearch =
        booking.equipmentName.toLowerCase().includes(search.toLowerCase()) ||
        booking.id.toLowerCase().includes(search.toLowerCase());

      return matchesStatus && matchesSearch;
    });
  }, [activeFilter, search]);

  const statusCounts = {
    All: bookingList.length,
    Pending: bookingList.filter((b) => b.status === "Pending").length,
    Approved: bookingList.filter((b) => b.status === "Approved").length,
    Rejected: bookingList.filter((b) => b.status === "Rejected").length,
    Completed: bookingList.filter((b) => b.status === "Completed").length,
  };

  return (
    <main className="min-h-screen bg-[#F7F1E7]">
      <DashboardNavbar />

      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:py-14">
        {/* Heading */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#87917A]">
            Booking Management
          </p>

          <h1 className="mt-3 font-serif text-3xl text-[#292D28] sm:text-4xl">
            My Bookings
          </h1>

          <p className="mt-3 text-sm leading-7 text-[#77766E]">
            Track your equipment requests and manage your booking history.
          </p>
        </div>

        {/* Booking statistics */}
        <section className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-2xl border p-5 text-left transition ${
                activeFilter === filter
                  ? "border-[#34483C] bg-[#34483C] text-white"
                  : "border-[#E5DDCE] bg-white text-[#292D28] hover:border-[#87917A]"
              }`}
            >
              <p
                className={`text-xs ${
                  activeFilter === filter
                    ? "text-[#D5DDD3]"
                    : "text-[#77766E]"
                }`}
              >
                {filter === "All" ? "Total Bookings" : filter}
              </p>

              <p className="mt-3 text-2xl font-semibold">
                {statusCounts[filter]}
              </p>
            </button>
          ))}
        </section>

        {/* Search */}
        <section className="mt-9">
          <div className="relative max-w-lg">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#87917A]"
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by equipment or booking ID..."
              className="w-full rounded-xl border border-[#E5DDCE] bg-white py-3.5 pl-12 pr-4 text-sm outline-none focus:border-[#34483C]"
            />
          </div>
        </section>

        {/* Booking list */}
        <section className="mt-8">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#292D28]">
              {activeFilter === "All"
                ? "All Bookings"
                : `${activeFilter} Bookings`}
            </h2>

            <p className="text-xs text-[#77766E]">
              {filteredBookings.length} results
            </p>
          </div>

          {filteredBookings.length > 0 ? (
            <div className="space-y-4">
              {filteredBookings.map((booking) => (
                <article
                  key={booking.id}
                  className="rounded-2xl border border-[#E5DDCE] bg-white p-5 sm:p-6"
                >
                  <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                    {/* Equipment information */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EFE5D5] text-[#34483C]">
                        <Package size={22} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#292D28]">
                          {booking.equipmentName}
                        </h3>

                        <p className="mt-1 text-xs text-[#87917A]">
                          {booking.category}
                        </p>

                        <p className="mt-2 text-xs text-[#77766E]">
                          Booking ID: {booking.id}
                        </p>
                      </div>
                    </div>

                    {/* Status and details */}
                    <div className="flex flex-wrap items-center gap-4 sm:justify-end">
                      <BookingStatus status={booking.status} />

                      <Link
                        href={`/resources/${booking.equipmentId}`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-[#34483C] hover:underline"
                      >
                        View Equipment
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </div>

                  {/* Dates and purpose */}
                  <div className="mt-6 grid grid-cols-1 gap-5 border-t border-[#E5DDCE] pt-5 sm:grid-cols-3">
                    <div className="flex items-start gap-3">
                      <CalendarDays
                        size={18}
                        className="mt-0.5 text-[#87917A]"
                      />

                      <div>
                        <p className="text-xs text-[#87917A]">
                          Booking Date
                        </p>

                        <p className="mt-1 text-sm font-medium text-[#292D28]">
                          {booking.bookingDate}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CalendarDays
                        size={18}
                        className="mt-0.5 text-[#87917A]"
                      />

                      <div>
                        <p className="text-xs text-[#87917A]">
                          Return Date
                        </p>

                        <p className="mt-1 text-sm font-medium text-[#292D28]">
                          {booking.returnDate}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <ClipboardList
                        size={18}
                        className="mt-0.5 text-[#87917A]"
                      />

                      <div>
                        <p className="text-xs text-[#87917A]">
                          Purpose
                        </p>

                        <p className="mt-1 text-sm font-medium text-[#292D28]">
                          {booking.purpose}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-[#E5DDCE] bg-white px-6 py-16 text-center">
              <ClipboardList
                size={35}
                className="mx-auto text-[#87917A]"
              />

              <h3 className="mt-4 text-lg font-semibold text-[#292D28]">
                No bookings found
              </h3>

              <p className="mt-2 text-sm text-[#77766E]">
                Try changing your search or booking status filter.
              </p>

              <button
                type="button"
                onClick={() => {
                  setActiveFilter("All");
                  setSearch("");
                }}
                className="mt-5 text-sm font-semibold text-[#34483C] hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        {/* Browse equipment link */}
        <div className="mt-10 text-center">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#34483C] hover:underline"
          >
            Browse More Equipment
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </main>
  );
}
