import { OrganizationsList } from '@/components/student-life/organizations-list'

export const metadata = { title: 'Студенческие организации' }

export default function StudentOrganizationsPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      <header className="space-y-4">
        <h1 className="font-heading text-3xl md:text-4xl text-dark">Студенческие организации</h1>
        <p className="text-gray max-w-2xl">Каталог студенческих объединений, клубов и активностей университета. Используйте фильтры для поиска по интересам.</p>
      </header>
      <OrganizationsList />
    </div>
  )
} 