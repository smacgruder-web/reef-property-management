import { motion } from "framer-motion";
import { cx } from "./GlassCard";

const toneMap = {
  default: "from-white to-slate-50",
  teal: "from-teal-50 to-cyan-50",
  blue: "from-sky-50 to-indigo-50",
  amber: "from-amber-50 to-orange-50",
};

export default function StatCard({ label, value, delta, icon: Icon, tone = "default" }) {
  return (
    <motion.div whileHover={{ y: -2 }} className="h-full">
      <div className={cx("h-full rounded-[28px] border border-white/70 bg-gradient-to-br p-4 shadow-[0_8px_30px_rgba(15,23,42,0.06)]", toneMap[tone])}>
        <div className="mb-4 flex items-center justify-between">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</div>
          <div className="rounded-2xl bg-white/80 p-2 shadow-sm">
            <Icon className="h-4 w-4 text-slate-700" />
          </div>
        </div>
        <div className="text-3xl font-semibold tracking-tight text-slate-950">{value}</div>
        <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
          <span className="rounded-full bg-white/80 px-2 py-1 font-medium text-slate-700">{delta}</span>
          vs last month
        </div>
      </div>
    </motion.div>
  );
}