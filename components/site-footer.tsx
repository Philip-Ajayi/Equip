import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { CurrentYear } from "@/components/current-year";

const footerLinks = [
  { href: "/about", label: "Our initiative" },
  { href: "/programs", label: "Our programs" },
  { href: "/programs/equip-2026/training", label: "Training tracks" },
  { href: "/programs/equip-2026/facilitators", label: "Meet the team" },
  { href: "/programs/equip-2026/impact", label: "Our impact" },
  { href: "/support", label: "Sponsorship" },
  { href: "/contact", label: "Contact us" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#0e1318] text-white">
      <div className="page-shell py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.8fr]">
          {/* Brand & Mission Statement */}
          <div>
            <Link href="/" className="inline-block">
              {/* Logo contains text already; adjusted dimensions for crisp display */}
              <div className="relative h-14 w-44">
                <Image
                  src="/logo.png"
                  alt="Leading Minds Leadership Initiative"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            <h2 className="display mt-8 max-w-[460px] text-4xl leading-tight md:text-5xl">
              A little support can change a young person&apos;s next chapter.
            </h2>

            <Link
              href="/support"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#e9ae56] hover:text-white"
            >
              Find out how to help <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Navigation Links */}
          <div>
            <p className="eyebrow text-[#e9ae56]">Explore</p>
            <nav className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-white/65 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Details from Official Proposal */}
          <div>
            <p className="eyebrow text-[#e9ae56]">Get in touch</p>

            <div className="mt-5 space-y-4 text-sm text-white/65">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 shrink-0 text-[#e9ae56]" size={16} />
                <span>House 7, Road 7, Omolayo Estate, Akobo, Ibadan, Oyo State.</span>
              </div>

              <a
                href="mailto:theleadingminds2012@gmail.com"
                className="flex items-start gap-3 transition-colors hover:text-white"
              >
                <Mail className="mt-1 shrink-0 text-[#e9ae56]" size={16} />
                <span>theleadingminds2012@gmail.com</span>
              </a>

              <a
                href="tel:+2348037816379"
                className="flex items-start gap-3 transition-colors hover:text-white"
              >
                <Phone className="mt-1 shrink-0 text-[#e9ae56]" size={16} />
                <span>0803 781 6379 / 0814 383 8441</span>
              </a>

              <div className="flex flex-col gap-2.5 pt-2">
                <a
                  href="https://www.instagram.com/the_leadingminds"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <FaInstagram size={17} className="shrink-0 text-[#e9ae56]" />
                  <span>@the_leadingminds</span>
                </a>

                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <FaFacebook size={17} className="shrink-0 text-[#e9ae56]" />
                  <span>The Leading Minds</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col justify-between gap-3 text-xs text-white/45 sm:flex-row">
          <p>
            © <CurrentYear fallback={2026} /> Leading Minds Leadership Initiative.
          </p>
          <p className="italic text-white/60">
            Esplendour… there is a king in you!
          </p>
        </div>
      </div>
    </footer>
  );
}