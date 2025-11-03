export default function ProjectCard({ title, description, tags = [], color = 'red' }) {
  const colorMap = {
    red: 'bg-red-500 border-red-600 shadow-red-700',
    blue: 'bg-blue-500 border-blue-600 shadow-blue-700',
    green: 'bg-green-500 border-green-600 shadow-green-700',
    yellow: 'bg-yellow-400 border-yellow-500 shadow-yellow-600',
  };

  return (
    <div className="relative rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur p-5">
      <div className="absolute -top-3 left-4 flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-sm border shadow-inner ${colorMap[color] || colorMap.red}`}
          />
        ))}
      </div>
      <div className="mt-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">{description}</p>
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
