import { useState } from "react";
import { BarChart3, Wrench, FolderOpen, MessageSquare, Users, ArrowUpRight } from "lucide-react";
import GlassCard, { cx } from "../components/shared/GlassCard";
import Panel from "../components/shared/Panel";
import PhoneFrame from "../components/shared/PhoneFrame";
import FinancialStatement from "../components/owners/FinancialStatement";
import MaintenanceTracker from "../components/owners/MaintenanceTracker";
import DocumentsVault from "../components/owners/DocumentsVault";
import MessageCenter from "../components/owners/MessageCenter";

const owners = [
  { name: "Radha A.", units: "8 units", payout: "$13.7K", occupancy: "82%" },
  { name: "Christopher H.", units: "8 units", payout: "$11.2K", occupancy: "78%" },
  { name: "Maya Holdings Ltd.", units: "5 villas", payout: "$18.4K", occupancy: "74%" },
  { name: "Coral Vista HOA Board", units: "32 units", payout: "$4.1K", occupancy: "91%" },
];

const TABS = [
  { id: "financials", label: "Financials", icon: BarChart3 },
  { id: "maintenance", label: "Maintenance", icon: Wrench },
  { id: "documents", label: "Documents", icon: FolderOpen },
  { id: "messages", label: "Messages", icon: MessageSquare },
];

export default function Owners() {
  const [selectedOwner, setSelectedOwner] = useState(owners[2]);
  const [tab, setTab] = useState("financials");

  return (
    <div className="space-y-6">
      {/* Owner selector header */}
      <div className="grid gap-4 xl:grid-cols-[280px_1fr]">
        {/* Owner list */}
        <GlassCard className="rounded-[28px]">
          <div className="border-b border-slate-100 px-4 py-3">
            <div className="text-sm font-semibold text-slate-900">Owner accounts</div>
            <div className="text-xs text-slate-500 mt-0.5">{owners.length} active owners</div>
          </div>
          <div className="p-3 space-y-1.5">
            {owners.map((o) => (
              <button
                key={o.name}
                onClick={() => setSelectedOwner(o)}
                className={cx(
                  "w-full text-left rounded-[20px] px-3 py-3 transition",
                  selectedOwner.name === o.name
                    ? "bg-slate-900 text-white"
                    : "hover:bg-slate-100 text-slate-700"
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <div className={cx("text-sm font-semibold", selectedOwner.name === o.name ? "text-white" : "text-slate-900")}>{o.name}</div>
                    <div className={cx("text-xs mt-0.5", selectedOwner.name === o.name ? "text-white/70" : "text-slate-500")}>{o.units}</div>
                  </div>
                  <div className="text-right">
                    <div className={cx("text-xs font-semibold", selectedOwner.name === o.name ? "text-teal-300" : "text-teal-600")}>{o.payout}</div>
                    <div className={cx("text-[10px] mt-0.5", selectedOwner.name === o.name ? "text-white/60" : "text-slate-400")}>{o.occupancy} occ.</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </GlassCard>

        {/* Owner summary card */}
        <GlassCard className="rounded-[28px]">
          <div className="p-6">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-semibold text-base">
                    {selectedOwner.name[0]}
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-slate-900">{selectedOwner.name}</div>
                    <div className="text-xs text-slate-500">{selectedOwner.units} · Active owner</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 flex-wrap">
                {[
                  ["Net payout", selectedOwner.payout, "text-teal-600"],
                  ["Occupancy", selectedOwner.occupancy, "text-sky-600"],
                ].map(([label, val, color]) => (
                  <div key={label} className="rounded-[20px] border border-slate-200 bg-white px-4 py-3 shadow-sm text-center min-w-[90px]">
                    <div className="text-[10px] uppercase tracking-widest text-slate-500">{label}</div>
                    <div className={cx("mt-1 text-xl font-semibold", color)}>{val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tab bar */}
            <div className="mt-5 flex flex-wrap gap-2 border-b border-slate-100 pb-0">
              {TABS.map((t) => {
                const Icon = t.icon;
                const active = tab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    className={cx(
                      "flex items-center gap-1.5 rounded-t-2xl px-4 py-2.5 text-xs font-medium transition border-b-2 -mb-px",
                      active
                        ? "border-slate-900 text-slate-900 bg-slate-50"
                        : "border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Tab content */}
      <GlassCard className="rounded-[28px]">
        <div className="p-6">
          {tab === "financials" && <FinancialStatement />}
          {tab === "maintenance" && <MaintenanceTracker />}
          {tab === "documents" && <DocumentsVault />}
          {tab === "messages" && <MessageCenter />}
        </div>
      </GlassCard>
    </div>
  );
}