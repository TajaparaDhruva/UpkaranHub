
"use client";

import { useMemo, useState } from "react";
import DashboardNavbar from "@/components/layout/DashboardNavbar";
import EquipmentCard from "@/components/equipment/EquipmentCard";
import { equipmentList } from "@/data/equipment";
import { Search, SlidersHorizontal } from "lucide-react";

const categories = [
  "All",
  "Computing",
  "Photography",
  "Presentation",
  "Audio",
  "Design",
];

export default function ResourcesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredEquipment = useMemo(() => {
    return equipmentList.filter((equipment) => {
      const matchesSearch =
        equipment.name.toLowerCase().includes(search.toLowerCase()) ||
        equipment.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || equipment.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <main className="min-h-screen bg-[#F7F1E7]">
      <DashboardNavbar />

      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:py-14">
        {/* Heading */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#87917A]">
            Equipment Collection
          </p>

          <h1 className="mt-3 font-serif text-3xl text-[#292D28] sm:text-4xl">
            Browse Equipment
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-7 text-[#77766E]">
            Find the equipment you need and check its availability
            before making a booking.
          </p>
        </div>

        {/* Search and filter */}
        <section className="mt-9 flex flex-col gap-4 rounded-2xl border border-[#E5DDCE] bg-white p-5 sm:flex-row">
          <div className="relative flex-1">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#87917A]"
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search equipment..."
              className="w-full rounded-xl border border-[#E5DDCE] text-black bg-[#F7F1E7] py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-[#34483C]"
            />
          </div>

          <div className="flex items-center gap-3 sm:w-64">
            <SlidersHorizontal size={19} className="shrink-0 text-[#87917A]" />

            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="w-full rounded-xl border border-[#E5DDCE] bg-[#F7F1E7] px-4 py-3.5 text-sm text-[#292D28] outline-none focus:border-[#34483C]"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item === "All" ? "All Categories" : item}
                </option>
              ))}
            </select>
          </div>
        </section>

        {/* Results heading */}
        <div className="mt-10 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#292D28]">
            Available Equipment
          </h2>

          <p className="text-sm text-[#77766E]">
            {filteredEquipment.length} items found
          </p>
        </div>

        {/* Equipment cards */}
        {filteredEquipment.length > 0 ? (
          <section className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEquipment.map((equipment) => (
              <EquipmentCard
                key={equipment.id}
                equipment={equipment}
              />
            ))}
          </section>
        ) : (
          <div className="mt-6 rounded-2xl border border-[#E5DDCE] bg-white px-6 py-16 text-center">
            <Search size={32} className="mx-auto text-[#87917A]" />

            <h3 className="mt-4 text-lg font-semibold text-[#292D28]">
              No equipment found
            </h3>

            <p className="mt-2 text-sm text-[#77766E]">
              Try another search term or choose a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="mt-5 text-sm font-semibold text-[#34483C] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
