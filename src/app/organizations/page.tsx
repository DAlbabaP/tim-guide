import { SectionCard } from '@/components/cards/section-card'
import { organizations } from '@/data/organizations'
import { OrganizationsList } from '@/components/organizations/organizations-list'

export const metadata = { title: 'Организации' }

export default function OrganizationsPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      <header className="space-y-4">
        <h1 className="font-heading text-4xl md:text-5xl text-dark">Организации</h1>
        <p className="text-gray max-w-2xl">Каталог студенческих, творческих и спортивных объединений.</p>
      </header>

      <OrganizationsList />
    </div>
  )
} 