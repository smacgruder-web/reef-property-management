import { motion } from "framer-motion";
import { Bell, Sparkles } from "lucide-react";

export default function PhoneFrame({ title, subtitle, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto w-full max-w-[390px] rounded-[2.8rem] border-[10px] border-slate-900/80 bg-gradient-to-b from-slate-950 to-slate-900 shadow-[0_30px_80px_rgba(15,23,42,0.22)]"
    >
      <div className="mx-auto mt-2 h-5 w-32 rounded-full bg-slate-200/15 shadow-inner" />
      <div className="px-4 pb-4 pt-3">
        <div className="mb-4 rounded-[2rem] bg-slate-950/90 px-4 py-4 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-base font-semibold">{title}</div>
              <div className="text-xs text-slate-300">{subtitle}</div>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Bell className="h-4 w-4" />
              <Sparkles className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="space-y-3">{children}</div>
      </div>
    </motion.div>
  );
}
