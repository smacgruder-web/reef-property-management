import Panel from "./Panel";

const phases = [
  ["MVP release", ["Portfolio + unit directory", "Rent and guest payments", "Maintenance ticketing", "Owner statements", "Resident and guest mobile basics"]],
  ["Phase 2", ["HOA board workflows", "Compliance dashboard", "Scheduled reporting", "Caretaker enhancements", "Channel integrations"]],
  ["Expansion", ["Country tax profiles", "Multi-entity reporting", "Regional owner portal", "Operator dashboard", "Caribbean rollout"]],
];

export default function BuildRoadmap() {
  return (
    <div className="mt-8 grid gap-6 xl:grid-cols-3">
      {phases.map(([title, list]) => (
        <Panel key={title} title={title} subtitle="Delivery path">
          <div className="space-y-2 text-sm text-slate-700">
            {list.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">{item}</div>
            ))}
          </div>
        </Panel>
      ))}
    </div>
  );
}