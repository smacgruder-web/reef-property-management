import { useState, useRef } from "react";
import { FileText, Download, Upload, Trash2, Eye, ShieldCheck, File } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cx } from "../shared/GlassCard";

const INITIAL_DOCS = [
  { id: "d1", name: "Lease Agreement – Villa 2", type: "lease", date: "2026-01-01", size: "1.2 MB", category: "Lease" },
  { id: "d2", name: "Lease Agreement – Villa 4", type: "lease", date: "2026-02-15", size: "1.1 MB", category: "Lease" },
  { id: "d3", name: "Property Insurance – Maya Reef", type: "insurance", date: "2025-12-10", size: "890 KB", category: "Insurance" },
  { id: "d4", name: "HOA Rules & Bylaws", type: "legal", date: "2025-06-01", size: "540 KB", category: "Legal" },
  { id: "d5", name: "Maintenance Invoice – AC repair", type: "invoice", date: "2026-04-08", size: "210 KB", category: "Invoice" },
  { id: "d6", name: "Owner Payout Statement – Mar 2026", type: "statement", date: "2026-03-31", size: "320 KB", category: "Statement" },
];

const CATEGORY_COLORS = {
  Lease: "bg-teal-50 border-teal-200 text-teal-800",
  Insurance: "bg-sky-50 border-sky-200 text-sky-800",
  Legal: "bg-violet-50 border-violet-200 text-violet-800",
  Invoice: "bg-amber-50 border-amber-200 text-amber-800",
  Statement: "bg-emerald-50 border-emerald-200 text-emerald-800",
};

const categories = ["All", "Lease", "Insurance", "Legal", "Invoice", "Statement"];

export default function DocumentsVault() {
  const [docs, setDocs] = useState(INITIAL_DOCS);
  const [filter, setFilter] = useState("All");
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef();

  const filtered = filter === "All" ? docs : docs.filter((d) => d.category === filter);

  const addFiles = (files) => {
    const newDocs = Array.from(files).map((f) => ({
      id: `d${Date.now()}-${Math.random()}`,
      name: f.name.replace(/\.[^.]+$/, ""),
      type: "uploaded",
      date: new Date().toISOString().slice(0, 10),
      size: f.size > 1048576 ? `${(f.size / 1048576).toFixed(1)} MB` : `${Math.round(f.size / 1024)} KB`,
      category: "Statement",
    }));
    setDocs((prev) => [...prev, ...newDocs]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    addFiles(e.dataTransfer.files);
  };

  const handleDelete = (id) => setDocs((prev) => prev.filter((d) => d.id !== id));

  return (
    <div className="space-y-4">
      {/* Upload zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={cx(
          "flex cursor-pointer flex-col items-center justify-center rounded-[24px] border-2 border-dashed py-8 px-4 text-center transition",
          dragging ? "border-teal-400 bg-teal-50" : "border-slate-300 bg-slate-50 hover:border-slate-400 hover:bg-white"
        )}
      >
        <Upload className={cx("h-8 w-8 mb-2", dragging ? "text-teal-500" : "text-slate-400")} />
        <div className="text-sm font-semibold text-slate-700">Drop files here or click to upload</div>
        <div className="mt-1 text-xs text-slate-500">PDF, DOCX, PNG — up to 20 MB each</div>
        <input
          ref={inputRef}
          type="file"
          multiple
          className="hidden"
          onChange={(e) => addFiles(e.target.files)}
        />
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={cx(
              "rounded-full px-3 py-1.5 text-xs font-medium transition",
              filter === c ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Document list */}
      <div className="space-y-2">
        {filtered.map((doc) => (
          <div key={doc.id} className="flex items-center gap-3 rounded-[20px] border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <div className="rounded-xl bg-slate-100 p-2 flex-shrink-0">
              <FileText className="h-4 w-4 text-slate-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-slate-900 truncate">{doc.name}</div>
              <div className="text-xs text-slate-500">{doc.date} · {doc.size}</div>
            </div>
            <span className={cx("hidden sm:block rounded-full border px-2.5 py-0.5 text-[10px] font-medium", CATEGORY_COLORS[doc.category] || "bg-slate-100 text-slate-600 border-slate-200")}>
              {doc.category}
            </span>
            <div className="flex items-center gap-1 flex-shrink-0">
              <button className="rounded-xl p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition">
                <Eye className="h-3.5 w-3.5" />
              </button>
              <button className="rounded-xl p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition">
                <Download className="h-3.5 w-3.5" />
              </button>
              <button onClick={() => handleDelete(doc.id)} className="rounded-xl p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-500 transition">
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="rounded-[20px] bg-slate-50 py-8 text-center text-sm text-slate-400">No documents in this category</div>
        )}
      </div>
    </div>
  );
}