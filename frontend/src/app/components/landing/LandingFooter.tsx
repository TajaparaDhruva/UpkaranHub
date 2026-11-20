import Link from "next/link";
import { Leaf, ArrowUpRight } from "lucide-react";

const footerLinks = {
  explore: [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About Us", href: "#about" },
  ],
  account: [
    { label: "Login", href: "/login" },
    { label: "Create Account", href: "/signup" },
    { label: "Browse Equipment", href: "/resources" },
  ],
};

export default function LandingFooter() {
  return (
    <footer className="bg-[#34483C] px-6 pb-8 pt-16 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-12 border-b border-white/15 pb-12 sm:grid-cols-2 lg:grid-cols-3">

          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <Leaf size={23} />
              <span className="text-xl font-semibold tracking-tight">
                UpkaranHub
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-[#D5DDD3]">
              A simpler way to discover, book, and manage equipment
              and resources.
            </p>

            <p className="mt-5 text-xs font-medium tracking-wider text-[#C6D0C1]">
              BOOK. MANAGE. GET IT DONE.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold">Explore</h3>

            <ul className="space-y-4">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#D5DDD3] transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold">Your Account</h3>

            <ul className="space-y-4">
              {footerLinks.account.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-[#D5DDD3] transition hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight size={13} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs text-[#C6D0C1] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} UpkaranHub. All rights reserved.
          </p>

          <p>Designed for easier resource management.</p>
        </div>
      </div>
    </footer>
  );
}
