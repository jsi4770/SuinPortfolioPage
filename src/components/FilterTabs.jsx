'use client';

export default function FilterTabs({ options, active, onChange }) {
  return (
    <div role="tablist" className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = option.value === active;
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.value)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors border active:scale-95 ${
              isActive
                ? 'bg-accent-500 border-accent-500 text-white'
                : 'bg-white border-hairline text-ink-700 hover:border-accent-400 hover:text-accent-500'
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
