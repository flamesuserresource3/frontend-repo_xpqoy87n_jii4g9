export default function LegoBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-0"
      style={{
        backgroundColor: '#f7f7fb',
        backgroundImage:
          'radial-gradient(circle at 12px 12px, rgba(0,0,0,0.06) 2px, transparent 3px), radial-gradient(circle at 36px 36px, rgba(0,0,0,0.05) 2px, transparent 3px)',
        backgroundSize: '48px 48px',
      }}
    />
  );
}
