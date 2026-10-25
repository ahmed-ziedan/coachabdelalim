'use client';

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import type { Locale } from '@/config/locales';
import { WhatsAppLink } from '@/components/ui/WhatsAppLink';

interface FloatingWhatsAppButtonProps {
  locale: Locale;
}

export function FloatingWhatsAppButton({ locale }: FloatingWhatsAppButtonProps) {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById('contact');
    if (!footer || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  if (footerVisible) return null;

  return (
    <WhatsAppLink
      locale={locale}
      context="footer"
      aria-label={locale === 'ar' ? 'تواصل معي على واتساب' : 'Contact me on WhatsApp'}
      className="fixed bottom-5 left-4 z-30 inline-flex h-11 items-center gap-2 rounded-full bg-[var(--color-action)] px-4 text-xs font-bold text-[var(--color-page)] shadow-lg shadow-black/30 transition-transform hover:-translate-y-0.5 hover:bg-[var(--color-action-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-action)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page)] sm:left-6"
    >
      <MessageCircle aria-hidden="true" className="h-4 w-4" />
      <span>{locale === 'ar' ? 'تواصل' : 'Chat'}</span>
    </WhatsAppLink>
  );
}
