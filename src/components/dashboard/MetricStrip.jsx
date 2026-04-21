import { Home, Hotel, Landmark, Users, BadgeCheck } from "lucide-react";
import GlassCard from "../shared/GlassCard";

const items = [
  ["Long-term units", "42", Home],
  ["Vacation listings", "11", Hotel],
  ["HOA communities", "4", Landmark],
  ["Owner accounts", "27", Users],
  ["Field staff", "8", BadgeCheck],
];

export default function MetricStrip() {
  return (
    <div className="mb-6 grid gap-4 xl:grid-cols-5">
      {items.map(([label, value, Icon]) => (
        <GlassCard key={label}>
          <div className="flex items-center justify-between p-4">
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-slate-500">{label}</div>
              <div className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">{value}</div>
            </div>
            <div className="rounded-2xl bg-slate-100 p-3"><Icon className="h-5 w-5 text-slate-700" /></div>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}