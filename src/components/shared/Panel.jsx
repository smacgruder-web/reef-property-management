import GlassCard, { cx } from "./GlassCard";

export default function Panel({ title, subtitle, action, children, className = "" }) {
  return (
    <GlassCard className={className}>
      <div className="border-b border-slate-200/80 bg-slate-50/80 px-5 py-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-foreground">{title}</div>
            {subtitle ? <div className="mt-1 text-xs text-slate-500">{subtitle}</div> : null}
          </div>
          {action}
        </div>
      </div>
      <div className="p-5">{children}</div>
    </GlassCard>
  );
}
