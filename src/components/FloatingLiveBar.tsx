'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

export default function FloatingLiveBar() {
  const [isVisible, setIsVisible] = useState(false)
  const locale = useLocale()
  const t = useTranslations('footer.floatingBar')

  useEffect(() => {
    const isClosed = sessionStorage.getItem('ewtn-floater-closed')
    if (isClosed !== '1') {
      setIsVisible(true)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    sessionStorage.setItem('ewtn-floater-closed', '1')
  }

  if (!isVisible) return null

  return (
    <>
      <style jsx>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(192,0,0,0.7); opacity: 1; }
          70% { box-shadow: 0 0 0 7px rgba(192,0,0,0); opacity: 0.8; }
          100% { box-shadow: 0 0 0 0 rgba(192,0,0,0); opacity: 1; }
        }
        .ewtn-live-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #c00000;
          display: inline-block;
          animation: pulse 1.4s ease-in-out infinite;
        }
      `}</style>
      <div 
        id="ewtn-floater" 
        className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#c00000] text-white flex items-center justify-between px-6 py-3.5 gap-4 flex-wrap shadow-[0_-2px_8px_rgba(0,0,0,0.2)]"
      >
        <div className="flex flex-col gap-0.5 flex-1 min-w-[200px]">
          <span className="text-[15px] font-semibold">
            {t('title')}
          </span>
          <span className="text-[12px] opacity-85 font-normal">
            {t('dates')}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a 
            href="https://ewtnafrica.com/live-papalvisit-africa/" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#c00000] text-[14px] font-bold px-5 py-2 rounded-full no-underline whitespace-nowrap flex items-center gap-2 hover:bg-gray-100 transition-colors"
          >
            {t('watchLive')} <span className="ewtn-live-dot"></span>
          </a>
          <button 
            onClick={handleClose}
            className="bg-transparent border-none text-white text-2xl cursor-pointer p-0 leading-none hover:opacity-70 transition-opacity"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>
    </>
  )
}
