import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import { locales, isValidLocale, type Locale } from '@/i18n/config';
import { generateLocalizedMetadata } from '@/lib/seo-i18n';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  // Generate params for all non-default locales
  // Exclude special files that shouldn't be treated as locales
  const nonDefaultLocales = locales.filter(locale =>
    locale !== 'en' &&
    !locale.includes('.') &&
    !['manifest', 'robots', 'sitemap'].includes(locale)
  );
  return nonDefaultLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  
  if (!isValidLocale(locale)) {
    return {};
  }

  return generateLocalizedMetadata(locale as Locale);
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  // Skip processing for special files that shouldn't be treated as locales
  if (locale.includes('.') || ['manifest', 'robots', 'sitemap'].includes(locale)) {
    notFound();
  }

  // Validate locale
  if (!isValidLocale(locale)) {
    notFound();
  }

  // For locale routes, we just return the children without wrapping in html/body
  // The main layout.tsx handles the HTML structure
  return <>{children}</>;
}
