import {
  Wallet, CalendarRange, Landmark, FileText, KeyRound,
  MessageSquare, Wrench, ChevronRight, Home, Hotel,
} from "lucide-react";
import {
  ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, Tooltip, BarChart, Bar,
} from "recharts";
import KPIBanner from "../components/dashboard/KPIBanner";
import MetricStrip from "../components/dashboard/MetricStrip";
import Panel from "../components/shared/Panel";
import GlassCard from "../components/shared/GlassCard";
import PhoneFrame from "../components/shared/PhoneFrame";

const revenueData = [
  { month: "Jan", revenue: 28, occupancy: 62 },
  { month: "Feb", revenue: 31, occupancy: 66 },
  { month: "Mar", revenue: 36, occupancy: 72 },
  { month: "Apr", revenue: 42, occupancy: 74 },
  { month: "May", revenue: 47, occupancy: 78 },
  { month: "Jun", revenue: 52, occupancy: 81 },
];

const opsData = [
  { lane: "Long-term", total: 18 },
  { lane: "Vacation", total: 11 },
  { lane: "HOA", total: 4 },
  { lane: "Mixed-use", total: 3 },
];

const priorities = [
  ["Approve 6 owner payouts", "Accounting queue", Wallet],
  ["Assign 4 guest arrivals", "Placencia turnover", CalendarRange],
  ["Review 12 past-due dues", "Coral Vista HOA", Landmark],
  ["Send 3 lease renewals", "Belmopan rentals", FileText],
];

const portfolioMix = [
  ["Long-term rentals", "18 properties", Home],
  ["Vacation rentals", "11 listings", Hotel],
  ["Condo / HOA", "4 communities", Landmark],
];

const mobileActions = [
  ["Collect payment", Wallet],
  ["Open ticket", Wrench],
  ["Check in guest", KeyRound],
  ["Send notice", MessageSquare],
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <KPIBanner />
      <MetricStrip />

      <div className="grid gap-6 2xl:grid-cols-[1.2fr_0.8fr]">
        <Panel title="Revenue & occupancy" subtitle="Six-month performance across the portfolio">
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="revFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="currentColor" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="currentColor" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke="currentColor" fill="url(#revFill)" className="text-teal-600" strokeWidth={3} />
                <Area type="monotone" dataKey="occupancy" stroke="currentColor" fillOpacity={0} className="text-slate-400" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel title="Today's priorities" subtitle="Suggested actions for the operations team">
          <div className="space-y-3">
            {priorities.map(([title, text, Icon]) => (
              <div key={title} className="flex items-center justify-between rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-white p-2 shadow-sm"><Icon className="h-4 w-4 text-slate-700" /></div>
                  <div>
                    <div className="text-sm font-medium text-slate-900">{title}</div>
                    <div className="text-xs text-slate-500">{text}</div>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="grid gap-6 2xl:grid-cols-[1.15fr_0.85fr]">
        <Panel title="Portfolio mix" subtitle="Management lanes under one brand">
          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-3">
              {portfolioMix.map(([label, sub, Icon]) => (
                <div key={label} className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-slate-100 p-3"><Icon className="h-5 w-5 text-slate-700" /></div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{label}</div>
                      <div className="text-xs text-slate-500">{sub}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-[260px] rounded-[26px] bg-slate-50 p-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={opsData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="lane" />
                  <Tooltip />
                  <Bar dataKey="total" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Panel>

        <PhoneFrame title="Manager mobile" subtitle="Belmopan + Placencia overview">
          <div className="rounded-[28px] bg-[linear-gradient(135deg,#0f172a_0%,#134e4a_100%)] p-4 text-white shadow-lg">
            <div className="text-xs uppercase tracking-[0.18em] text-white/70">Today</div>
            <div className="mt-1 text-xl font-semibold tracking-tight">Field-ready operations hub</div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/10 p-3">
                <div className="text-xs text-white/70">Check-ins</div>
                <div className="mt-1 text-2xl font-semibold">8</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-3">
                <div className="text-xs text-white/70">Urgent repairs</div>
                <div className="mt-1 text-2xl font-semibold">3</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {mobileActions.map(([label, Icon]) => (
              <div key={label} className="rounded-[24px] border border-slate-200 bg-white p-4 text-center shadow-sm">
                <div className="mx-auto mb-2 w-fit rounded-2xl bg-slate-100 p-2"><Icon className="h-4 w-4 text-slate-700" /></div>
                <div className="text-sm font-medium text-slate-900">{label}</div>
              </div>
            ))}
          </div>
          <Panel title="Alerts" className="rounded-[26px] border-0 shadow-none">
            <div className="space-y-2">
              {[
                "Unit B12 rent overdue by 5 days",
                "Casa Maya guest arriving at 3:00 PM",
                "Palm Bay HOA board packet due tomorrow",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-100 px-3 py-3 text-sm text-slate-700">{item}</div>
              ))}
            </div>
          </Panel>
        </PhoneFrame>
      </div>
    </div>
  );
}