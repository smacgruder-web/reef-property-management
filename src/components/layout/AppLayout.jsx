import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import BuildRoadmap from "../shared/BuildRoadmap";

export default function AppLayout() {
  const [role, setRole] = useState("manager");

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.16),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#eef4ff_100%)] text-slate-900">
      <div className="mx-auto max-w-[1600px] px-4 py-8 md:px-6 lg:px-8">
        <Header role={role} setRole={setRole} />
        <div className="grid gap-6 xl:grid-cols-[300px_1fr]">
          <Sidebar />
          <div>
            <Outlet context={{ role }} />
            <BuildRoadmap />
          </div>
        </div>
      </div>
    </div>
  );
}
