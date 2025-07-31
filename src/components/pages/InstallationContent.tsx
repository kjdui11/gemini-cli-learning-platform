'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { type Locale } from '@/i18n/config'
import Link from 'next/link'
import {
  CommandLineIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  WrenchScrewdriverIcon,
  PlayIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline'

interface InstallationContentProps {
  locale?: Locale
}

export default function InstallationContent({ }: InstallationContentProps) {
  const { t } = useTranslation()

  const installationSteps = [
    {
      title: t('installation.steps.requirements.title'),
      description: t('installation.steps.requirements.description'),
      icon: CheckCircleIcon,
      content: [
        t('installation.steps.requirements.items.node'),
        t('installation.steps.requirements.items.npm'),
        t('installation.steps.requirements.items.git'),
        t('installation.steps.requirements.items.apiKey')
      ],
      command: 'node --version'
    },
    {
      title: t('installation.steps.install.title'),
      description: t('installation.steps.install.description'),
      icon: CommandLineIcon,
      content: [
        t('installation.steps.install.commands.npm'),
        t('installation.steps.install.commands.verify')
      ],
      command: 'npx @google/generative-ai-cli --version'
    },
    {
      title: t('installation.steps.config.title'),
      description: t('installation.steps.config.description'),
      icon: WrenchScrewdriverIcon,
      content: [
        t('installation.steps.config.items.apiKey'),
        t('installation.steps.config.items.settings'),
        t('installation.steps.config.items.verify')
      ],
      command: 'npx @google/generative-ai-cli auth'
    },
    {
      title: t('installation.steps.firstRun.title'),
      description: t('installation.steps.firstRun.description'),
      icon: PlayIcon,
      content: [
        t('installation.steps.firstRun.commands.help'),
        t('installation.steps.firstRun.commands.version'),
        t('installation.steps.firstRun.commands.test')
      ],
      command: 'npx @google/generative-ai-cli --help'
    }
  ]

  const platforms = [
    {
      name: t('installation.platforms.windows.name'),
      icon: ComputerDesktopIcon,
      requirements: [
        t('installation.platforms.windows.requirements.os'),
        t('installation.platforms.windows.requirements.shell'),
        t('installation.platforms.windows.requirements.node')
      ],
      notes: t('installation.platforms.windows.notes')
    },
    {
      name: t('installation.platforms.macos.name'),
      icon: DevicePhoneMobileIcon,
      requirements: [
        t('installation.platforms.macos.requirements.os'),
        t('installation.platforms.macos.requirements.terminal'),
        t('installation.platforms.macos.requirements.node')
      ],
      notes: t('installation.platforms.macos.notes')
    },
    {
      name: t('installation.platforms.linux.name'),
      icon: ComputerDesktopIcon,
      requirements: [
        t('installation.platforms.linux.requirements.distro'),
        t('installation.platforms.linux.requirements.shell'),
        t('installation.platforms.linux.requirements.node')
      ],
      notes: t('installation.platforms.linux.notes')
    }
  ]

  const troubleshooting = [
    {
      issue: t('installation.troubleshooting.nodeVersion.issue'),
      solution: t('installation.troubleshooting.nodeVersion.solution')
    },
    {
      issue: t('installation.troubleshooting.permissions.issue'),
      solution: t('installation.troubleshooting.permissions.solution')
    },
    {
      issue: t('installation.troubleshooting.apiKey.issue'),
      solution: t('installation.troubleshooting.apiKey.solution')
    },
    {
      issue: t('installation.troubleshooting.network.issue'),
      solution: t('installation.troubleshooting.network.solution')
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t('installation.hero.title')}
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              {t('installation.hero.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Platform Requirements */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('installation.requirements.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('installation.requirements.description')}
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-6xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {platforms.map((platform) => (
                <div key={platform.name} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <platform.icon className="h-8 w-8 text-blue-600" />
                    <h3 className="ml-3 text-xl font-semibold text-gray-900">
                      {platform.name}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {platform.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-blue-600 font-medium">
                    💡 {platform.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Installation Steps */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('installation.steps.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('installation.steps.description')}
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="space-y-8">
              {installationSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <div className="flex items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>

                      <div className="space-y-2 mb-4">
                        {step.content.map((stepItem, stepIndex) => (
                          <div key={stepIndex} className="flex items-start text-sm text-gray-700">
                            <span className="inline-flex w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-medium items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              {stepIndex + 1}
                            </span>
                            {stepItem}
                          </div>
                        ))}
                      </div>

                      <div className="rounded-lg bg-gray-900 px-4 py-3">
                        <code className="text-sm text-green-400 font-mono">
                          $ {step.command}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div id="troubleshooting" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('installation.troubleshooting.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('installation.troubleshooting.description')}
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="space-y-6">
              {troubleshooting.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-start">
                    <ExclamationTriangleIcon className="h-6 w-6 text-amber-500 mt-1 mr-4 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.issue}
                      </h3>
                      <p className="text-gray-700 mb-3">{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('installation.nextSteps.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('installation.nextSteps.description')}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/guides"
                className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                {t('installation.nextSteps.guides')}
              </Link>
              <Link
                href="/commands"
                className="rounded-lg border border-blue-600 px-6 py-3 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {t('installation.nextSteps.commands')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
