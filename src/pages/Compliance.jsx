import { ShieldCheck } from "lucide-react";
import Panel from "../components/shared/Panel";
import PhoneFrame from "../components/shared/PhoneFrame";

const items = [
  "Property registration checklist",
  "Guest identity capture",
  "Tax and fee tagging",
  "Insurance and permit reminders",
  "Board document archive",
  "Lease and notice templates",
];

export default function Compliance() {
  return (
    <div className="grid gap-6 2xl:grid-cols-[1.15fr_0.85fr]">
      <Panel title="Belize controls and compliance" subtitle="Operational checklist, audit trail, template governance, and renewal tracking">
        <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
                <div className="rounded-2xl bg-slate-100 p-2"><ShieldCheck className="h-4 w-4 text-slate-700" /></div>
                <div className="text-sm font-medium text-slate-800">{item}</div>
              </div>
            ))}
          </div>
          <div className="rounded-[28px] bg-slate-50 p-4">
            <div className="space-y-3 rounded-[24px] bg-white p-4 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">Audit trail preview</div>
              <div className="h-14 rounded-2xl bg-slate-100" />
              <div className="h-14 rounded-2xl bg-slate-100" />
              <div className="h-14 rounded-2xl bg-slate-100" />
              <div className="h-20 rounded-2xl bg-slate-100" />
            </div>
          </div>
        </div>
      </Panel>

      <PhoneFrame title="Compliance tasks" subtitle="Manager mobile review">
        <div className="space-y-2 text-sm text-slate-700">
          {[
            "3 renewals to review",
            "2 insurance docs missing",
            "1 board packet pending approval",
          ].map((item) => (
            <div key={item} className="rounded-[22px] bg-amber-50 p-4 text-amber-900">{item}</div>
          ))}
        </div>
        <div className="space-y-2 text-sm text-slate-700">
          {["Approve template", "Request document", "Export audit report"].map((item) => (
            <div key={item} className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm">{item}</div>
          ))}
        </div>
      </PhoneFrame>
    </div>
  );
}