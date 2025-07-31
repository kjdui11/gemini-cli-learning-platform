import { redirect } from 'next/navigation'
import { detectLocale } from '@/lib/i18n-utils'

export default function ContactPage() {
  const locale = detectLocale()
  redirect(`/${locale}/contact`)
}
