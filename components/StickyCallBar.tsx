// StickyCallBar component
'use client';

export default function StickyCallBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden">
      <div className="mx-auto max-w-screen-sm px-3 pb-3">
        <a
          href="tel:+19049011457"
          className="block text-center rounded-md bg-green-700 py-3 text-white shadow-lg hover:bg-green-800"
        >
          Call (904) 901 1457
        </a>
      </div>
    </div>
  );
}
