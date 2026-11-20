
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Leaf,
  LayoutDashboard,
  Package,
  ClipboardList,
  UserRound,
  LogOut,
} from "lucide-react";

const navLinks = [
  {
    name: "Dashboard",
    href: "/manager/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Manage Equipment",
    href: "/manager/resources",
    icon: Package,
  },
  {
    name: "Manage Bookings",
    href: "/manager/bookings",
    icon: ClipboardList,
  },
];

export default function ManagerNavbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5DDCE] bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10">
        {/* Brand */}
        <Link
          href="/manager/dashboard"
          className="flex shrink-0 items-center gap-2"
        >
          <Leaf size={25} className="text-[#34483C]" />

          <span className="text-xl font-semibold tracking-tight text-[#292D28]">
            UpkaranHub
          </span>

          <span className="hidden rounded-full bg-[#EFE5D5] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#526B57] sm:inline-block">
            Manager
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
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
        <div className="flex items-center gap-3">
          <Link
            href="/profile"
            aria-label="My profile"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EFE5D5] text-[#34483C]"
          >
            <UserRound size={19} />
          </Link>

          <Link
            href="/login"
            className="hidden items-center gap-2 text-sm font-medium text-[#77766E] hover:text-red-600 sm:flex"
          >
            <LogOut size={17} />
            Logout
          </Link>
        </div>
      </div>

      {/* Mobile navigation */}
      <nav className="flex gap-6 overflow-x-auto border-t border-[#E5DDCE] px-6 py-3 lg:hidden">
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
