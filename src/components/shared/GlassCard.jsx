import { Card, CardContent } from "@/components/ui/card";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function GlassCard({ children, className = "" }) {
  return (
    <Card
      className={cx(
        "overflow-hidden rounded-[28px] border border-slate-200/70 bg-white/85 shadow-[0_25px_70px_rgba(15,23,42,0.12)] backdrop-blur-2xl",
        className,
      )}
    >
      <CardContent className="p-0">{children}</CardContent>
    </Card>
  );
}

export { cx };
