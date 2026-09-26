export default function StackSidebar({ stack, onRemove, onRemoveAll }) {
  const count = stack.length;

  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:sticky md:top-24">
      <h3 className="text-lg font-semibold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-sm text-slate-500">
        {count === 0 ? "No technologies selected yet." : `${count} Technology Selected`}
      </p>

      {count === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed border-slate-300 py-8 text-center text-sm text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-3">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2"
            >
              <img src={item.icon} alt="" className="h-8 w-8" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                <p className="text-xs text-slate-400">{item.category}</p>
              </div>
              <button
                type="button"
                aria-label={`Remove ${item.name}`}
                onClick={() => onRemove(item.id)}
                className="text-slate-400 hover:text-slate-600"
              >
                &#10005;
              </button>
            </div>
          ))}
        </div>
      )}

      {count > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-5 w-full rounded-lg border border-red-200 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50 transition-colors"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}
