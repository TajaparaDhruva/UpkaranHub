
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {LayoutDashboard,Package,CalendarDays,UserRound,LogOut,Leaf,} from "lucide-react";

const navLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Browse Equipment",
    href: "/resources",
    icon: Package,
  },
  {
    name: "My Bookings",
    href: "/my-bookings",
    icon: CalendarDays,
  },
];

export default function DashboardNavbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5DDCE] bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-2">
          <Leaf size={25} className="text-[#34483C]" />
          <span className="text-xl font-semibold tracking-tight text-[#292D28]">
            UpkaranHub
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 text-sm font-medium transition ${
                  isActive
                    ? "text-[#34483C]"
                    : "text-[#77766E] hover:text-[#34483C]"
                }`}
              >
                <Icon size={17} />
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Profile and logout */}
        <div className="flex items-center gap-4">
          <Link
            href="/profile"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EFE5D5] text-[#34483C] transition hover:bg-[#E5DDCE]"
            aria-label="My profile"
          >
            <UserRound size={19} />
          </Link>

          <button
            type="button"
            onClick={() => {
              window.location.href = "/login";
            }}
            className="hidden items-center gap-2 text-sm font-medium text-[#77766E] transition hover:text-red-600 sm:flex"
          >
            <LogOut size={17} />
            Logout
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <nav className="flex gap-6 overflow-x-auto border-t border-[#E5DDCE] px-6 py-3 md:hidden">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex shrink-0 items-center gap-2 text-xs font-medium ${
                isActive ? "text-[#34483C]" : "text-[#77766E]"
              }`}
            >
              <Icon size={16} />
              {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
