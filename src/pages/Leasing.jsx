import { useOutletContext } from "react-router-dom";
import { Wallet, FileText, Wrench, MessageSquare } from "lucide-react";
import Panel from "../components/shared/Panel";
import PhoneFrame from "../components/shared/PhoneFrame";

const pipeline = [
  ["Leads", "12 applicants"],
  ["Screening", "4 in review"],
  ["Lease ready", "3 awaiting signature"],
  ["Move-in", "2 this week"],
];

const tenantActions = [
  ["Pay rent", Wallet],
  ["View lease", FileText],
  ["Request repair", Wrench],
  ["Message manager", MessageSquare],
];

export default function Leasing() {
  const { role } = useOutletContext();

  return (
    <div className="grid gap-6 2xl:grid-cols-[1.15fr_0.85fr]">
      <Panel title="Leasing pipeline" subtitle="Lead to screening to lease execution">
        <div className="grid gap-4 xl:grid-cols-4">
          {pipeline.map(([a, b]) => (
            <div key={a} className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">{a}</div>
              <div className="mt-1 text-xs text-slate-500">{b}</div>
              <div className="mt-4 space-y-2">
                <div className="rounded-2xl bg-slate-100 p-3 text-xs text-slate-600">Applicant card</div>
                <div className="rounded-2xl bg-slate-100 p-3 text-xs text-slate-600">Applicant card</div>
              </div>
            </div>
          ))}
        </div>
      </Panel>

      <PhoneFrame title={role === "resident" ? "Resident wallet" : "Tenant ledger"} subtitle="Resident mobile experience">
        <div className="rounded-[28px] bg-[linear-gradient(135deg,#0f172a_0%,#134e4a_100%)] p-5 text-white shadow-lg">
          <div className="text-xs uppercase tracking-[0.18em] text-white/70">Current balance</div>
          <div className="mt-2 text-3xl font-semibold">BZD 1,250</div>
          <div className="mt-2 text-xs text-white/70">Due on the 1st of each month</div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {tenantActions.map(([label, Icon]) => (
            <div key={label} className="rounded-[24px] border border-slate-200 bg-white p-4 text-center shadow-sm">
              <div className="mx-auto mb-2 w-fit rounded-2xl bg-slate-100 p-2"><Icon className="h-4 w-4 text-slate-700" /></div>
              <div className="text-sm font-medium text-slate-900">{label}</div>
            </div>
          ))}
        </div>
      </PhoneFrame>
    </div>
  );
}