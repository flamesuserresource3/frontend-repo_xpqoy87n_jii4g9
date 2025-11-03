export default function Section({ id, emoji, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-sm bg-yellow-400 border border-yellow-500 shadow-inner grid place-items-center text-lg">
            <span>{emoji}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">{title}</h2>
        </div>
        <div className="grid gap-6">
          {children}
        </div>
      </div>
    </section>
  );
}
