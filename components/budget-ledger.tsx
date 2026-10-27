"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { budget } from "@/data/financials";
import { formatNaira } from "@/lib/utils";

export default function BudgetLedger() {
  const [expanded, setExpanded] = useState<string | null>(budget[0].id);

  const total = budget.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="overflow-hidden rounded-3xl border border-black/10 bg-white">
      <div className="flex flex-col justify-between gap-5 bg-[#0e1318] p-6 text-white md:flex-row md:items-end md:p-8">
        <div>
          <p className="eyebrow text-[#e9ae56]">Provisional budget</p>
          <p className="display mt-3 text-4xl md:text-5xl">
            {formatNaira(total)}
          </p>
          <p className="mt-2 text-xs text-white/55">
            Seven budget lines · Illustrative allocation
          </p>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
          <p className="text-[10px] uppercase tracking-[0.14em] text-white/55">
            Estimated cost per student
          </p>
          <p className="mt-2 text-2xl font-semibold">
            {formatNaira(84500)}
          </p>
        </div>
      </div>

      <div className="p-4 md:p-7">
        {budget.map((item, index) => {
          const percentage = total > 0 ? (item.amount / total) * 100 : 0;
          const isOpen = expanded === item.id;

          return (
            <div
              key={item.id}
              className="border-b border-black/10 last:border-0"
            >
              <button
                type="button"
                onClick={() => setExpanded(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                className="grid w-full grid-cols-[30px_1fr_auto_18px] items-center gap-3 py-5 text-left md:grid-cols-[40px_1fr_150px_115px_20px]"
              >
                <span className="font-mono text-xs text-[#b84a29]">
                  0{index + 1}
                </span>

                <span className="min-w-0">
                  <span className="block text-sm font-semibold">
                    {item.title}
                  </span>
                  <span className="mt-2 block h-1.5 w-full overflow-hidden rounded-full bg-[#eee9df] md:max-w-[200px]">
                    <span
                      className="block h-full rounded-full bg-[#b84a29]"
                      style={{ width: `${percentage}%` }}
                    />
                  </span>
                </span>

                <span className="text-right text-sm font-semibold tabular-nums">
                  {formatNaira(item.amount)}
                </span>

                <span className="hidden text-right font-mono text-xs text-[#77766e] md:block">
                  {percentage.toFixed(1)}%
                </span>

                <ChevronDown
                  size={17}
                  className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isOpen && (
                <div className="mb-5 ml-10 rounded-xl bg-[#f7f5f0] p-4 md:ml-[52px]">
                  <p className="text-sm leading-7 text-[#66675f]">
                    {item.description}
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#1c7c54]">
                    <Check size={14} /> {percentage.toFixed(1)}% of the proposed budget
                  </p>
                </div>
              )}
            </div>
          );
        })}

        <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#f7f5f0] p-5">
          <div>
            <p className="text-sm font-bold">Grand total</p>
            <p className="mt-1 text-xs text-[#66675f]">
              All seven budget lines
            </p>
          </div>
          <p className="text-right text-lg font-bold tabular-nums md:text-2xl">
            {formatNaira(total)}
          </p>
        </div>
      </div>
    </div>
  );
}
