import { useState } from "react";
import { X, Calendar, Users, Home, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

const properties = [
  "Sea Glass Suite",
  "Lagoon Loft",
  "Villa Sol",
  "Maya Reef Villa 2",
  "Maya Reef Villa 4",
  "Garden Court Unit 3",
];

const statusColors = {
  confirmed: "bg-teal-500",
  pending: "bg-amber-400",
  checkin: "bg-sky-500",
  checkout: "bg-slate-400",
};

export default function BookingModal({ date, booking, onSave, onClose, onDelete }) {
  const isNew = !booking;
  const [form, setForm] = useState({
    guest: booking?.guest || "",
    property: booking?.property || properties[0],
    checkIn: booking?.checkIn || (date ? date.toISOString().slice(0, 10) : ""),
    checkOut: booking?.checkOut || "",
    guests: booking?.guests || 2,
    status: booking?.status || "pending",
    notes: booking?.notes || "",
  });

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative z-10 w-full max-w-lg rounded-[28px] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.18)]"
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
            <div>
              <div className="text-base font-semibold text-slate-900">
                {isNew ? "New reservation" : "Edit reservation"}
              </div>
              {date && (
                <div className="mt-0.5 text-xs text-slate-500 flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                </div>
              )}
            </div>
            <button onClick={onClose} className="rounded-2xl bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 transition">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-4 p-6">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-600">Guest name</label>
              <Input
                value={form.guest}
                onChange={(e) => set("guest", e.target.value)}
                placeholder="e.g. Sarah Johnson"
                className="rounded-2xl border-slate-200"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-600">Property</label>
              <select
                value={form.property}
                onChange={(e) => set("property", e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                {properties.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-600">Check-in</label>
                <Input
                  type="date"
                  value={form.checkIn}
                  onChange={(e) => set("checkIn", e.target.value)}
                  className="rounded-2xl border-slate-200"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-600">Check-out</label>
                <Input
                  type="date"
                  value={form.checkOut}
                  onChange={(e) => set("checkOut", e.target.value)}
                  className="rounded-2xl border-slate-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-600">Guests</label>
                <Input
                  type="number"
                  min={1}
                  max={20}
                  value={form.guests}
                  onChange={(e) => set("guests", Number(e.target.value))}
                  className="rounded-2xl border-slate-200"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-600">Status</label>
                <select
                  value={form.status}
                  onChange={(e) => set("status", e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="checkin">Check-in today</option>
                  <option value="checkout">Checked out</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-600">Notes</label>
              <textarea
                value={form.notes}
                onChange={(e) => set("notes", e.target.value)}
                placeholder="Special requests, late check-in, etc."
                rows={2}
                className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 resize-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-slate-100 px-6 py-4">
            <div>
              {!isNew && (
                <Button variant="ghost" onClick={() => onDelete(booking.id)} className="rounded-2xl text-red-500 hover:bg-red-50 hover:text-red-600">
                  Delete
                </Button>
              )}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={onClose} className="rounded-2xl">Cancel</Button>
              <Button onClick={() => onSave(form)} className="rounded-2xl bg-slate-900 hover:bg-slate-800">
                {isNew ? "Create booking" : "Save changes"}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}