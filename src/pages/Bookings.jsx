import { useState, useCallback } from "react";
import { LayoutGrid, List, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard, { cx } from "../components/shared/GlassCard";
import Panel from "../components/shared/Panel";
import PhoneFrame from "../components/shared/PhoneFrame";
import BookingCalendar, { PROPERTY_COLORS } from "../components/bookings/BookingCalendar";
import BookingModal from "../components/bookings/BookingModal";

const INITIAL_BOOKINGS = [
  { id: "b1", guest: "Sarah J.", property: "Sea Glass Suite", checkIn: "2026-04-03", checkOut: "2026-04-08", guests: 2, status: "confirmed", notes: "" },
  { id: "b2", guest: "Marcus T.", property: "Lagoon Loft", checkIn: "2026-04-07", checkOut: "2026-04-11", guests: 3, status: "checkin", notes: "Late arrival" },
  { id: "b3", guest: "Chen Family", property: "Villa Sol", checkIn: "2026-04-10", checkOut: "2026-04-17", guests: 4, status: "confirmed", notes: "" },
  { id: "b4", guest: "Rivera, A.", property: "Maya Reef Villa 2", checkIn: "2026-04-12", checkOut: "2026-04-14", guests: 2, status: "pending", notes: "" },
  { id: "b5", guest: "Hooper, B.", property: "Maya Reef Villa 4", checkIn: "2026-04-15", checkOut: "2026-04-20", guests: 5, status: "pending", notes: "Airport pickup" },
  { id: "b6", guest: "Patel, N.", property: "Garden Court Unit 3", checkIn: "2026-04-18", checkOut: "2026-04-25", guests: 1, status: "confirmed", notes: "" },
  { id: "b7", guest: "Williams, D.", property: "Sea Glass Suite", checkIn: "2026-04-22", checkOut: "2026-04-26", guests: 2, status: "pending", notes: "" },
  { id: "b8", guest: "Nguyen, L.", property: "Lagoon Loft", checkIn: "2026-04-28", checkOut: "2026-05-02", guests: 2, status: "confirmed", notes: "" },
];

const STATUS_COLOR = {
  confirmed: "bg-teal-100 text-teal-800",
  pending: "bg-amber-100 text-amber-800",
  checkin: "bg-sky-100 text-sky-800",
  checkout: "bg-slate-100 text-slate-600",
};

let nextId = 100;

export default function Bookings() {
  const [bookings, setBookings] = useState(INITIAL_BOOKINGS);
  const [view, setView] = useState("calendar");
  const [modal, setModal] = useState(null); // { mode: "new"|"edit", date?, booking? }

  const openNew = (date) => setModal({ mode: "new", date });
  const openEdit = (booking) => setModal({ mode: "edit", booking });
  const closeModal = () => setModal(null);

  const handleSave = (form) => {
    if (modal.mode === "new") {
      setBookings((prev) => [...prev, { ...form, id: `b${++nextId}` }]);
    } else {
      setBookings((prev) => prev.map((b) => b.id === modal.booking.id ? { ...b, ...form } : b));
    }
    closeModal();
  };

  const handleDelete = (id) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
    closeModal();
  };

  const handleDragEnd = useCallback((result) => {
    const { source, destination, draggableId } = result;
    if (!destination || destination.droppableId === source.droppableId) return;

    const newDate = destination.droppableId;
    if (!newDate || newDate.startsWith("empty-")) return;

    setBookings((prev) =>
      prev.map((b) => {
        if (b.id !== draggableId) return b;
        const checkInDate = new Date(b.checkIn);
        const checkOutDate = new Date(b.checkOut);
        const diff = checkOutDate - checkInDate;
        const newCheckIn = newDate;
        const newCheckOutDate = new Date(new Date(newDate).getTime() + diff);
        const newCheckOut = newCheckOutDate.toISOString().slice(0, 10);
        return { ...b, checkIn: newCheckIn, checkOut: newCheckOut };
      })
    );
  }, []);

  const upcoming = bookings
    .filter((b) => b.checkIn >= new Date().toISOString().slice(0, 10))
    .sort((a, c) => a.checkIn.localeCompare(c.checkIn))
    .slice(0, 6);

  return (
    <div className="space-y-6">
      {/* Toolbar */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <div className="text-lg font-semibold text-slate-900">Booking operations</div>
          <div className="text-xs text-slate-500 mt-0.5">Unified reservations, channel inbox, and guest timeline</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
            <button
              onClick={() => setView("calendar")}
              className={cx("flex items-center gap-1.5 px-3 py-2 text-xs font-medium transition", view === "calendar" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-50")}
            >
              <LayoutGrid className="h-3.5 w-3.5" /> Calendar
            </button>
            <button
              onClick={() => setView("list")}
              className={cx("flex items-center gap-1.5 px-3 py-2 text-xs font-medium transition", view === "list" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-50")}
            >
              <List className="h-3.5 w-3.5" /> List
            </button>
          </div>
          <Button
            onClick={() => openNew(new Date())}
            className="rounded-2xl bg-slate-900 hover:bg-slate-800 gap-1.5 text-xs"
          >
            <Plus className="h-3.5 w-3.5" /> New booking
          </Button>
        </div>
      </div>

      {view === "calendar" ? (
        <div className="grid gap-6 2xl:grid-cols-[1fr_320px]">
          {/* Calendar */}
          <GlassCard className="rounded-[28px]">
            <div className="p-5">
              <BookingCalendar
                bookings={bookings}
                onDayClick={openNew}
                onBookingClick={openEdit}
                onDragEnd={handleDragEnd}
              />
            </div>
          </GlassCard>

          {/* Sidebar: upcoming bookings */}
          <div className="space-y-4">
            <Panel title="Upcoming" subtitle={`${upcoming.length} reservations`}>
              <div className="space-y-2">
                {upcoming.map((b) => {
                  const colors = PROPERTY_COLORS[b.property];
                  return (
                    <button
                      key={b.id}
                      onClick={() => openEdit(b)}
                      className="w-full text-left rounded-[20px] border border-slate-200 bg-white p-3 shadow-sm hover:border-slate-300 hover:shadow transition"
                    >
                      <div className="flex items-start gap-2.5">
                        <span className={cx("mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full", colors?.dot || "bg-slate-400")} />
                        <div className="min-w-0">
                          <div className="text-xs font-semibold text-slate-900 truncate">{b.guest || "Guest"}</div>
                          <div className="text-[10px] text-slate-500 truncate">{b.property}</div>
                          <div className="mt-1 text-[10px] text-slate-400">{b.checkIn} → {b.checkOut}</div>
                        </div>
                        <span className={cx("ml-auto flex-shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium capitalize", STATUS_COLOR[b.status])}>
                          {b.status}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </Panel>

            <PhoneFrame title="Arrival ops" subtitle="Today's turnover flow">
              <div className="space-y-2">
                {bookings.filter((b) => b.status === "checkin").map((b) => (
                  <div key={b.id} className="rounded-[20px] bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_100%)] p-3 text-white">
                    <div className="text-xs font-semibold">{b.property}</div>
                    <div className="mt-0.5 text-[10px] text-white/70">{b.guest} · check-in today</div>
                  </div>
                ))}
                {bookings.filter((b) => b.status === "checkin").length === 0 && (
                  <div className="rounded-[20px] bg-slate-100 p-3 text-xs text-slate-500 text-center">No check-ins today</div>
                )}
              </div>
              <Panel title="Turnover checklist" className="rounded-[22px] border-0 shadow-none">
                <div className="space-y-1.5 text-xs text-slate-700">
                  {["Housekeeping assigned", "Smart lock code generated", "Arrival message sent", "Transport confirmed"].map((item) => (
                    <div key={item} className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">{item}</div>
                  ))}
                </div>
              </Panel>
            </PhoneFrame>
          </div>
        </div>
      ) : (
        /* List view */
        <GlassCard className="rounded-[28px]">
          <div className="p-5">
            <div className="space-y-2">
              {bookings
                .sort((a, b) => a.checkIn.localeCompare(b.checkIn))
                .map((b) => {
                  const colors = PROPERTY_COLORS[b.property];
                  return (
                    <button
                      key={b.id}
                      onClick={() => openEdit(b)}
                      className="w-full text-left flex items-center gap-4 rounded-[20px] border border-slate-200 bg-white px-4 py-3 shadow-sm hover:border-slate-300 hover:shadow transition"
                    >
                      <span className={cx("h-3 w-3 flex-shrink-0 rounded-full", colors?.dot || "bg-slate-400")} />
                      <div className="min-w-[140px]">
                        <div className="text-sm font-semibold text-slate-900">{b.guest || "Guest"}</div>
                        <div className="text-xs text-slate-500">{b.guests} guest{b.guests !== 1 ? "s" : ""}</div>
                      </div>
                      <div className="flex-1 text-xs text-slate-600 truncate">{b.property}</div>
                      <div className="text-xs text-slate-500 hidden sm:block">{b.checkIn} → {b.checkOut}</div>
                      <span className={cx("rounded-full px-2.5 py-1 text-xs font-medium capitalize", STATUS_COLOR[b.status])}>
                        {b.status}
                      </span>
                    </button>
                  );
                })}
            </div>
          </div>
        </GlassCard>
      )}

      {/* Modal */}
      {modal && (
        <BookingModal
          date={modal.date}
          booking={modal.booking}
          onSave={handleSave}
          onDelete={handleDelete}
          onClose={closeModal}
        />
      )}
    </div>
  );
}