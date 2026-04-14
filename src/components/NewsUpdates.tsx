'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function NewsUpdates() {
  const t = useTranslations('newsUpdates')
  const locale = useLocale()

  const newsCards = [
    {
      id: 0,
      title: "A CWA (Catholic Women's Association) Mother’s Hope for the upcoming Apostolic Visit",
      description: "As the rhythmic chanting of the CWA fills our parishes and our blue-and-white uniforms are pressed in readiness, we find ourselves at a historic threshold. For us, the \"Mothers of the Church,\" the upcoming visit of His Holiness is more than a diplomatic event; it is a spiritual homecoming.",
      image: "/cwa_mother.png",
      link: `/${locale}/news/cwa-mothers-hope`,
      isInternal: true
    },
    {
      id: 1,
      title: " Vatican Announces Pope Leo XIV&apos;s 11-Day Pastoral Visit to Four African Countries in April",
      description: "The Vatican has announced that Pope Leo XIV will make his first pastoral visit to Africa from April 13–23. The 11-day Apostolic Journey will include Algeria, Cameroon, Angola, and Equatorial Guinea. He will visit Algiers and Annaba (Apr 13–15), Yaoundé, Bamenda, and Douala (Apr 15–18), Luanda, Muxima, and Saurimo (Apr 18–21), and Malabo, Mongomo, and Bata (Apr 21–23).",
      image: "https://www.aciafrica.org/images/aci-africa-photo-edit-2026-02-25t113139_1772015854.jpg",
      link: "https://www.aciafrica.org/news/20607/cameroon-unveils-logo-motto-and-prayer-ahead-of-pope-leo-xivs-planned-visit"
    },
    {
      id: 2,
      title: "Cameroon Unveils Logo, Motto and Prayer ahead of Pope Leo XIV’s Planned Visit",
      description: "Members of the National Episcopal Conference of Cameroon (NECC) have unveiled the logo, motto, and prayer campaign ahead of Pope Leo XIV’s April 15-18 Apostolic visit.",
      image: "https://www.aciafrica.org/images/aci-africa-photo-edit-2026-03-12t082354_1773300874.jpg",
      link: "https://www.aciafrica.org/news/20607/cameroon-unveils-logo-motto-and-prayer-ahead-of-pope-leo-xivs-planned-visit"
    },
    {
      id: 3,
      title: "Planned Papal Visit to Cameroon Call to “peace, youth renewal, reconciliation”: Douala Catholic Archbishop",
      description: "Archbishop Samuel Kleda of the Catholic Archdiocese of Douala in Cameroon has described the April 15–18 planned Papal visit to the Central African nation as a providential moment for the people of God in the country to foster peace and reconciliation amid protracted armed conflict in sections of the country, widespread unemployment, and social uncertainty.",
      image: "https://www.aciafrica.org/images/aci-africa-photo-edit-2026-03-05t233345_1772750181.jpg",
      link: "https://www.aciafrica.org/news/20503/planned-papal-visit-to-cameroon-call-to-peace-youth-renewal-reconciliation-douala-catholic-archbishop"
    },
    {
      id: 4,
      title: "Pope Leo XIV’s Planned Visit to Cameroon “a powerful sign of the closeness of universal Church”: Catholic Bishops",
      description: "Members of the National Episcopal Conference of Cameroon (NECC) have described Pope Leo XIV’s planned Apostolic visit to the Central African nation as an expression of the universal Church’s solidarity and connection with the country and the African continent.",
      image: "https://www.aciafrica.org/images/aci-africa-photo-edit-2026-02-26t084905_1772092753.jpg",
      link: "https://www.aciafrica.org/news/20383/pope-leo-xivs-planned-visit-to-cameroon-a-powerful-sign-of-the-closeness-of-universal-church-catholic-bishops"
    },
    {
      id: 5,
      title: "From Minority to Majority: 7 Key Things to Know About Catholic Church in Cameroon Ahead of Papal April 15–18 Visit",
      description: "After concluding the first leg of his African Apostolic Journey in Algeria, Pope Leo XIV is scheduled to travel to Cameroon from April 15 to 18. In the Central African nation, the Holy Father is set to visit the capital, Yaoundé, and the Metropolitan Sees of Bamenda and Douala.",
      image: "https://www.aciafrica.org/images/aci-africa-photo-edit-2026-02-26t083403_1772095106.jpg",
      link: "https://www.aciafrica.org/news/20395/from-minority-to-majority-7-key-things-to-know-about-catholic-church-in-cameroon-ahead-of-papal-april-15-18-visit"
    },
    {
      id: 6,
      title: "“Messenger of peace”: Catholics in Cameroon Welcome Pope Leo XIV’s Planned Apostolic Visit",
      description: "Catholics in Cameroon, including the Nunciature, Bishops and the Laity have expressed joy and hope ahead of the upcoming visit of Pope Leo XIV to the Central African countty, describing the papal journey as a moment of blessing, reconciliation, unity, and renewal for the nation.",
      image: "https://www.aciafrica.org/images/aci-africa-photo-edit-2026-02-26t085200_1772093348.jpg",
      link: "https://www.aciafrica.org/news/20391/messenger-of-peace-catholics-in-cameroon-welcome-pope-leo-xivs-planned-apostolic-visit"
    }
  ]

  const handleLink = (link: string, isInternal?: boolean) => {
    if (isInternal) {
      window.location.href = link
    } else {
      window.open(link, '_blank')
    }
  }

  return (
    <div className="min-h-screen bg-[#eff2f8] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-crimson-text mb-6">
            {t('title')}
          </h1>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="mb-24">
          <div className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0 border border-gray-100 bg-white rounded-2xl shadow-sm">
              <div className="relative h-64 md:h-auto">
                <img
                  src={newsCards[0].image}
                  alt={newsCards[0].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="p-8 lg:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-crimson-text">
                  {newsCards[0].title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {newsCards[0].description}
                </p>
                <Button 
                  size="lg" 
                  className="text-white hover:cursor-pointer hover:opacity-90 px-8 py-6 font-open-sans font-bold bg-primary"
                  onClick={() => handleLink(newsCards[0].link, newsCards[0].isInternal)}
                >
                 {t('readArticle')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsCards.slice(1).map((card) => (
              <div key={card.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-crimson-text" title={card.title}>
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed" title={card.description}>
                    {card.description}
                  </p>
                  
                  <Button
                    onClick={() => handleLink(card.link, card.isInternal)}
                    className="w-full bg-primary hover:cursor-pointer hover:bg-primary/90 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center group mt-auto"
                  >
                    {t('readArticle')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
       
      </div>
    </div>
  )
}
