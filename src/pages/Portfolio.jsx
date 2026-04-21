import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Panel from "../components/shared/Panel";
import PhoneFrame from "../components/shared/PhoneFrame";

const properties = [
  ["Coral Vista Residences", "Condo / HOA", "32 units · board-managed", "Belize City"],
  ["Maya Reef Villas", "Vacation rentals", "9 listings · nightly", "Placencia"],
  ["Garden Court Rentals", "Long-term", "14 units · monthly", "Belmopan"],
];

const tags = ["Belize City", "Belmopan", "Placencia", "San Pedro", "Cayo", "Mixed-use"];

export default function Portfolio() {
  return (
    <div className="grid gap-6 2xl:grid-cols-[1.15fr_0.85fr]">
      <Panel title="Portfolio directory" subtitle="Properties by type, district, and operating model" action={<Button variant="outline" className="rounded-2xl">Map view</Button>}>
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full bg-slate-100 text-slate-700 hover:bg-slate-100">{tag}</Badge>
          ))}
        </div>
        <div className="grid gap-4 xl:grid-cols-3">
          {properties.map(([name, type, meta, tag]) => (
            <motion.div whileHover={{ y: -3 }} key={name} className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <div className="text-base font-semibold tracking-tight text-slate-950">{name}</div>
                  <div className="mt-1 text-xs text-slate-500">{type}</div>
                </div>
                <Badge className="rounded-full border-0 bg-slate-100 text-slate-700 hover:bg-slate-100">{tag}</Badge>
              </div>
              <div className="mb-4 h-36 rounded-[24px] bg-[linear-gradient(135deg,#cffafe_0%,#dbeafe_100%)] p-3">
                <div className="flex h-full items-end rounded-[20px] border border-white/70 bg-white/40 p-3">
                  <div className="text-xs font-medium text-slate-700">Property preview / gallery / map block</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-600">{meta}</div>
                <ArrowUpRight className="h-4 w-4 text-slate-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </Panel>

      <PhoneFrame title="Property detail" subtitle="Manager + caretaker view">
        <div className="rounded-[28px] bg-[linear-gradient(135deg,#e0f2fe_0%,#ccfbf1_100%)] p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-lg font-semibold tracking-tight text-slate-950">Maya Reef Villas</div>
              <div className="mt-1 flex items-center gap-1 text-xs text-slate-600"><MapPin className="h-3 w-3" /> Placencia Peninsula</div>
            </div>
            <div className="rounded-2xl bg-white/70 px-3 py-2 text-xs font-medium text-slate-700">74% occupied</div>
          </div>
        </div>
        <Panel title="Unit cards" className="rounded-[26px] border-0 shadow-none">
          <div className="space-y-3">
            {[
              ["Villa 2", "Clean and ready"],
              ["Villa 4", "Checkout at 11:00 AM"],
              ["Villa 7", "AC maintenance open"],
            ].map(([a, b]) => (
              <div key={a} className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">{a}</div>
                <div className="mt-1 text-xs text-slate-500">{b}</div>
              </div>
            ))}
          </div>
        </Panel>
      </PhoneFrame>
    </div>
  );
}