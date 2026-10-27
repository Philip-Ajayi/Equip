import PageHero from "@/components/page-hero";
import ContactForm from "@/components/contact-form";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

const channels = [
  {
    icon: FaInstagram,
    label: "Instagram",
    value: "@the_leadingminds",
    href: "https://www.instagram.com/the_leadingminds",
  },
  {
    icon: FaTiktok,
    label: "TikTok",
    value: "@the_leadingminds",
    href: "https://www.tiktok.com/@the_leadingminds",
  },
  {
    icon: FaFacebook,
    label: "Facebook",
    value: "The Leading Minds",
    href: "https://www.facebook.com",
  },
  {
    icon: FaFacebook,
    label: "Convener's Facebook",
    value: "Adebimpe Adeyemi",
    href: "https://www.facebook.com",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Have a question? We'd be glad to hear from you."
        description="Whether you are an aspiring student, parent, mentor, or potential sponsor, reach out directly to the Leading Minds Leadership Initiative team."
      />

      <section className="section-space">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-[#5925dc]">Contact details</p>
            <h2 className="section-title">Let&apos;s start a conversation.</h2>
            <p className="section-copy">
              Our administrative secretariat is based in Ibadan, Oyo State. You can
              reach our coordination team through any of the channels below.
            </p>

            {/* Social Media Grid */}
            <div className="mt-8 space-y-3">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className="card-hover flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-4 transition hover:border-[#5925dc]/40 hover:shadow-xs"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0ecfc] text-[#5925dc]">
                    <channel.icon size={19} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-[#77766e]">{channel.label}</p>
                    <p className="mt-0.5 break-words text-sm font-bold text-[#0a0f1d]">
                      {channel.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Official Coordinates */}
            <div className="mt-4 space-y-3">
              <div className="flex gap-4 rounded-2xl border border-black/10 bg-white p-4">
                <Mail className="mt-1 shrink-0 text-[#5925dc]" size={19} />
                <div>
                  <p className="text-xs text-[#77766e]">Official Email</p>
                  <a
                    href="mailto:theleadingminds2012@gmail.com"
                    className="mt-0.5 block break-all text-sm font-semibold text-[#0a0f1d] hover:text-[#5925dc]"
                  >
                    theleadingminds2012@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-black/10 bg-white p-4">
                <Phone className="mt-1 shrink-0 text-[#5925dc]" size={19} />
                <div>
                  <p className="text-xs text-[#77766e]">Direct Phone Lines</p>
                  <div className="mt-0.5 space-y-0.5">
                    <a
                      href="tel:+2348037816379"
                      className="block text-sm font-semibold text-[#0a0f1d] hover:text-[#5925dc]"
                    >
                      0803 781 6379
                    </a>
                    <a
                      href="tel:+2348143838441"
                      className="block text-sm font-semibold text-[#0a0f1d] hover:text-[#5925dc]"
                    >
                      0814 383 8441
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-black/10 bg-white p-4">
                <MapPin className="mt-1 shrink-0 text-[#5925dc]" size={19} />
                <div>
                  <p className="text-xs text-[#77766e]">Physical Address</p>
                  <p className="mt-0.5 text-sm font-semibold leading-relaxed text-[#0a0f1d]">
                    House 7, Road 7, Omolayo Estate, Akobo, Ibadan, Oyo State.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-xs md:p-9">
            <p className="eyebrow text-[#5925dc]">Send an enquiry</p>
            <h2 className="display mt-3 text-3xl md:text-4xl text-[#0a0f1d]">How can we assist you?</h2>
            <p className="mt-2 text-sm leading-7 text-[#66675f]">
              Choose the topic of your enquiry and leave a message. Our team will get back to you shortly.
            </p>

            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}