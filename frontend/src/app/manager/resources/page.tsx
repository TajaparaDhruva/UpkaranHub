
"use client";

import { useMemo, useState } from "react";
import ManagerNavbar from "@/components/layout/ManagerNavbar";
import { equipmentList, type Equipment } from "@/data/equipment";
import {
  Search,
  Plus,
  Pencil,
  Trash2,
  X,
  Package,
  CheckCircle2,
} from "lucide-react";

const categories = [
  "Computing",
  "Photography",
  "Presentation",
  "Audio",
  "Design",
];

const emptyForm = {
  name: "",
  category: "Computing",
  description: "",
};

export default function ManageEquipmentPage() {
  const [equipment, setEquipment] = useState<Equipment[]>(equipmentList);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState(emptyForm);

  // Filter equipment
  const filteredEquipment = useMemo(() => {
    return equipment.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [equipment, search, category]);

  // Open form for adding equipment
  const handleAdd = () => {
    setEditingId(null);
    setFormData(emptyForm);
    setShowForm(true);
  };

  // Open form for editing equipment
  const handleEdit = (item: Equipment) => {
    setEditingId(item.id);

    setFormData({
      name: item.name,
      category: item.category,
      description: item.description,
    });

    setShowForm(true);
  };

  // Save equipment
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.description.trim()) {
      return;
    }

    if (editingId) {
      setEquipment((previous) =>
        previous.map((item) =>
          item.id === editingId
            ? {
                ...item,
                name: formData.name.trim(),
                category: formData.category,
                description: formData.description.trim(),
              }
            : item
        )
      );
    } else {
      const newEquipment: Equipment = {
        id: Date.now().toString(),
        name: formData.name.trim(),
        category: formData.category,
        description: formData.description.trim(),
        image: "/images/equipment/macbook.jpg",
        available: true,
      };

      setEquipment((previous) => [...previous, newEquipment]);
    }

    setShowForm(false);
    setEditingId(null);
    setFormData(emptyForm);
  };

  // Delete equipment
  const handleDelete = (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this equipment?"
    );

    if (!confirmed) return;

    setEquipment((previous) =>
      previous.filter((item) => item.id !== id)
    );
  };

  // Change availability
  const handleAvailability = (id: string) => {
    setEquipment((previous) =>
      previous.map((item) =>
        item.id === id
          ? { ...item, available: !item.available }
          : item
      )
    );
  };

  return (
    <main className="min-h-screen bg-[#F7F1E7]">
      <ManagerNavbar />

      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:py-14">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#87917A]">
              Resource Administration
            </p>

            <h1 className="mt-3 font-serif text-3xl text-[#292D28] sm:text-4xl">
              Manage Equipment
            </h1>

            <p className="mt-3 text-sm text-[#77766E]">
              Add, update, and manage your equipment inventory.
            </p>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#34483C] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#293B30]"
          >
            <Plus size={18} />
            Add Equipment
          </button>
        </div>

        {/* Statistics */}
        <section className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#E5DDCE] bg-white p-5">
            <div className="flex items-center gap-3">
              <Package className="text-[#34483C]" size={22} />
              <p className="text-sm text-[#77766E]">Total Equipment</p>
            </div>

            <p className="mt-4 text-3xl font-semibold text-[#292D28]">
              {equipment.length}
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5DDCE] bg-white p-5">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-[#526B57]" size={22} />
              <p className="text-sm text-[#77766E]">Available</p>
            </div>

            <p className="mt-4 text-3xl font-semibold text-[#292D28]">
              {equipment.filter((item) => item.available).length}
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5DDCE] bg-white p-5">
            <div className="flex items-center gap-3">
              <Package className="text-[#B7A187]" size={22} />
              <p className="text-sm text-[#77766E]">Unavailable</p>
            </div>

            <p className="mt-4 text-3xl font-semibold text-[#292D28]">
              {equipment.filter((item) => !item.available).length}
            </p>
          </div>
        </section>

        {/* Search and category filter */}
        <section className="mt-9 flex flex-col gap-4 rounded-2xl border border-[#E5DDCE] bg-white p-5 sm:flex-row">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#87917A]"
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search equipment..."
              className="w-full rounded-xl border border-[#E5DDCE] bg-[#F7F1E7] py-3.5 pl-12 pr-4 text-sm outline-none focus:border-[#34483C]"
            />
          </div>

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="rounded-xl border border-[#E5DDCE] bg-[#F7F1E7] px-4 py-3.5 text-sm outline-none focus:border-[#34483C] sm:w-64"
          >
            <option value="All">All Categories</option>

            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </section>

        {/* Add / Edit form */}
        {showForm && (
          <section className="mt-8 rounded-2xl border border-[#E5DDCE] bg-white p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="font-serif text-2xl text-[#292D28]">
                  {editingId ? "Edit Equipment" : "Add New Equipment"}
                </h2>

                <p className="mt-2 text-sm text-[#77766E]">
                  Enter the equipment information below.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="rounded-full p-2 text-[#77766E] hover:bg-[#F7F1E7]"
                aria-label="Close form"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="equipmentName"
                  className="mb-2 block text-sm font-medium text-[#292D28]"
                >
                  Equipment Name
                </label>

                <input
                  id="equipmentName"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      name: event.target.value,
                    })
                  }
                  placeholder="Enter equipment name"
                  className="w-full rounded-xl border border-[#E5DDCE] bg-[#F7F1E7] px-4 py-3.5 text-sm outline-none focus:border-[#34483C]"
                />
              </div>

              <div>
                <label
                  htmlFor="equipmentCategory"
                  className="mb-2 block text-sm font-medium text-[#292D28]"
                >
                  Category
                </label>

                <select
                  id="equipmentCategory"
                  value={formData.category}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      category: event.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-[#E5DDCE] bg-[#F7F1E7] px-4 py-3.5 text-sm outline-none focus:border-[#34483C]"
                >
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="equipmentDescription"
                  className="mb-2 block text-sm font-medium text-[#292D28]"
                >
                  Description
                </label>

                <textarea
                  id="equipmentDescription"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      description: event.target.value,
                    })
                  }
                  placeholder="Describe the equipment..."
                  className="w-full resize-none rounded-xl border border-[#E5DDCE] bg-[#F7F1E7] px-4 py-3.5 text-sm outline-none focus:border-[#34483C]"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="rounded-xl bg-[#34483C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#293B30]"
                >
                  {editingId ? "Save Changes" : "Add Equipment"}
                </button>

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="rounded-xl border border-[#E5DDCE] px-6 py-3 text-sm font-medium text-[#77766E] hover:bg-[#F7F1E7]"
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        )}

        {/* Equipment list */}
        <section className="mt-9">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#292D28]">
              Equipment Inventory
            </h2>

            <p className="text-sm text-[#77766E]">
              {filteredEquipment.length} items
            </p>
          </div>

          {filteredEquipment.length > 0 ? (
            <div className="overflow-x-auto rounded-2xl border border-[#E5DDCE] bg-white">
              <table className="w-full min-w-[750px] text-left">
                <thead>
                  <tr className="border-b border-[#E5DDCE] text-xs text-[#87917A]">
                    <th className="px-6 py-5 font-medium">Equipment</th>
                    <th className="px-6 py-5 font-medium">Category</th>
                    <th className="px-6 py-5 font-medium">Availability</th>
                    <th className="px-6 py-5 font-medium">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredEquipment.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-[#F0EBE2] last:border-0"
                    >
                      <td className="px-6 py-5">
                        <p className="text-sm font-semibold text-[#292D28]">
                          {item.name}
                        </p>

                        <p className="mt-1 max-w-xs truncate text-xs text-[#77766E]">
                          {item.description}
                        </p>
                      </td>

                      <td className="px-6 py-5 text-sm text-[#77766E]">
                        {item.category}
                      </td>

                      <td className="px-6 py-5">
                        <button
                          type="button"
                          onClick={() => handleAvailability(item.id)}
                          className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                            item.available
                              ? "bg-[#E7EFE5] text-[#34483C]"
                              : "bg-[#FCE8E6] text-[#B54747]"
                          }`}
                        >
                          {item.available ? "Available" : "Unavailable"}
                        </button>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => handleEdit(item)}
                            aria-label={`Edit ${item.name}`}
                            className="rounded-lg p-2 text-[#526B57] transition hover:bg-[#E7EFE5]"
                          >
                            <Pencil size={17} />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDelete(item.id)}
                            aria-label={`Delete ${item.name}`}
                            className="rounded-lg p-2 text-red-500 transition hover:bg-red-50"
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="rounded-2xl border border-[#E5DDCE] bg-white px-6 py-16 text-center">
              <Package size={35} className="mx-auto text-[#87917A]" />

              <h3 className="mt-4 text-lg font-semibold text-[#292D28]">
                No equipment found
              </h3>

              <p className="mt-2 text-sm text-[#77766E]">
                Try another search term or category.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
