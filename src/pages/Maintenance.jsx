import { Camera, ScanLine, Package, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Panel from "../components/shared/Panel";
import PhoneFrame from "../components/shared/PhoneFrame";

const tickets = [
  ["Urgent", "Villa 7 AC not cooling"],
  ["Routine", "Condo B12 leaking faucet"],
  ["Urgent", "Gate access panel offline"],
  ["Routine", "Unit 4 repaint after move-out"],
];

const caretakerActions = [
  ["Upload photo", Camera],
  ["Scan receipt", ScanLine],
  ["Add parts used", Package],
  ["Mark complete", CheckCircle2],
];

export default function Maintenance() {
  return (
    <div className="grid gap-6 2xl:grid-cols-[1.15fr_0.85fr]">
      <Panel title="Maintenance dispatch" subtitle="Central queue, routing, and field completions">
        <div className="grid gap-4 xl:grid-cols-[1fr_0.9fr]">
          <div className="space-y-3">
            {tickets.map(([level, task]) => (
              <div key={task} className="flex items-center justify-between rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
                <div>
                  <div className="text-sm font-semibold text-slate-900">{task}</div>
                  <div className="mt-1 text-xs text-slate-500">{level} priority</div>
                </div>
                <Button variant="outline" className="rounded-2xl">Assign</Button>
              </div>
            ))}
          </div>
          <div className="rounded-[28px] bg-[linear-gradient(135deg,#dbeafe_0%,#ccfbf1_100%)] p-3">
            <div className="flex h-full min-h-[280px] items-end rounded-[24px] border border-white/70 bg-white/50 p-4">
              <div>
                <div className="text-sm font-semibold text-slate-900">Technician map / route view</div>
                <div className="mt-1 text-xs text-slate-500">Belize City, Belmopan, Placencia dispatch overlay</div>
              </div>
            </div>
          </div>
        </div>
      </Panel>

      <PhoneFrame title="Caretaker mode" subtitle="Field-ready work order flow">
        <div className="rounded-[24px] border border-amber-200 bg-amber-50 p-4">
          <div className="text-sm font-semibold text-slate-900">Villa 7 · AC not cooling</div>
          <div className="mt-1 text-xs text-slate-500">Urgent · Assigned to Carlos M.</div>
        </div>
        <div className="space-y-3">
          {caretakerActions.map(([label, Icon]) => (
            <div key={label} className="flex items-center gap-3 rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="rounded-2xl bg-slate-100 p-2"><Icon className="h-4 w-4 text-slate-700" /></div>
              <div className="text-sm font-medium text-slate-900">{label}</div>
            </div>
          ))}
        </div>
      </PhoneFrame>
    </div>
  );
}