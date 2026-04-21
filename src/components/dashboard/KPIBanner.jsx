import { Building, Wallet, Wrench } from "lucide-react";
import GlassCard from "../shared/GlassCard";
import StatCard from "../shared/StatCard";

export default function KPIBanner() {
  return (
    <GlassCard className="mb-6 rounded-[32px]">
      <div className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-[24px] bg-[linear-gradient(135deg,#0f172a_0%,#164e63_100%)] p-5 text-white">
          <div className="text-xs uppercase tracking-[0.18em] text-white/70">Portfolio value</div>
          <div className="mt-2 text-3xl font-semibold">$4.8M</div>
          <div className="mt-2 text-xs text-white/70">Managed across Belize City, Belmopan, Placencia, San Pedro</div>
        </div>
        <StatCard label="Occupancy" value="76%" delta="+8%" icon={Building} tone="teal" />
        <StatCard label="Revenue" value="$48.2K" delta="+12%" icon={Wallet} tone="blue" />
        <StatCard label="Open tickets" value="17" delta="-4%" icon={Wrench} tone="amber" />
      </div>
    </GlassCard>
  );
}