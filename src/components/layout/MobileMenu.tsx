'use client';

import { useState, useEffect, useRef } from 'react';
import type { KeyboardEvent as ReactKeyboardEvent } from 'react';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import type { Locale } from '@/config/locales';
import { getAlternateLocale, getLocalePath } from '@/config/locales';
import { getNavAnchors } from '@/config/navigation';
import { siteContent } from '@/content/site';
import { WhatsAppLink } from '@/components/ui/WhatsAppLink';

interface MobileMenuProps {
  locale: Locale;
}

export function MobileMenu({ locale }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const anchors = getNavAnchors(locale);
  const alternateLocale = getAlternateLocale(locale);
  const switchLabel = locale === 'ar' ? 'English (EN)' : 'العربية (AR)';
  const switchHref = getLocalePath(alternateLocale);

  // Keep keyboard focus inside the modal drawer and restore it to the trigger.
  useEffect(() => {
    if (!isOpen) return;

    const menuButton = menuButtonRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusFrame = window.requestAnimationFrame(() => {
      dialogRef.current
        ?.querySelector<HTMLElement>('a[href], button:not([disabled])')
        ?.focus();
    });

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      menuButton?.focus();
    };
  }, [isOpen]);

  const handleDialogKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
      return;
    }
    if (event.key !== 'Tab') return;

    const focusable = event.currentTarget.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    const first = focusable.item(0);
    const last = focusable.item(focusable.length - 1);
    if (!first || !last) {
      event.preventDefault();
      return;
    }

    const focusIsInside = event.currentTarget.contains(document.activeElement);
    if (event.shiftKey && (!focusIsInside || document.activeElement === first)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (!focusIsInside || document.activeElement === last)) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div className="md:hidden">
      <button
        ref={menuButtonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={
          isOpen
            ? locale === 'ar'
              ? 'إغلاق القائمة'
              : 'Close menu'
            : locale === 'ar'
              ? 'فتح القائمة'
              : 'Open menu'
        }
        className="inline-flex items-center justify-center rounded-lg border border-[var(--color-surface-muted)] p-2 text-[var(--color-text)] transition-colors hover:border-[var(--color-action)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-action)]"
      >
        {isOpen ? <X className="h-5 w-5 text-[var(--color-action)]" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Drawer Overlay */}
      {isOpen && typeof document !== 'undefined' && createPortal(
        <div
          ref={dialogRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label={locale === 'ar' ? 'قائمة الموقع' : 'Site navigation'}
          onKeyDown={handleDialogKeyDown}
          className="fixed inset-x-0 top-[4.5rem] bottom-0 z-[60] flex flex-col justify-between overflow-y-auto border-t border-[var(--color-surface-muted)] bg-[var(--color-page)]/98 px-6 py-8 backdrop-blur-2xl md:hidden"
        >
          <nav className="flex flex-col space-y-4 text-start">
            {anchors.map((anchor) => (
              <a
                key={anchor.id}
                href={anchor.hash}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-3 border-b border-[var(--color-surface-muted)]/50 text-lg font-semibold text-[var(--color-text)] transition-colors hover:text-[var(--color-action)]"
              >
                <span>{anchor.localizedLabel}</span>
                <ArrowUpRight className="h-4 w-4 text-[var(--color-text-muted)] rtl:rotate-[-90deg]" />
              </a>
            ))}
          </nav>

          <div className="mt-8 flex flex-col space-y-4 pt-6 border-t border-[var(--color-surface-muted)]">
            {/* Language Switch in Mobile Menu */}
            <Link
              href={switchHref}
              hrefLang={alternateLocale}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-xl border border-[var(--color-surface-muted)] bg-[var(--color-surface)] px-4 py-3 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-action)]"
            >
              <span>{locale === 'ar' ? 'تغيير اللغة' : 'Switch Language'}</span>
              <span className="font-condensed font-bold text-[var(--color-action)]">
                {switchLabel}
              </span>
            </Link>

            {/* Direct WhatsApp Consultation CTA */}
            <WhatsAppLink
              locale={locale}
              context="hero"
              className="flex items-center justify-center rounded-xl bg-[var(--color-action)] px-5 py-3.5 text-sm font-bold text-[var(--color-page)] shadow-lg shadow-[var(--color-action)]/15 transition-all"
            >
              {siteContent.header.ctaLabel[locale]}
            </WhatsAppLink>
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
}
