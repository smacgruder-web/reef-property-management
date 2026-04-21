import { useState } from "react";
import { Wrench, CheckCircle2, Clock, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";
import { cx } from "../shared/GlassCard";

const tickets = [
  {
    id: "t1", property: "Maya Reef Villa 2", unit: "Villa 2", issue: "AC not cooling properly",
    status: "in_progress", priority: "urgent", date: "2026-04-08", cost: 180,
    updates: ["Tech assigned: Carlos M.", "Parts ordered – ETA 2 days", "Follow-up call scheduled with owner"],
  },
  {
    id: "t2", property: "Maya Reef Villa 2", unit: "Villa 2", issue: "Shower head replacement",
    status: "completed", priority: "routine", date: "2026-03-28", cost: 45,
    updates: ["Completed by Carlos M.", "Photo uploaded", "Invoice attached"],
  },
  {
    id: "t3", property: "Maya Reef Villa 4", unit: "Villa 4", issue: "Pool pump inspection",
    status: "open", priority: "routine", date: "2026-04-10", cost: null,
    updates: ["Logged by property manager"],
  },
  {
    id: "t4", property: "Maya Reef Villa 2", unit: "Villa 2", issue: "Kitchen faucet drip",
    status: "completed", priority: "routine", date: "2026-03-15", cost: 30,
    updates: ["Fixed in 30 min", "No parts needed"],
  },
];

const STATUS = {
  open: { label: "Open", color: "bg-amber-100 text-amber-800", icon: Clock },
  in_progress: { label: "In progress", color: "bg-sky-100 text-sky-800", icon: Wrench },
  completed: { label: "Completed", color: "bg-teal-100 text-teal-800", icon: CheckCircle2 },
};

const PRIORITY = {
  urgent: "text-red-500 font-semibold",
  routine: "text-slate-500",
};

export default function MaintenanceTracker() {
  const [expanded, setExpanded] = useState(null);
  const [filter, setFilter] = useState("all");

  const filtered = tickets.filter((t) => filter === "all" || t.status === filter);

  return (
    <div className="space-y-4">
      {/* Summary row */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Open", count: tickets.filter(t => t.status === "open").length, color: "bg-amber-50 border-amber-200 text-amber-800" },
          { label: "In progress", count: tickets.filter(t => t.status === "in_progress").length, color: "bg-sky-50 border-sky-200 text-sky-800" },
          { label: "Completed", count: tickets.filter(t => t.status === "completed").length, color: "bg-teal-50 border-teal-200 text-teal-800" },
        ].map((s) => (
          <div key={s.label} className={cx("rounded-[20px] border p-4 text-center", s.color)}>
            <div className="text-2xl font-semibold">{s.count}</div>
            <div className="mt-0.5 text-xs font-medium">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filter */}
      <div className="flex gap-2">
        {["all", "open", "in_progress", "completed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cx(
              "rounded-full px-3 py-1.5 text-xs font-medium capitalize transition",
              filter === f ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            )}
          >
            {f === "all" ? "All tickets" : f.replace("_", " ")}
          </button>
        ))}
      </div>

      {/* Ticket list */}
      <div className="space-y-2">
        {filtered.map((t) => {
          const s = STATUS[t.status];
          const SIcon = s.icon;
          const open = expanded === t.id;
          return (
            <div key={t.id} className="rounded-[22px] border border-slate-200 bg-white shadow-sm overflow-hidden">
              <button
                onClick={() => setExpanded(open ? null : t.id)}
                className="w-full flex items-center gap-3 px-4 py-4 text-left"
              >
                <div className="rounded-xl bg-slate-100 p-2 flex-shrink-0">
                  <SIcon className="h-4 w-4 text-slate-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-slate-900 truncate">{t.issue}</div>
                  <div className="text-xs text-slate-500">{t.property} · {t.date}</div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className={cx("rounded-full px-2.5 py-1 text-[10px] font-medium", s.color)}>{s.label}</span>
                  <span className={cx("text-xs capitalize", PRIORITY[t.priority])}>{t.priority}</span>
                  {open ? <ChevronUp className="h-4 w-4 text-slate-400" /> : <ChevronDown className="h-4 w-4 text-slate-400" />}
                </div>
              </button>

              {open && (
                <div className="border-t border-slate-100 px-4 pb-4 pt-3 space-y-3">
                  <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Activity log</div>
                  <div className="space-y-2">
                    {t.updates.map((u, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                        <div className="text-sm text-slate-700">{u}</div>
                      </div>
                    ))}
                  </div>
                  {t.cost !== null && (
                    <div className="rounded-2xl bg-slate-50 px-3 py-2 text-xs text-slate-700 flex justify-between">
                      <span>Maintenance cost</span>
                      <span className="font-semibold text-red-500">-${t.cost}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}