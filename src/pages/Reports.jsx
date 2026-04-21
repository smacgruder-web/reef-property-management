import Panel from "../components/shared/Panel";
import GlassCard from "../components/shared/GlassCard";

const reportTypes = [
  "Owner monthly statement",
  "Board packet",
  "Maintenance cost summary",
  "Occupancy snapshot",
];

const summaries = [
  ["Portfolio health", "Occupancy, arrears, maintenance backlog, owner payouts"],
  ["Vacation performance", "ADR, occupancy, turnovers, channel mix"],
  ["Association health", "Dues collected, violations, reserves, notices"],
];

export default function Reports() {
  return (
    <div className="space-y-6">
      <Panel title="Executive reporting" subtitle="Dashboards for operators, owners, and boards">
        <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] bg-slate-50 p-4">
            <div className="grid grid-cols-4 gap-3">
              {["Occupancy", "ADR", "Arrears", "Maintenance"].map((item) => (
                <div key={item} className="rounded-2xl bg-white p-4 shadow-sm text-sm font-medium text-slate-800">{item}</div>
              ))}
            </div>
            <div className="mt-4 h-56 rounded-[24px] bg-white shadow-sm" />
          </div>
          <div className="space-y-3">
            {reportTypes.map((item) => (
              <div key={item} className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm text-sm font-medium text-slate-800">{item}</div>
            ))}
          </div>
        </div>
      </Panel>

      <div className="grid gap-4 xl:grid-cols-3">
        {summaries.map(([title, text]) => (
          <GlassCard key={title}>
            <div className="p-5">
              <div className="text-base font-semibold text-slate-950">{title}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{text}</div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}