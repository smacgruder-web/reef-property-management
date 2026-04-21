import { useState, useRef, useEffect } from "react";
import { Send, Paperclip, CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cx } from "../shared/GlassCard";

const INITIAL_MESSAGES = [
  { id: 1, from: "manager", name: "Alex (Property Manager)", text: "Hello! Your April statement is ready. Net payout of $4,170 has been processed and will arrive in 2-3 business days.", time: "Apr 9, 9:12 AM", read: true },
  { id: 2, from: "owner", text: "Thank you Alex! Quick question — has the AC issue in Villa 2 been resolved?", time: "Apr 9, 10:45 AM", read: true },
  { id: 3, from: "manager", name: "Alex (Property Manager)", text: "We have a technician on-site now. Parts arrived yesterday. Should be fully resolved by end of day. I'll send you a photo once complete.", time: "Apr 9, 11:02 AM", read: true },
  { id: 4, from: "owner", text: "Great, appreciate the quick update. Also — are we on track for the insurance renewal in December?", time: "Apr 10, 8:30 AM", read: true },
  { id: 5, from: "manager", name: "Alex (Property Manager)", text: "Yes, I've already put a reminder in the compliance tracker. We'll send you the renewal docs 60 days in advance. No action needed from your side right now.", time: "Apr 10, 8:55 AM", read: true },
];

export default function MessageCenter() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [text, setText] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!text.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: "owner", text: text.trim(), time: "Just now", read: false },
    ]);
    setText("");

    // Simulate manager reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          from: "manager",
          name: "Alex (Property Manager)",
          text: "Thanks for reaching out! I'll look into that and get back to you shortly.",
          time: "Just now",
          read: false,
        },
      ]);
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-3" style={{ height: "520px" }}>
      {/* Message thread */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-1">
        {messages.map((m) => {
          const isOwner = m.from === "owner";
          return (
            <div key={m.id} className={cx("flex gap-2", isOwner ? "flex-row-reverse" : "flex-row")}>
              {!isOwner && (
                <div className="h-8 w-8 flex-shrink-0 rounded-2xl bg-slate-900 flex items-center justify-center text-white text-xs font-semibold">
                  A
                </div>
              )}
              <div className={cx("max-w-[75%] space-y-1", isOwner && "items-end flex flex-col")}>
                {!isOwner && <div className="text-[10px] font-medium text-slate-500">{m.name}</div>}
                <div className={cx(
                  "rounded-[18px] px-4 py-2.5 text-sm leading-relaxed",
                  isOwner
                    ? "bg-slate-900 text-white rounded-tr-sm"
                    : "bg-white border border-slate-200 text-slate-800 shadow-sm rounded-tl-sm"
                )}>
                  {m.text}
                </div>
                <div className={cx("flex items-center gap-1 text-[10px] text-slate-400", isOwner && "justify-end")}>
                  {m.time}
                  {isOwner && <CheckCheck className="h-3 w-3" />}
                </div>
              </div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 rounded-[22px] border border-slate-200 bg-white px-3 py-2 shadow-sm">
        <button className="rounded-xl p-1.5 text-slate-400 hover:text-slate-600 transition">
          <Paperclip className="h-4 w-4" />
        </button>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Message your property manager…"
          className="border-0 p-0 shadow-none focus-visible:ring-0 text-sm"
        />
        <Button
          onClick={send}
          disabled={!text.trim()}
          className="rounded-xl h-8 w-8 p-0 bg-slate-900 hover:bg-slate-800 flex-shrink-0"
        >
          <Send className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );
}