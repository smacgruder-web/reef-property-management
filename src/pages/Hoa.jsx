import Panel from "../components/shared/Panel";
import PhoneFrame from "../components/shared/PhoneFrame";

const controls = [
  "Meeting agenda builder",
  "Bylaws and documents",
  "Violation tracking",
  "Broadcast notices",
  "Budget approvals",
  "Common area bookings",
];

export default function Hoa() {
  return (
    <div className="grid gap-6 2xl:grid-cols-[1.15fr_0.85fr]">
      <Panel title="Condo / HOA control center" subtitle="Board workflow, notices, violations, and finances">
        <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
          <div className="grid gap-3 sm:grid-cols-2">
            {controls.map((item) => (
              <div key={item} className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm text-sm font-medium text-slate-800">{item}</div>
            ))}
          </div>
          <div className="space-y-3 rounded-[28px] bg-slate-50 p-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-white p-4 shadow-sm"><div className="text-xs text-slate-500">Dues rate</div><div className="mt-1 text-xl font-semibold">91%</div></div>
              <div className="rounded-2xl bg-white p-4 shadow-sm"><div className="text-xs text-slate-500">Reserve</div><div className="mt-1 text-xl font-semibold">$84K</div></div>
              <div className="rounded-2xl bg-white p-4 shadow-sm"><div className="text-xs text-slate-500">Open cases</div><div className="mt-1 text-xl font-semibold">7</div></div>
            </div>
            <div className="rounded-[24px] bg-white p-4 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">Board packet preview</div>
              <div className="mt-2 h-40 rounded-[20px] bg-slate-100" />
            </div>
          </div>
        </div>
      </Panel>

      <PhoneFrame title="Resident community" subtitle="Community member experience">
        <div className="rounded-[28px] bg-[linear-gradient(135deg,#e0f2fe_0%,#f8fafc_100%)] p-4">
          <div className="text-lg font-semibold tracking-tight text-slate-950">Coral Vista Residences</div>
          <div className="mt-1 text-xs text-slate-500">My notices, dues, bookings, and community updates</div>
        </div>
        <div className="space-y-2 text-sm text-slate-700">
          {["Pay dues", "Book common area", "View notices", "Report issue"].map((item) => (
            <div key={item} className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm">{item}</div>
          ))}
        </div>
      </PhoneFrame>
    </div>
  );
}