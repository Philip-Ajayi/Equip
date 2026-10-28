"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "About us" },
  { href: "/programs", label: "Programs" },
  { href: "/programs/equip-2026/training", label: "Training" },
  { href: "/programs/equip-2026/schedule", label: "Schedule" },
  { href: "/programs/equip-2026/facilitators", label: "Our people" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f8f9fc]/90 backdrop-blur-xl">
      <div className="page-shell flex min-h-[76px] items-center justify-between gap-5">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3"
          aria-label="Leading Minds home"
        >
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white">
            {/* Replace with your exact logo filename if different. */}
            <img
              src="/logo.png"
              alt=""
              className="h-full w-full object-contain"
              onError={(event) => {
                event.currentTarget.style.display = "none";
                const parent = event.currentTarget.parentElement;
                if (parent) parent.textContent = "LM";
              }}
            />
          </div>

          <div className="leading-tight">
            <span className="block text-[13px] font-bold tracking-tight">
              Project
            </span>
            <span className="mt-1 block text-[9px] uppercase tracking-[0.15em] text-[#77766e]">
              Equip
            </span>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[12px] font-semibold transition-colors hover:text-[#5925dc] ${
                pathname === link.href
                  ? "text-[#5925dc]"
                  : "text-[#4d504d]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="/support"
            className="dark-button min-h-[43px] px-5"
          >
            Support the work <ArrowUpRight size={15} />
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-black/10 bg-[#f8f9fc] px-[18px] py-5 lg:hidden"
        >
          <div className="mx-auto flex max-w-[1240px] flex-col">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-black/10 py-4 text-sm font-semibold"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-[#5925dc]">
                  0{index + 1}
                </span>
              </Link>
            ))}

            <Link
              href="/support"
              onClick={closeMenu}
              className="clay-button mt-5 w-full"
            >
              Support the work <ArrowUpRight size={15} />
            </Link>

            <Link
              href="https://bit.ly/projectequip2026reg"
              onClick={closeMenu}
              className="outline-button mt-3 w-full"
            >
              Explore registration
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
