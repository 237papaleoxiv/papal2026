import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLocale, useTranslations } from 'next-intl'

export default function Footer() {
  const locale = useLocale()
  const t = useTranslations('footer')
  const logoSrc = locale === 'fr' ? '/logo_fr.jpeg' : '/logo_en.jpeg'
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Card className="bg-transparent border-none shadow-none">
              <CardHeader className="p-0">
                <div className="flex items-center">
                  <Image 
                    src={logoSrc} 
                    alt={t('logoAlt')} 
                    width={100} 
                    height={100}
                    className="rounded-full object-cover w-30 h-30 lg:w-40 lg:h-40 xl:w-48 xl:h-48"
                  />
                </div>
              </CardHeader>
            </Card>
          </div>

          <Card className="bg-transparent border-none shadow-none">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="font-sans text-lg font-semibold text-white">{t('quickLinks')}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-2">
                <li>
                  <Link href={`/${locale}/about`} className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
                    {t('about')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/services`} className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
                    {t('popesSchedule')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/news`} className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
                    {t('news')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/resources`} className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
                    {t('resources')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/accreditations`} className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
                    {t('accreditations')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/contact`} className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
                    {t('contact')}
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>


          <Card className="bg-transparent border-none shadow-none">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="font-sans text-lg font-semibold text-white">{t('recommendedWebsites')}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="https://www.vatican.va" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    {t('websites.vatican')}
                  </a>
                </li>
                <li>
                  <a href="https://www.aciafrica.org" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    {t('websites.aciAfrica')}
                  </a>
                </li>
                <li>
                  <a href="https://ewtnafrica.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    {t('websites.ewtnAfrica')}
                  </a>
                </li>
                <li>
                  <a href="https://ewtnasiapacific.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    {t('websites.ewtnAsiaPacific')}
                  </a>
                </li>
                <li>
                  <a href="https://ewtnafrique.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    {t('websites.ewtnAfrique')}
                  </a>
                </li>
                <li>
                  <a href="https://www.catholicnewsagency.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    {t('websites.catholicNewsAgency')}
                  </a>
                </li>
                <li>
                  <a href="https://www.vatican237.org" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    {t('websites.vatican237')}
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-none shadow-none">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="font-sans text-lg font-semibold text-white">{t('followUs')}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    {t('social.facebook')}
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    {t('social.twitter')}
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    {t('social.instagram')}
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    {t('social.youtube')}
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex justify-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} {t('copyright')}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
