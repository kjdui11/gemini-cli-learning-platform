import { redirect } from 'next/navigation'
import { detectLocale } from '@/lib/i18n-utils'

export default function TermsPage() {
  const locale = detectLocale()
  redirect(`/${locale}/terms`)
}
