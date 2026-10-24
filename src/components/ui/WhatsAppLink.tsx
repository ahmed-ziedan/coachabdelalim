import type { Locale } from '@/config/locales';
import type { WhatsAppContext } from '@/content/site';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export interface WhatsAppLinkProps {
  locale: Locale;
  context: WhatsAppContext;
  className?: string;
  children: React.ReactNode;
  'aria-label'?: string;
}

export function WhatsAppLink({
  locale,
  context,
  className = '',
  children,
  'aria-label': ariaLabel,
}: WhatsAppLinkProps) {
  const href = buildWhatsAppUrl(locale, context);

  if (!href) {
    // In development / preview when WhatsApp number is not configured:
    // Render an accessible button-styled indicator that alerts developers/reviewers.
    return (
      <span
        role="button"
        aria-disabled="true"
        tabIndex={0}
        title={
          locale === 'ar'
            ? 'رقم واتساب غير معين بعد (Phase 0)'
            : 'WhatsApp number not configured yet (Phase 0)'
        }
        className={`${className} cursor-not-allowed opacity-80`}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
