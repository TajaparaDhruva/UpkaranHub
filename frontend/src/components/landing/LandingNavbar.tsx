
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Leaf, ArrowUpRight } from "lucide-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "About", href: "#about" },
];

export default function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5DDCE] bg-[#F7F1E7]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w- items-center justify-between px-6 py-4 lg:px-12">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#34483C] text-[#F7F1E7]">
            <Leaf size={23} />
          </div>

          <span className="font-serif text-2xl font-bold tracking-tight text-[#292D28]">
            UpkaranHub
          </span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[#555B52] transition-colors hover:text-[#34483C]"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <Link
            href="/login"
            className="text-sm font-semibold text-[#34483C] transition-colors hover:text-[#87917A]"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="flex items-center gap-2 rounded-md bg-[#34483C] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#293A30]"
          >
            Get Started
            <ArrowUpRight size={16} />
          </Link>
        </div>


        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-[#34483C] hover:bg-[#EFE5D5] md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[#E5DDCE] bg-[#F7F1E7] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-[#34483C]"
              >
                {item.name}
              </a>
            ))}

            <div className="flex items-center gap-5 border-t border-[#E5DDCE] pt-5">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-[#34483C]"
              >
                Login
              </Link>

              <Link
                href="/signup"
                onClick={() => setIsOpen(false)}
                className="rounded-md bg-[#34483C] px-5 py-3 text-sm font-semibold text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
