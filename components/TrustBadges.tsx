// TrustBadges component
export default function TrustBadges() {
  const items = [
    { label: 'Licensed & Insured' },
    { label: '37+ Years Experience' },
    { label: 'Locally Owned' },
  ];
  return (
    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-700">
      {items.map((it) => (
        <div key={it.label} className="rounded-md border p-3 text-center">
          {it.label}
        </div>
      ))}
    </div>
  );
}
