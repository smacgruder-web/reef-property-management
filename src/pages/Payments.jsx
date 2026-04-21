import { Link } from "react-router-dom";
import Panel from "../components/shared/Panel";
import PhoneFrame from "../components/shared/PhoneFrame";

const paymentTypes = [
  "Rent collection",
  "HOA dues",
  "Guest invoices",
  "Owner payouts",
  "Manual cash / bank entry",
  "USD / BZD ledger",
];

export default function Payments() {
  return (
    <div className="grid gap-6 2xl:grid-cols-[1.15fr_0.85fr]">
      <Panel title="Payments and ledger" subtitle="Collections, manual entries, owner payouts, and currency handling">
        <div className="grid gap-4 xl:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-3 sm:grid-cols-2">
            {paymentTypes.map((item) => (
              <div key={item} className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm text-sm font-medium text-slate-800">{item}</div>
            ))}
          </div>
          <div className="rounded-[28px] bg-slate-50 p-4">
            <div className="rounded-[24px] bg-white p-4 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">Owner statement preview</div>
              <div className="mt-3 space-y-2">
                <div className="h-10 rounded-2xl bg-slate-100" />
                <div className="h-10 rounded-2xl bg-slate-100" />
                <div className="h-24 rounded-2xl bg-slate-100" />
              </div>
            </div>
          </div>
        </div>
      </Panel>

      <PhoneFrame title="Payment" subtitle="Resident / guest checkout flow">
        <div className="rounded-[28px] bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_100%)] p-5 text-white shadow-lg">
          <div className="text-xs uppercase tracking-[0.18em] text-white/70">Amount due</div>
          <div className="mt-2 text-3xl font-semibold">USD 425.00</div>
          <div className="mt-2 text-xs text-white/70">Secure checkout with manual fallback support</div>
        </div>
        <div className="space-y-2 text-sm text-slate-700">
          {["Card", "Bank transfer", "Cash / office receipt"].map((item) => (
            <div key={item} className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm">{item}</div>
          ))}
        </div>        <div className="mt-4 flex flex-wrap gap-3">
          <Link to="/payment-successful" className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90">
            Pay now
          </Link>
          <Link to="/stitch/payment_successful" className="rounded-2xl border border-white bg-white/90 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white">
            Open Stitch success screen
          </Link>
        </div>      </PhoneFrame>
    </div>
  );
}