import { Search, Menu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GlassCard, { cx } from "../shared/GlassCard";

const roles = ["manager", "caretaker", "resident", "guest", "owner", "board", "admin"];

export default function Header({ role, setRole }) {
  return (
    <div className="mb-6 grid gap-4 xl:grid-cols-[1.3fr_0.9fr]">
      <GlassCard className="rounded-[32px]">
        <div className="p-6">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge className="rounded-full border-0 bg-primary/10 text-primary">Belize-first</Badge>
            <Badge className="rounded-full border-0 bg-secondary/10 text-secondary">Vacation + Long-term</Badge>
            <Badge className="rounded-full border-0 bg-teal-100 text-teal-900">Condo / HOA</Badge>
          </div>
          <div className="max-w-4xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Stitch-designed operations for Belize property portfolios
          </div>
          <div className="mt-4 max-w-3xl space-y-3 text-sm leading-6 text-slate-600 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
            <p>Align owners, operators, maintenance, and residents with a modern, shared management experience.</p>
            <p>Move from bookings to payments to compliance in a single cohesive platform.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button className="rounded-2xl bg-primary px-5 hover:bg-primary/90">Launch workspace</Button>
            <Button variant="outline" className="rounded-2xl px-5">Open owner portal</Button>
          </div>
          <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-600">
            <span className="rounded-full bg-slate-100 px-3 py-2 font-medium">8 properties</span>
            <span className="rounded-full bg-slate-100 px-3 py-2 font-medium">24/7 operations</span>
            <span className="rounded-full bg-slate-100 px-3 py-2 font-medium">Multi-currency ready</span>
          </div>
        </div>
      </GlassCard>

      <GlassCard className="rounded-[32px]">
        <div className="p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <div className="text-sm font-semibold text-foreground">Workspace mode</div>
              <div className="mt-1 text-xs text-slate-500">Preview tailored experiences by user type</div>
            </div>
            <div className="rounded-2xl bg-slate-100 p-2"><Menu className="h-4 w-4 text-slate-600" /></div>
          </div>
          <div className="mb-4 flex items-center gap-2 rounded-[22px] border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <Search className="h-4 w-4 text-slate-400" />
            <Input placeholder="Search properties, tickets, owners, guests" className="border-0 p-0 shadow-none focus-visible:ring-0" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {roles.map((item) => (
              <button
                key={item}
                onClick={() => setRole(item)}
                className={cx(
                  "rounded-2xl px-3 py-2 text-xs font-semibold capitalize transition",
                  role === item
                    ? "bg-primary text-primary-foreground shadow-[0_10px_30px_rgba(56,189,248,0.15)]"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
