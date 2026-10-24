import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
      <h2 className="text-2xl font-bold text-[var(--color-text)]">
        404 — الصفحة غير موجودة / Page Not Found
      </h2>
      <p className="mt-4 text-sm text-[var(--color-text-muted)]">
        الصفحة التي تبحث عنها غير متوفرة. / The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center justify-center rounded-lg bg-[var(--color-action)] px-4 py-2 text-xs font-bold text-[var(--color-page)] transition-colors hover:bg-[var(--color-action-hover)]"
      >
        الرئيسية / Home
      </Link>
    </div>
  );
}
