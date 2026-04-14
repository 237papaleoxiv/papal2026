import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ArrowLeft, User, MapPin, Quote } from 'lucide-react';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function CWAMothersHope({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ArticleContent locale={locale} />;
}

function ArticleContent({ locale }: { locale: string }) {
  const t = useTranslations('newsUpdates.cwaArticle');
  const commonT = useTranslations('newsUpdates');

  const sections = [
    { title: t('sections.0.title'), items: [t('sections.0.items.0'), t('sections.0.items.1'), t('sections.0.items.2')] },
    { title: t('sections.1.title'), items: [t('sections.1.items.0'), t('sections.1.items.1'), t('sections.1.items.2')] },
    { title: t('sections.2.title'), items: [t('sections.2.items.0'), t('sections.2.items.1'), t('sections.2.items.2')] },
    { title: t('sections.3.title'), items: [t('sections.3.items.0'), t('sections.3.items.1')] },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Link 
          href={`/${locale}/news`}
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8 group"
        >
          <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          {commonT('backToNews')}
        </Link>

        <article className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header Image Section */}
          <div className="relative h-[400px] w-full">
            <Image
              src="/cwa_mothers_group.jpg"
              alt={t('title')}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <h1 className="text-3xl md:text-5xl font-bold text-white font-crimson-text leading-tight mb-6">
                {t('title')}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-gray-200">
                <div className="flex items-center">
                  <User className="mr-2 h-5 w-5 text-secondary" />
                  <span className="font-medium">{t('subtitle')}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-secondary" />
                  <span>{t('location')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 lg:p-16">
            {/* Intro Quote */}
            <div className="relative mb-12">
              <Quote className="absolute -top-6 -left-6 h-12 w-12 text-secondary/20 -z-0" />
              <p className="text-xl md:text-2xl text-gray-700 italic font-medium leading-relaxed relative z-10">
                {t('intro')}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-8 leading-loose">
              <p>{t('content')}</p>

              {sections.map((section, idx) => (
                <div key={idx} className="bg-gray-50 rounded-2xl p-8 border-l-4 border-secondary">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 font-crimson-text">
                    {section.title}
                  </h2>
                  <ul className="space-y-4 list-none p-0 m-0">
                    {section.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start">
                        <span className="h-2 w-2 rounded-full bg-primary mt-3 mr-4 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <p className="border-t pt-8 text-gray-700 italic">
                {t('conclusion')}
              </p>
            </div>

            {/* Author Bio */}
            <div className="mt-16 pt-8 border-t border-gray-100 italic">
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{t('author.name')}</h3>
                  <div className="text-sm text-gray-500 space-y-0.5">
                    <p>{t('author.branch')} • {t('author.zone')}</p>
                    <p>{t('author.division')} • {t('author.diocese')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
