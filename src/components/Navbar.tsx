'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { usePathname } from 'next/navigation'
import { useLiveStream } from '@/contexts/LiveStreamContext'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const locale = useLocale()
  const pathname = usePathname()
  const t = useTranslations('navigation')
  const tCommon = useTranslations('common')
  const { openLiveStream } = useLiveStream()

  const logoSrc = locale === 'fr' ? '/logo_fr.jpeg' : '/logo_en.jpeg'

  const isActive = (path: string) => {
    if (path === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`
    }
    return pathname.startsWith(path)
  }

  const getActiveClasses = (path: string, isMobile = false) => {
    const baseClasses = isMobile 
      ? "block px-3 py-2 text-base font-medium transition-colors"
      : "px-3 py-2 text-[12px] font-medium transition-colors"
    
    const activeClasses = "text-secondary bg-secondary/10 rounded-lg"
    const inactiveClasses = isMobile 
      ? "text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
      : "text-gray-900 hover:text-yellow-600"
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`
  }

  const handleMobileLinkClick = () => {
    openLiveStream()
  }

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="relative top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="lg:max-w-[1550] mx-auto  sm:px-6 lg:px-8">
        <div className="flex justify-between h-auto bg-white/95 backdrop-blur-sm rounded-lg px-6 py-4">
          <div className="flex items-center">
            <Link href={`/${locale}`} className="flex items-center">
              <div className="flex items-center space-x-3">
                <Image 
                  src={logoSrc} 
                  alt={tCommon('logoAlt')} 
                  width={100} 
                  height={100}
                  className="rounded-full object-cover min-w-30 min-h-30 w-30 h-30 lg:min-w-48 lg:min-h-48 lg:w-40 lg:h-40 xl:w-48 xl:h-48 xl:min-w-48 xl:min-h-48"
                  priority
                />
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center">
            <Link href={`/${locale}`} className={getActiveClasses(`/${locale}`)}>
              {t('home')} 
            </Link>
            <Link href={`/${locale}/president-speech`} className={getActiveClasses(`/${locale}/president-speech`)}>
              {t('presidentSpeech')}
            </Link>
            <Link href={`/${locale}/about`} className={getActiveClasses(`/${locale}/about`)}>
              {t('holyFather')}
            </Link>
            <Link href={`/${locale}/services`} className={getActiveClasses(`/${locale}/services`)}>
              {t('popeSchedule')}
            </Link>
            <Link href={`/${locale}/press-kit`} className={getActiveClasses(`/${locale}/press-kit`)}>
              {t('pressKit')}
            </Link>
          
            <Link href={`/${locale}/news`} className={getActiveClasses(`/${locale}/news`)}>
              {t('news')}
            </Link>
            <Link href={`/${locale}/resources`} className={getActiveClasses(`/${locale}/resources`)}>
              {t('resources')}
            </Link>
            <Link href={`/${locale}/accreditations`} className={getActiveClasses(`/${locale}/accreditations`)}>
              {t('accreditations')}
            </Link>
              <Link href={`/${locale}/contact`} className={getActiveClasses(`/${locale}/contact`)}>
              {t('contact')}
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={handleMobileLinkClick} className="bg-red-600 hover:bg-red-700 hover:cursor-pointer text-white px-2 lg:px-4 py-3 rounded-lg font-semibold text-sm transition-colors duration-300 flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span>{t('watchLive')}</span>
            </button>
           <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-yellow-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <div className="ml-2 hidden lg:block">
            <LanguageSwitcher />
          </div>

          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t transform transition-all duration-300 ease-in-out"
               style={{
                 transform: isMenuOpen ? 'translateX(0%)' : 'translateX(-100%)'
               }}>
            <Link href={`/${locale}`} className={getActiveClasses(`/${locale}`, true)} onClick={handleNavClick}>
              {t('home')}
            </Link>
            <Link href={`/${locale}/president-speech`} className={getActiveClasses(`/${locale}/president-speech`, true)} onClick={handleNavClick}>
              {t('presidentSpeech')}
            </Link>
            <Link href={`/${locale}/about`} className={getActiveClasses(`/${locale}/about`, true)} onClick={handleNavClick}>
              {t('holyFather')}
            </Link>
            <Link href={`/${locale}/services`} className={getActiveClasses(`/${locale}/services`, true)} onClick={handleNavClick}>
              {t('popeSchedule')}
            </Link>
            <Link href={`/${locale}/press-kit`} className={getActiveClasses(`/${locale}/press-kit`, true)} onClick={handleNavClick}>
              {t('pressKit')}
            </Link>
            <Link href={`/${locale}/news`} className={getActiveClasses(`/${locale}/news`, true)} onClick={handleNavClick}>
              {t('news')}
            </Link>
            <Link href={`/${locale}/resources`} className={getActiveClasses(`/${locale}/resources`, true)} onClick={handleNavClick}>
              {t('resources')}
            </Link>
            <Link href={`/${locale}/accreditations`} className={getActiveClasses(`/${locale}/accreditations`, true)} onClick={handleNavClick}>
              {t('accreditations')}
            </Link>
            <Link href={`/${locale}/contact`} className={getActiveClasses(`/${locale}/contact`, true)} onClick={handleNavClick}>
              {t('contact')}
            </Link>
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
