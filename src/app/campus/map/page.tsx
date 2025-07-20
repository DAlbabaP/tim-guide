import dynamic from 'next/dynamic'

const ExternalMap = dynamic(() => Promise.resolve(() => (
  <iframe
    src="https://dalbabap.github.io/rgau-interactive-map/"
    loading="lazy"
    className="w-full h-[700px] rounded-3xl border-none shadow-soft"
  />
)), { ssr: false })

export const metadata = { title: 'Карта кампуса' }

export default function CampusMapPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-6">
      <h1 className="font-heading text-3xl md:text-4xl text-dark">Интерактивная карта кампуса</h1>
      <ExternalMap />
    </div>
  )
} 