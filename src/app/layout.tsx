import './globals.css';

/**
 * Root layout — a minimal shell that wraps all locale layouts.
 * The `lang` and `dir` attributes are set by the [locale] layout,
 * NOT here. This layout provides only the global CSS import.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
