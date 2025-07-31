import { redirect } from 'next/navigation'
import { detectLocale } from '@/lib/i18n-utils'

export default function GuidesAdvancedPage() {
  const locale = detectLocale()
  redirect(`/${locale}/guides/advanced`)
}
