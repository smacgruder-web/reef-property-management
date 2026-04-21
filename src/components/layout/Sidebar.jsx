import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home, Building2, CalendarDays, Wrench, Landmark,
  CreditCard, Users, FileText, ShieldCheck, BarChart3,
  Settings, ChevronRight, Waves, Menu, X,
} from "lucide-react";
import GlassCard, { cx } from "../shared/GlassCard";

const nav = [
  { id: "/", label: "Dashboard", icon: Home },
  { id: "/portfolio", label: "Properties", icon: Building2 },
  { id: "/bookings", label: "Bookings", icon: CalendarDays },
  { id: "/leasing", label: "Leasing", icon: FileText },
  { id: "/maintenance", label: "Maintenance", icon: Wrench },
  { id: "/hoa", label: "Condo / HOA", icon: Landmark },
  { id: "/payments", label: "Financials", icon: CreditCard },
  { id: "/owners", label: "Owner portal", icon: Users },
  { id: "/compliance", label: "Compliance", icon: ShieldCheck },
  { id: "/reports", label: "Reports", icon: BarChart3 },
  { id: "/stitch", label: "Stitch screens", icon: FileText },
  { id: "/admin", label: "Admin", icon: Settings },
];

export default function Sidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const content = (
    <div className="p-4">
      <div className="mb-4 rounded-[28px] border border-sidebar-border bg-gradient-to-br from-white via-slate-50 to-sky-50 p-5 text-sidebar-foreground shadow-lg">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-sidebar-primary p-2 text-sidebar-primary-foreground"><Waves className="h-5 w-5" /></div>
          <div>
            <div className="text-base font-semibold tracking-tight">REEF MGMT.</div>
            <div className="text-xs text-slate-600">Unified property operations platform</div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-700">
          <div className="rounded-2xl bg-sidebar-accent px-3 py-2 text-sidebar-accent-foreground">USD + BZD</div>
          <div className="rounded-2xl bg-sidebar-accent px-3 py-2 text-sidebar-accent-foreground">Rental + HOA</div>
        </div>
      </div>

      <div className="space-y-2">
        {nav.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.id;
          return (
            <Link
              key={item.id}
              to={item.id}
              onClick={() => setOpen(false)}
              className={cx(
                "flex w-full items-center justify-between rounded-3xl px-4 py-3 text-left transition",
                active
                  ? "bg-[#e8faff] text-slate-900 shadow-[0_18px_40px_rgba(56,189,248,0.12)]"
                  : "text-sidebar-foreground hover:bg-slate-100"
              )}
            >
              <span className="flex items-center gap-3 text-sm font-medium">
                <Icon className="h-4 w-4" />
                {item.label}
              </span>
              {active ? <ChevronRight className="h-4 w-4" /> : null}
            </Link>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 z-50 rounded-2xl bg-sidebar-primary p-3 text-sidebar-primary-foreground shadow-lg xl:hidden"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/30 xl:hidden" onClick={() => setOpen(false)}>
          <div className="absolute left-0 top-0 h-full w-[300px] overflow-y-auto bg-background shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {content}
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden xl:block">
        <GlassCard className="sticky top-6 rounded-[32px] border border-sidebar-border bg-slate-50/95">
          {content}
        </GlassCard>
      </div>
    </>
  );
}