import { useState } from "react";
import { Download, TrendingUp, TrendingDown, DollarSign, ArrowUpRight } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, Tooltip, BarChart, Bar, Legend } from "recharts";
import { Button } from "@/components/ui/button";
import { cx } from "../shared/GlassCard";

const monthlyData = [
  { month: "Nov", gross: 3200, expenses: 820, payout: 2380 },
  { month: "Dec", gross: 4100, expenses: 940, payout: 3160 },
  { month: "Jan", gross: 3800, expenses: 760, payout: 3040 },
  { month: "Feb", gross: 4400, expenses: 890, payout: 3510 },
  { month: "Mar", gross: 5100, expenses: 1020, payout: 4080 },
  { month: "Apr", gross: 4800, expenses: 950, payout: 3850 },
];

const lineItems = [
  { label: "Gross rental income", amount: 4800, type: "income" },
  { label: "Cleaning fees collected", amount: 320, type: "income" },
  { label: "Management fee (10%)", amount: -512, type: "expense" },
  { label: "Maintenance – AC repair (Villa 2)", amount: -180, type: "expense" },
  { label: "Supplies & consumables", amount: -95, type: "expense" },
  { label: "Insurance premium", amount: -163, type: "expense" },
  { label: "Net owner payout", amount: 4170, type: "total" },
];

const periods = ["Apr 2026", "Mar 2026", "Feb 2026", "Q1 2026", "Full Year 2025"];

export default function FinancialStatement() {
  const [period, setPeriod] = useState("Apr 2026");

  return (
    <div className="space-y-5">
      {/* Period selector + download */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {periods.map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={cx(
                "rounded-full px-3 py-1.5 text-xs font-medium transition",
                period === p ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              )}
            >
              {p}
            </button>
          ))}
        </div>
        <Button variant="outline" className="rounded-2xl gap-1.5 text-xs">
          <Download className="h-3.5 w-3.5" /> Download PDF
        </Button>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Gross income", value: "$5,120", delta: "+12%", up: true, color: "text-teal-600" },
          { label: "Total expenses", value: "$950", delta: "-7%", up: false, color: "text-red-500" },
          { label: "Net payout", value: "$4,170", delta: "+18%", up: true, color: "text-sky-600" },
          { label: "Occupancy", value: "81%", delta: "+5%", up: true, color: "text-violet-600" },
        ].map((k) => (
          <div key={k.label} className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-[10px] uppercase tracking-widest text-slate-500">{k.label}</div>
            <div className={cx("mt-1.5 text-2xl font-semibold", k.color)}>{k.value}</div>
            <div className={cx("mt-1 flex items-center gap-1 text-[10px] font-medium", k.up ? "text-teal-600" : "text-red-500")}>
              {k.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {k.delta} vs last month
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-3 text-xs font-semibold text-slate-700">6-month income breakdown</div>
        <div className="h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData} barSize={18}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="gross" name="Gross" fill="#0ea5e9" radius={[6, 6, 0, 0]} />
              <Bar dataKey="expenses" name="Expenses" fill="#f87171" radius={[6, 6, 0, 0]} />
              <Bar dataKey="payout" name="Payout" fill="#14b8a6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Line item table */}
      <div className="rounded-[24px] border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="border-b border-slate-100 px-5 py-3 text-xs font-semibold text-slate-700 flex justify-between">
          <span>Statement · {period}</span>
          <span className="text-slate-400">Amount (USD)</span>
        </div>
        <div className="divide-y divide-slate-100">
          {lineItems.map((item) => (
            <div
              key={item.label}
              className={cx(
                "flex items-center justify-between px-5 py-3",
                item.type === "total" ? "bg-slate-50 font-semibold" : ""
              )}
            >
              <div className={cx("text-sm", item.type === "total" ? "text-slate-900" : "text-slate-700")}>
                {item.label}
              </div>
              <div className={cx(
                "text-sm font-medium tabular-nums",
                item.type === "income" ? "text-teal-600" :
                item.type === "expense" ? "text-red-500" : "text-slate-900"
              )}>
                {item.amount > 0 ? `+$${item.amount.toLocaleString()}` : `-$${Math.abs(item.amount).toLocaleString()}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}