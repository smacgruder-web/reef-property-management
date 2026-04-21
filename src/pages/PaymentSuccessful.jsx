import { Link } from 'react-router-dom';
import Panel from '../components/shared/Panel';
import GlassCard from '../components/shared/GlassCard';

export default function PaymentSuccessful() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <Panel title="Payment successful" subtitle="The transaction is complete and the payment has been recorded.">
        <div className="space-y-6">
          <GlassCard className="overflow-hidden rounded-[32px] border border-slate-200 shadow-sm">
            <img src="/stitch/payment_successful/screen.png" alt="Payment successful Stitch screen preview" className="h-72 w-full object-cover" />
            <div className="p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Confirmed</div>
              <div className="mt-4 text-3xl font-semibold text-slate-900">Payment received</div>
              <div className="mt-3 text-sm leading-6 text-slate-600">Your payment has been processed successfully. A receipt has been recorded in your account and will be available for download.</div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/payments" className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">
                  Return to payments
                </Link>
                <Link to="/stitch/payment_successful" className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
                  View Stitch success screen
                </Link>
              </div>
            </div>
          </GlassCard>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Receipt ID', value: 'PAY-167823' },
              { title: 'Amount', value: 'USD 425.00' },
            ].map((item) => (
              <GlassCard key={item.title} className="rounded-[28px] p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.title}</div>
                <div className="mt-3 text-xl font-semibold text-slate-900">{item.value}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </Panel>

      <GlassCard className="rounded-[32px] p-6 bg-gradient-to-br from-slate-900 via-cyan-900 to-teal-700 text-white shadow-[0_25px_60px_rgba(15,23,42,0.25)]">
        <div className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">What happens next</div>
        <div className="mt-4 space-y-3 text-sm leading-6 text-cyan-100">
          <p>Receipts are stored in the billing center for both owner and resident access.</p>
          <p>For manual reviews, the ledger entry will be available on the next refresh.</p>
          <p>If you'd like, you can initiate another payment cycle from the main payments page.</p>
        </div>
      </GlassCard>
    </div>
  );
}
