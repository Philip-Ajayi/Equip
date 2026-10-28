"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!event.currentTarget.reportValidity()) return;

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-[#1c7c54]/20 bg-[#eaf3e9] p-8 md:p-10 text-left">
        <CheckCircle2 size={32} className="text-[#1c7c54]" />
        <h3 className="display mt-4 text-2xl md:text-3xl text-[#0a0f1d]">
          Thank you for reaching out.
        </h3>
        <p className="mt-2 text-sm leading-7 text-[#3f5746]">
          Your enquiry has been received. A representative from Leading Minds
          Leadership Initiative will contact you shortly via email or phone.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="outline-button mt-6 text-xs font-semibold"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label block text-xs font-semibold text-[#0a0f1d] mb-1.5" htmlFor="contact-name">
            Your name
          </label>
          <input
            className="input-field w-full rounded-xl border border-black/10 bg-[#fbf9f5] px-4 py-3 text-sm outline-none transition focus:border-[#5925dc]"
            id="contact-name"
            name="name"
            placeholder="Full name"
            autoComplete="name"
            required
          />
        </div>

        <div>
          <label className="field-label block text-xs font-semibold text-[#0a0f1d] mb-1.5" htmlFor="contact-email">
            Email address
          </label>
          <input
            className="input-field w-full rounded-xl border border-black/10 bg-[#fbf9f5] px-4 py-3 text-sm outline-none transition focus:border-[#5925dc]"
            id="contact-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div>
        <label className="field-label block text-xs font-semibold text-[#0a0f1d] mb-1.5" htmlFor="contact-topic">
          What would you like to discuss?
        </label>
        <select
          className="input-field w-full rounded-xl border border-black/10 bg-[#fbf9f5] px-4 py-3 text-sm outline-none transition focus:border-[#5925dc]"
          id="contact-topic"
          name="topic"
          defaultValue="sponsorship"
        >
          <option value="sponsorship">Sponsorship & Partnership Tiers</option>
          <option value="student">Student Participation & Registration</option>
          <option value="volunteer">Volunteering, Counseling & Mentoring</option>
          <option value="general">General Enquiry</option>
        </select>
      </div>

      <div>
        <label className="field-label block text-xs font-semibold text-[#0a0f1d] mb-1.5" htmlFor="contact-message">
          Your message
        </label>
        <textarea
          className="input-field min-h-32 w-full resize-y rounded-xl border border-black/10 bg-[#fbf9f5] p-4 text-sm outline-none transition focus:border-[#5925dc]"
          id="contact-message"
          name="message"
          placeholder="Tell us a little about your enquiry or organization..."
          required
        />
      </div>

      <button type="submit" className="clay-button inline-flex items-center gap-2">
        Submit message <ArrowRight size={16} />
      </button>

      <p className="text-xs leading-6 text-[#77766e]">
        Leading Minds Leadership Initiative respects your privacy. Your information is never shared.
      </p>
    </form>
  );
}