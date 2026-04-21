import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { cx } from "../shared/GlassCard";

const PROPERTY_COLORS = {
  "Sea Glass Suite": { bg: "bg-teal-500", light: "bg-teal-50 border-teal-200 text-teal-900", dot: "bg-teal-500" },
  "Lagoon Loft": { bg: "bg-sky-500", light: "bg-sky-50 border-sky-200 text-sky-900", dot: "bg-sky-500" },
  "Villa Sol": { bg: "bg-violet-500", light: "bg-violet-50 border-violet-200 text-violet-900", dot: "bg-violet-500" },
  "Maya Reef Villa 2": { bg: "bg-amber-500", light: "bg-amber-50 border-amber-200 text-amber-900", dot: "bg-amber-500" },
  "Maya Reef Villa 4": { bg: "bg-orange-500", light: "bg-orange-50 border-orange-200 text-orange-900", dot: "bg-orange-500" },
  "Garden Court Unit 3": { bg: "bg-emerald-500", light: "bg-emerald-50 border-emerald-200 text-emerald-900", dot: "bg-emerald-500" },
};

const ALL_PROPERTIES = Object.keys(PROPERTY_COLORS);
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const STATUS_BADGE = {
  confirmed: "bg-teal-100 text-teal-800",
  pending: "bg-amber-100 text-amber-800",
  checkin: "bg-sky-100 text-sky-800",
  checkout: "bg-slate-100 text-slate-600",
};

export default function BookingCalendar({ bookings, onDayClick, onBookingClick, onDragEnd }) {
  const today = new Date();
  const [current, setCurrent] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [activeProps, setActiveProps] = useState(new Set(ALL_PROPERTIES));

  const year = current.getFullYear();
  const month = current.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const toggleProp = (p) => {
    setActiveProps((prev) => {
      const next = new Set(prev);
      if (next.has(p)) { if (next.size > 1) next.delete(p); }
      else next.add(p);
      return next;
    });
  };

  const getBookingsForDay = (day) => {
    if (!day) return [];
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return bookings.filter((b) => {
      if (!activeProps.has(b.property)) return false;
      return b.checkIn <= dateStr && (b.checkOut > dateStr || b.checkIn === dateStr);
    });
  };

  const isToday = (day) =>
    day && today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;

  const handleDayClick = (day, e) => {
    if (!day) return;
    const date = new Date(year, month, day);
    onDayClick(date);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Property filter chips */}
      <div className="flex flex-wrap gap-2">
        {ALL_PROPERTIES.map((p) => {
          const colors = PROPERTY_COLORS[p];
          const active = activeProps.has(p);
          return (
            <button
              key={p}
              onClick={() => toggleProp(p)}
              className={cx(
                "flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition",
                active ? `${colors.light} border` : "border-slate-200 bg-white text-slate-400"
              )}
            >
              <span className={cx("h-2 w-2 rounded-full", active ? colors.dot : "bg-slate-300")} />
              {p}
            </button>
          );
        })}
      </div>

      {/* Calendar header */}
      <div className="flex items-center justify-between rounded-[22px] border border-slate-200 bg-white px-5 py-3 shadow-sm">
        <button
          onClick={() => setCurrent(new Date(year, month - 1, 1))}
          className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 transition"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="text-sm font-semibold text-slate-900">
          {current.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </div>
        <button
          onClick={() => setCurrent(new Date(year, month + 1, 1))}
          className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 transition"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-2">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-[11px] font-semibold uppercase tracking-widest text-slate-400 py-1">{d}</div>
        ))}
      </div>

      {/* Calendar grid */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-7 gap-2">
          {cells.map((day, idx) => {
            const dayBookings = getBookingsForDay(day);
            const dateStr = day ? `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}` : null;

            return (
              <Droppable key={idx} droppableId={dateStr || `empty-${idx}`} isDropDisabled={!day}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    onClick={(e) => handleDayClick(day, e)}
                    className={cx(
                      "min-h-[110px] rounded-[20px] border p-2 transition cursor-pointer group",
                      !day ? "border-transparent bg-transparent cursor-default" : snapshot.isDraggingOver
                        ? "border-teal-300 bg-teal-50"
                        : isToday(day)
                        ? "border-slate-900 bg-white shadow-md"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                    )}
                  >
                    {day && (
                      <>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className={cx(
                            "text-xs font-semibold leading-none",
                            isToday(day)
                              ? "flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white"
                              : "text-slate-600"
                          )}>
                            {day}
                          </span>
                          <span className="opacity-0 group-hover:opacity-100 transition">
                            <Plus className="h-3 w-3 text-slate-400" />
                          </span>
                        </div>

                        <div className="space-y-1">
                          {dayBookings.slice(0, 3).map((b, i) => {
                            const colors = PROPERTY_COLORS[b.property] || { light: "bg-slate-100 border-slate-200 text-slate-800" };
                            return (
                              <Draggable key={b.id} draggableId={b.id} index={i}>
                                {(drag, dragSnapshot) => (
                                  <motion.div
                                    ref={drag.innerRef}
                                    {...drag.draggableProps}
                                    {...drag.dragHandleProps}
                                    initial={false}
                                    className={cx(
                                      "rounded-xl border px-2 py-1 text-[10px] font-medium truncate cursor-grab active:cursor-grabbing transition",
                                      colors.light,
                                      dragSnapshot.isDragging && "shadow-lg ring-2 ring-slate-300 rotate-1 scale-105"
                                    )}
                                    onClick={(e) => { e.stopPropagation(); onBookingClick(b); }}
                                  >
                                    {b.guest || b.property}
                                  </motion.div>
                                )}
                              </Draggable>
                            );
                          })}
                          {dayBookings.length > 3 && (
                            <div className="text-[10px] font-medium text-slate-400 px-1">+{dayBookings.length - 3} more</div>
                          )}
                        </div>
                      </>
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
}

export { PROPERTY_COLORS, ALL_PROPERTIES };