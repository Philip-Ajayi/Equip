"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, HeartHandshake, Menu, X } from "lucide-react";

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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080e23]/90 backdrop-blur-xl">
      <div className="page-shell flex min-h-[76px] items-center justify-between gap-5">
        {/* Brand Logo & Title */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-3"
          aria-label="Leading Minds home"
        >
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-gradient-to-br from-[#16224d] to-[#0e1736] p-1.5 shadow-sm transition group-hover:border-[#d4af37]/50">
            <img
              src="/logo.png"
              alt="Project EQUIP Logo"
              className="h-full w-full object-contain"
              onError={(event) => {
                event.currentTarget.style.display = "none";
                const parent = event.currentTarget.parentElement;
                if (parent) parent.textContent = "LM";
              }}
            />
          </div>

          <div className="leading-tight">
            <span className="block text-[14px] font-bold tracking-tight text-white group-hover:text-slate-100">
              Project
            </span>
            <span className="mt-0.5 block font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
              Equip 2026
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 text-[13px] font-medium transition-colors ${
                  isActive
                    ? "font-semibold text-[#d4af37]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e8c8] to-[#a78bfa] shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Magnetic "Support the work" CTA Button */}
        <div className="hidden items-center gap-4 sm:flex">
          <Link
            href="/support"
            className="group relative inline-flex min-h-[44px] items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#d4af37] via-[#f5e5b8] to-[#d4af37] px-5 py-2.5 text-xs font-bold text-[#050b18] shadow-[0_0_24px_rgba(212,175,55,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_32px_rgba(212,175,55,0.6)]"
          >
            {/* Subtle light sweep reflection */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />

            <HeartHandshake size={15} className="text-[#050b18]" />
            <span className="relative font-bold tracking-wide">
              Support the work
            </span>
            <ArrowUpRight
              size={15}
              className="text-[#050b18] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0e1736] text-white transition hover:border-white/25 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-[#080e23] px-6 py-6 shadow-2xl lg:hidden"
        >
          <div className="mx-auto flex max-w-[1240px] flex-col space-y-1">
            {links.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between border-b border-white/5 py-4 text-sm font-semibold transition ${
                    isActive ? "text-[#d4af37]" : "text-slate-200 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs font-bold text-[#d4af37]">
                    0{index + 1}
                  </span>
                </Link>
              );
            })}

            {/* Mobile "Support the work" Button */}
            <div className="pt-5">
              <Link
                href="/support"
                onClick={closeMenu}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f5e5b8] to-[#d4af37] py-3.5 text-xs font-bold text-[#050b18] shadow-[0_0_24px_rgba(212,175,55,0.4)]"
              >
                <HeartHandshake size={16} />
                <span>Support the work</span>
                <ArrowUpRight size={15} />
              </Link>

              <Link
                href="https://bit.ly/projectequip2026reg"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="outline-button mt-3 w-full border-white/20 text-slate-200 hover:border-[#a78bfa] hover:text-[#a78bfa]"
              >
                Explore registration
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}