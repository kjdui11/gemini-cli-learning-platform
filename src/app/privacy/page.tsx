import { redirect } from 'next/navigation'
import { detectLocale } from '@/lib/i18n-utils'

export default function PrivacyPage() {
  const locale = detectLocale()
  redirect(`/${locale}/privacy`)
}
