import { Metadata } from 'next'
import InstallationContent from '@/components/pages/InstallationContent'
import { generateLocalizedMetadata } from '@/lib/seo-i18n'
import { pageMetadata } from '@/lib/seo-i18n'

export const metadata: Metadata = generateLocalizedMetadata(
  'en',
  pageMetadata.installation.en.title,
  pageMetadata.installation.en.description,
  pageMetadata.installation.en.keywords
)

export default function InstallationPage() {
  return <InstallationContent locale="en" />
}