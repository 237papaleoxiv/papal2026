'use client'

import { useState, useEffect } from 'react'
import { X, Play } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

export default function FloatingLiveBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const locale = useLocale()
  const t = useTranslations('footer.floatingBar')

  useEffect(() => {
    const isClosed = sessionStorage.getItem('ewtn-floater-closed')
    if (isClosed !== '1') {
      setIsVisible(true)
    }
  }, [])

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsVisible(false)
    sessionStorage.setItem('ewtn-floater-closed', '1')
  }

  if (!isVisible) return null

  return (
    <>
      <style jsx>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.7); transform: scale(1); opacity: 1; }
          70% { box-shadow: 0 0 0 10px rgba(255,255,255,0); transform: scale(1.1); opacity: 0.8; }
          100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); transform: scale(1); opacity: 1; }
        }
        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: white;
          animation: pulse 1.5s ease-in-out infinite;
        }
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
      `}</style>
      
      <div 
        className={`fixed left-0 top-1/2 -translate-y-1/2 z-[9999] transition-all duration-300 ease-in-out ${isExpanded ? 'translate-x-0' : '-translate-x-1'}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="flex items-stretch shadow-2xl">
          {/* Main Tab */}
          <a 
            href="https://ewtnafrica.com/live-papalvisit-africa/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c00000] text-white py-6 px-3 flex flex-col items-center gap-6 rounded-r-2xl border-y border-r border-white/20 hover:bg-[#a00000] transition-colors relative"
          >
            {/* Live Indicator */}
            <div className="flex flex-col items-center gap-2">
              <span className="live-dot" />
              <span className="text-[10px] font-bold tracking-widest uppercase vertical-text">
                LIVE
              </span>
            </div>

            {/* Vertical Title */}
            <div className="py-4">
              <span className="text-sm font-bold tracking-wide vertical-text whitespace-nowrap">
                {t('watchLive')}
              </span>
            </div>

            {/* Play Icon */}
            <div className="bg-white/20 p-2 rounded-full mt-auto">
              <Play className="h-4 w-4 fill-current" />
            </div>
          </a>

          {/* Close Button (only shows when expanded or partially hidden) */}
          <button 
            onClick={handleClose}
            className={`absolute -top-3 -right-3 bg-gray-900 text-white p-1 rounded-full shadow-lg border border-white/20 hover:bg-black transition-all duration-200 ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}`}
            aria-label="Close"
          >
            <X className="h-3 w-3" />
          </button>
        </div>

        {/* Floating Tooltip/Hint */}
        <div className={`absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-xs whitespace-nowrap shadow-xl transition-all duration-300 pointer-events-none ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
          <div className="font-bold mb-0.5">{t('title')}</div>
          <div className="opacity-70">{t('dates')}</div>
          {/* Decorative Arrow */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45" />
        </div>
      </div>
    </>
  )
}
