import { redirect } from 'next/navigation'
import { detectLocale } from '@/lib/i18n-utils'

export default function GuidesExamplesPage() {
  const locale = detectLocale()
  redirect(`/${locale}/guides/examples`)
}
