import type { Locale } from '@/config/locales';

interface SkipLinkProps {
  locale: Locale;
}

export function SkipLink({ locale }: SkipLinkProps) {
  const label = locale === 'ar' ? 'الانتقال إلى المحتوى الرئيسي' : 'Skip to main content';

  return (
    <a href="#main-content" className="skip-link">
      {label}
    </a>
  );
}
