'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const Document = dynamic(() => import('react-pdf').then(mod => mod.Document), { ssr: false })
const Page = dynamic(() => import('react-pdf').then(mod => mod.Page), { ssr: false })

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

export default function PressKitPage() {
  const params = useParams()
  const locale = params.locale as string
  const [isClient, setIsClient] = useState(false)
  const [pdfWidth, setPdfWidth] = useState(800)
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  
  useEffect(() => {
    setIsClient(true)
    import('react-pdf').then((pdfjs) => {
      pdfjs.pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.mjs',
        import.meta.url,
      ).toString()
    })
    
    const updateWidth = () => {
      const screenWidth = window.innerWidth
      if (screenWidth < 640) {
        setPdfWidth(screenWidth - 32) // Small screens
      } else if (screenWidth < 768) {
        setPdfWidth(screenWidth - 48) // Medium screens
      } else if (screenWidth < 1024) {
        setPdfWidth(Math.min(800, screenWidth - 64)) // Large screens
      } else {
        setPdfWidth(800) // Extra large screens
      }
    }
    
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])
  
  const documentPath = '/press_kit.pdf'
    
  const documentTitle = locale === 'fr'
    ? 'Dossier de Presse'
    : 'Press Kit'

  return (
    <section className="relative bg-linear-to-br from-[#eff2f8] to-[#e8eef5] min-h-screen py-24 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2H6zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary font-crimson-text mb-6">
            {documentTitle}
            
          </h1>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full mb-8"></div>
         
        </div>

           <div className="flex justify-center">
              {isClient && (
                <div className="w-full max-w-4xl">
                  <Document
                    file={documentPath}
                    className="flex justify-center"
                    onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                  >
                    <Page 
                      pageNumber={pageNumber} 
                      className="border border-gray-300 mx-auto p-3 rounded-lg shadow-lg"
                      renderTextLayer={true}
                      renderAnnotationLayer={true}
                      width={pdfWidth}
                    />
                  </Document>
                  
                  {numPages && (
                    <div className="flex items-center justify-between mt-8 px-4">
                      <button
                        onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
                        disabled={pageNumber <= 1}
                        className="px-4 py-2 bg-secondary text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-secondary/90 transition-colors"
                      >
                        Previous
                      </button>
                      
                      <div className="text-center text-sm text-gray-600">
                        Page {pageNumber} of {numPages}
                      </div>
                      
                      <button
                        onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
                        disabled={pageNumber >= numPages}
                        className="px-4 py-2 bg-secondary text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-secondary/90 transition-colors"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </div>
              )}
              {!isClient && (
                <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 w-full max-w-4xl">
                  <div className="text-center text-gray-600">Loading PDF...</div>
                </div>
              )}
            </div>
      </div>
    </section>
  )
}
