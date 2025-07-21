import { organizations } from '@/data/student-life'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { cn } from '@/utils/cn'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return organizations.map((org) => ({ slug: org.slug }))
}

export const dynamicParams = false

export default function OrganizationPage({ params }: Props) {
  const org = organizations.find((o) => o.slug === params.slug)
  if (!org) return notFound()

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Hero */}
      <div className="relative rounded-4xl overflow-hidden shadow-medium">
        {org.banner && (
          <Image
            src={org.banner}
            alt={org.name}
            width={1200}
            height={350}
            priority
            loading="eager"
            className="w-full h-72 md:h-80 lg:h-96 object-cover object-center"
          />
        )}
        <div className="absolute inset-0 bg-white/70 flex flex-col justify-end p-8">
          <div className="flex items-end gap-6">
            {/* Логотип организации */}
            {org.logo && (
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src={org.logo}
                    alt={`Логотип ${org.name}`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    quality={100}
                    priority
                    sizes="96px"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
              </div>
            )}
            
            {/* Текст */}
            <div className="flex-1">
              <h1 className="font-heading text-3xl md:text-4xl text-dark mb-2">{org.name}</h1>
              <p className="text-dark text-sm max-w-3xl">{org.shortDescription}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Leader message & requirements */}
      <div className="grid md:grid-cols-[2fr_1fr] gap-8">
        <div className="space-y-6">
          <section className="rounded-3xl border border-gray-200 p-6 bg-light/50">
            <h2 className="font-heading text-xl text-dark mb-4">Обращение Председателя</h2>
            <div className="flex items-start gap-4">
              {org.photo && (
                <Image
                  src={org.photo}
                  alt={org.leaderName}
                  width={144}
                  height={144}
                  className="rounded-full w-36 h-36 object-cover flex-shrink-0 shadow-sm image-sharp"
                  quality={100}
                  priority
                  sizes="144px"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              )}
              <div>
                <h3 className="font-medium text-dark">{org.leaderName}</h3>
                <p className="text-sm text-gray mb-4">{org.leaderPosition}</p>
                <blockquote className="italic text-dark/90 border-l-4 border-primary pl-4">&ldquo;{org.leaderQuote}&rdquo;</blockquote>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-gray-200 p-6">
            <h2 className="font-heading text-xl text-dark mb-4">Наша миссия</h2>
            <p className="text-gray leading-relaxed">{org.mission}</p>
          </section>

          <section className="rounded-3xl border border-gray-200 p-6">
            <h2 className="font-heading text-xl text-dark mb-6">Что мы предлагаем</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {org.events.map((ev) => (
                <div key={ev.title} className="rounded-xl border p-4 bg-white hover:shadow-soft transition-shadow">
                  <h3 className="font-medium text-dark mb-1">{ev.title}</h3>
                  <p className="text-sm text-gray">{ev.description}</p>
                </div>
              ))}
            </div>
          </section>

          {org.gallery && (
            <section className="rounded-3xl border border-gray-200 p-6">
              <h2 className="font-heading text-xl text-dark mb-6">Фотогалерея</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {org.gallery.map((src) => (
                  <Image
                    key={src}
                    src={src}
                    alt="Фото организации"
                    width={400}
                    height={300}
                    className="w-full h-40 object-cover rounded-xl"
                  />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <section className="rounded-3xl border border-gray-200 p-6 bg-light/50">
            <h2 className="font-heading text-lg text-dark mb-4">Требования к участникам</h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray">
              {org.requirements.map((req) => (
                <li key={req}>{req}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-gray-200 p-6">
            <h2 className="font-heading text-lg text-dark mb-4">Как присоединиться</h2>
            <p className="text-sm text-gray leading-relaxed">{org.howToJoin}</p>
          </section>

          <section className="rounded-3xl border border-gray-200 p-6">
            <h2 className="font-heading text-lg text-dark mb-4">Наши контакты</h2>
            <div className="space-y-2">
              {org.socials.map((s) => (
                <a key={s.platform} href={s.url} className="block text-primary hover:underline text-sm font-medium">
                  {s.platform}
                </a>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  )
} 