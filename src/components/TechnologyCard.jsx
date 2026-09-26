const BADGE_COLORS = {
  Popular: "bg-pink-50 text-pink-600",
  Versatile: "bg-emerald-50 text-emerald-600",
  Fast: "bg-orange-50 text-orange-600",
  Standard: "bg-blue-50 text-blue-600",
  "Top SQL": "bg-sky-50 text-sky-600",
  Cache: "bg-red-50 text-red-600",
  Ubiquitous: "bg-amber-50 text-amber-600",
  Essential: "bg-blue-50 text-blue-600",
  Robust: "bg-orange-50 text-orange-600",
  Modern: "bg-sky-50 text-sky-600",
  Containers: "bg-cyan-50 text-cyan-600",
};

export default function TechnologyCard({ technology, isAdded, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } = technology;
  const badgeClass = BADGE_COLORS[badge] || "bg-slate-100 text-slate-600";

  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <img
          src={icon}
          alt={`${name} logo`}
          className="h-9 w-9"
          onError={(e) => {
            e.currentTarget.style.visibility = "hidden";
          }}
        />
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${badgeClass}`}>
          {badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-slate-900">{name}</h3>
      <p className="mt-1 flex-1 text-sm text-slate-600">{description}</p>

      <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
        <span className="rounded-md bg-slate-100 px-2 py-1 font-medium">{category}</span>
        <span className="rounded-md bg-slate-100 px-2 py-1 font-medium">{difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-medium text-slate-700">
          <span className="text-amber-400">&#9733;</span>
          {rating}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={
          isAdded
            ? "mt-5 w-full cursor-not-allowed rounded-lg bg-slate-100 py-2.5 text-sm font-semibold text-slate-400"
            : "mt-5 w-full rounded-lg bg-slate-900 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
        }
      >
        {isAdded ? "\u2713 Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
