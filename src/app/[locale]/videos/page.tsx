'use client'

import { useTranslations } from 'next-intl'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const videos = [
  {
    id: 1,
    title: 'EWTN Interviews Bettencourt',
    videoPath: '/video_gallery/vid1.mp4',
  },
  {
    id: 2,
    title: "Pope Leo XIV's Message",
    youtubeId: '9XvPM6Ygeqg',
  }, 
  {
    id: 3,
    title: 'Papal Visit Africa 2026',
    videoPath: '/video_gallery/vid2.mp4',
  },
   {
    id: 4,
    title: 'Papal Visit Africa 2026',
    videoPath: '/video_gallery/vid4.mp4',
  },
]

export default function VideosPage() {
  const t = useTranslations('photoGallery')

  return (
    <section className="relative bg-gradient-to-br from-[#eff2f8] to-[#e8eef5] min-h-screen py-24 px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">

        {/* Back Navigation */}
        <div className="mb-8 max-md:-mt-16">
          <Link href="/">
            <Button variant="ghost" className="text-primary hover:bg-primary/10 font-open-sans font-semibold backdrop-blur-sm bg-white/50 px-4 py-2 rounded-full shadow-sm">
              <ArrowLeft className="mr-2 h-5 w-5" />
              {t('backToHome')}
            </Button>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-primary font-crimson-text mb-6">
            {t('viewVideos')}
          </h1>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Video Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video rounded overflow-hidden">
                {video.videoPath ? (
                  <video
                    className="w-full h-full object-cover rounded-xl"
                    src={video.videoPath}
                    title={video.title}
                    controls
             
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <iframe
                    className="w-full h-full rounded-xl"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}