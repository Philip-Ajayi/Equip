"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { curriculum } from "@/data/curriculum";

type StudentForm = {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  state: string;
  lga: string;
  school: string;
  track: string;
  statement: string;
};

const initialForm: StudentForm = {
  fullName: "",
  email: "",
  phone: "",
  age: "",
  state: "Oyo",
  lga: "",
  school: "",
  track: "",
  statement: "",
};

const steps = [
  "Your details",
  "Education",
  "Choose a track",
  "Review",
];

export default function RegisterPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [completed, setCompleted] = useState(false);

  function update<K extends keyof StudentForm>(
    key: K,
    value: StudentForm[K],
  ) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function validateCurrentStep() {
    if (step === 0) {
      return (
        form.fullName.trim().length > 1 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
        form.phone.trim().length >= 7 &&
        Number(form.age) >= 13
      );
    }

    if (step === 1) {
      return Boolean(form.state && form.lga.trim() && form.school.trim());
    }

    if (step === 2) {
      return Boolean(form.track);
    }

    return form.statement.trim().length >= 20;
  }

  function next() {
    if (!validateCurrentStep()) {
      window.alert(
        "Please complete the required fields before continuing.",
      );
      return;
    }

    if (step < steps.length - 1) {
      setStep((current) => current + 1);
    } else {
      setCompleted(true);
    }
  }

  function previous() {
    setStep((current) => Math.max(0, current - 1));
  }

  if (completed) {
    return (
      <section className="section-space min-h-[65vh]">
        <div className="page-shell max-w-2xl">
          <div className="rounded-3xl border border-[#1c7c54]/20 bg-[#edf3e9] p-8 md:p-12">
            <CheckCircle2 size={38} className="text-[#1c7c54]" />
            <p className="eyebrow mt-6">Preview complete</p>
            <h1 className="display mt-3 text-5xl">
              Thank you, {form.fullName.split(" ")[0]}.
            </h1>
            <p className="mt-5 text-sm leading-8 text-[#526657]">
              You have completed the demonstration application. This prototype
              has not transmitted your details or created an actual application.
              Official admission arrangements and deadlines should be confirmed
              by Leading Minds Leadership Initiative.
            </p>

            <div className="mt-7 rounded-2xl bg-white/80 p-5">
              <p className="text-xs text-[#66675f]">Selected training track</p>
              <p className="mt-2 font-semibold">
                {curriculum.find((track) => track.id === form.track)?.title}
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  setForm(initialForm);
                  setStep(0);
                  setCompleted(false);
                }}
                className="clay-button"
              >
                Start another preview
              </button>
              <Link href="/" className="outline-button">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">Student application preview</p>
          <h1 className="display mt-5 text-5xl md:text-7xl">
            Tell us a little about yourself.
          </h1>
          <p className="section-copy mt-5">
            This demonstration shows how a student application could work.
            Completing it does not reserve a place or submit an actual
            application.
          </p>

          <div className="mt-9 grid grid-cols-4 gap-2">
            {steps.map((label, index) => (
              <div key={label}>
                <div
                  className={`h-1.5 rounded-full ${
                    index <= step ? "bg-[#5925dc]" : "bg-black/10"
                  }`}
                />
                <p
                  className={`mt-2 text-[10px] ${
                    index === step ? "font-bold text-[#5925dc]" : "text-[#77766e]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")} · {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-black/10 bg-white p-6 md:p-10">
            {step === 0 && (
              <div className="space-y-5">
                <h2 className="display text-3xl">Your details</h2>

                <div>
                  <label className="field-label" htmlFor="student-name">
                    Full name
                  </label>
                  <input
                    id="student-name"
                    className="input-field"
                    autoComplete="name"
                    value={form.fullName}
                    onChange={(e) => update("fullName", e.target.value)}
                    required
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="field-label" htmlFor="student-email">
                      Email address
                    </label>
                    <input
                      id="student-email"
                      type="email"
                      className="input-field"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="student-phone">
                      Phone number
                    </label>
                    <input
                      id="student-phone"
                      type="tel"
                      className="input-field"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="field-label" htmlFor="student-age">
                    Age
                  </label>
                  <input
                    id="student-age"
                    type="number"
                    min="13"
                    max="30"
                    className="input-field"
                    value={form.age}
                    onChange={(e) => update("age", e.target.value)}
                    required
                  />
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-5">
                <h2 className="display text-3xl">Your education</h2>

                <div>
                  <label className="field-label" htmlFor="student-state">
                    State of residence
                  </label>
                  <select
                    id="student-state"
                    className="input-field"
                    value={form.state}
                    onChange={(e) => update("state", e.target.value)}
                  >
                    <option value="Oyo">Oyo State</option>
                    <option value="Other">Other state</option>
                  </select>
                </div>

                <div>
                  <label className="field-label" htmlFor="student-lga">
                    Local Government Area
                  </label>
                  <input
                    id="student-lga"
                    className="input-field"
                    value={form.lga}
                    onChange={(e) => update("lga", e.target.value)}
                    placeholder="Enter your LGA"
                    required
                  />
                </div>

                <div>
                  <label className="field-label" htmlFor="student-school">
                    Secondary school
                  </label>
                  <input
                    id="student-school"
                    className="input-field"
                    value={form.school}
                    onChange={(e) => update("school", e.target.value)}
                    placeholder="School name"
                    required
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="display text-3xl">Choose a learning track</h2>
                <p className="mt-3 text-sm leading-7 text-[#66675f]">
                  Choose the area you would most like to explore. Final
                  admission and track allocation arrangements remain subject
                  to confirmation.
                </p>

                <div className="mt-6 space-y-3">
                  {curriculum.map((track) => (
                    <label
                      key={track.id}
                      className={`flex cursor-pointer gap-4 rounded-2xl border p-5 transition-colors ${
                        form.track === track.id
                          ? "border-[#5925dc] bg-[#f4f0fd]"
                          : "border-black/10"
                      }`}
                    >
                      <input
                        type="radio"
                        name="training-track"
                        value={track.id}
                        checked={form.track === track.id}
                        onChange={(e) => update("track", e.target.value)}
                        className="mt-1 accent-[#5925dc]"
                      />
                      <span>
                        <span className="block font-semibold">{track.title}</span>
                        <span className="mt-2 block text-sm leading-6 text-[#66675f]">
                          {track.description}
                        </span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="display text-3xl">Review your details</h2>

                <div className="mt-6 space-y-4">
                  {[
                    ["Full name", form.fullName],
                    ["Email", form.email],
                    ["Phone", form.phone],
                    ["Age", form.age],
                    ["State", form.state],
                    ["LGA", form.lga],
                    ["School", form.school],
                    [
                      "Training track",
                      curriculum.find((track) => track.id === form.track)?.title ?? "",
                    ],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex flex-col justify-between gap-1 border-b border-black/10 pb-3 sm:flex-row sm:gap-4"
                    >
                      <span className="text-xs text-[#77766e]">{label}</span>
                      <span className="text-sm font-semibold">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <label className="field-label" htmlFor="student-statement">
                    Why would you like to take part?
                  </label>
                  <textarea
                    id="student-statement"
                    className="input-field min-h-32 resize-y"
                    value={form.statement}
                    onChange={(e) => update("statement", e.target.value)}
                    placeholder="Tell us what you hope to learn and how it may help you..."
                    required
                    minLength={20}
                  />
                  <p className="mt-2 text-xs text-[#77766e]">
                    Please write at least 20 characters.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-9 flex flex-wrap items-center justify-between gap-3 border-t border-black/10 pt-6">
              <button
                type="button"
                onClick={previous}
                disabled={step === 0}
                className="outline-button disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowLeft size={16} /> Back
              </button>

              <button type="button" onClick={next} className="clay-button">
                {step === steps.length - 1
                  ? "Complete preview"
                  : "Continue"}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <p className="mt-5 text-xs leading-6 text-[#77766e]">
            Please do not enter sensitive personal information. This prototype
            keeps its application state in the current browser session only.
          </p>
        </div>
      </div>
    </section>
  );
}
