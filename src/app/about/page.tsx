import { redirect } from 'next/navigation'
import { detectLocale } from '@/lib/i18n-utils'

export default function AboutPage() {
  const locale = detectLocale()
  redirect(`/${locale}/about`)
}


