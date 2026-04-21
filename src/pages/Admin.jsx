import { UserCog, ClipboardList, MessageSquare, Phone, Receipt, Globe } from "lucide-react";
import Panel from "../components/shared/Panel";
import GlassCard from "../components/shared/GlassCard";

const controls = [
  ["Role permissions", UserCog],
  ["Template library", ClipboardList],
  ["Messaging center", MessageSquare],
  ["Contact book", Phone],
  ["Tax + fee rules", Receipt],
  ["Languages + currency", Globe],
];

const systemCards = [
  ["Data entities", "Property, unit, owner, resident, guest, invoice, ticket, notice"],
  ["Automations", "Due-date nudges, turnover tasks, arrears reminders, payouts"],
  ["Integrations", "Channels, payments, e-sign, messaging, accounting"],
  ["Mobile modes", "Manager, field staff, resident, guest, owner, board"],
];

export default function Admin() {
  return (
    <div className="space-y-6">
      <Panel title="Admin and system controls" subtitle="Templates, permissions, automations, and localization">
        <div className="grid gap-4 xl:grid-cols-3">
          {controls.map(([title, Icon]) => (
            <div key={title} className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-900">{title}</div>
                <div className="rounded-2xl bg-slate-100 p-2"><Icon className="h-4 w-4 text-slate-700" /></div>
              </div>
              <div className="h-20 rounded-[22px] bg-slate-100" />
            </div>
          ))}
        </div>
      </Panel>

      <div className="grid gap-4 xl:grid-cols-4">
        {systemCards.map(([title, text]) => (
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