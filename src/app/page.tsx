import { HeroBanner } from "@/components/layout/hero-banner";
import { SearchBar } from "@/components/search/search-bar";
import { SectionCard } from "@/components/cards/section-card";

export default function HomePage() {
  const sections = [
    {
      title: "Поступление",
      description: "Подача документов, конкурсный отбор, зачисление и адаптация",
      href: "/admission",
      iconKey: "admission",
    },
    {
      title: "Учёба",
      description: "Информационные сервисы, ВУЦ, практики, библиотека и другое",
      href: "/study",
      iconKey: "study",
    },
    {
      title: "Кампус",
      description: "Общежитие, инфраструктура и интерактивная карта",
      href: "/campus",
      iconKey: "campus",
    },
    {
      title: "Организации",
      description: "Студенческие объединения, творческие студии, спортивные секции",
      href: "/organizations",
      iconKey: "organizations",
    },
    {
      title: "Поддержка и стипендии",
      description: "Финансовая поддержка, стипендии, гранты, справки",
      href: "/support",
      iconKey: "support",
    },
    {
      title: "Контакты",
      description: "Контакты институтов, подразделений, кафедр, сотрудников",
      href: "/contacts",
      iconKey: "contacts",
    },
    {
      title: "FAQ",
      description: "Ответы на частые вопросы и форма обратной связи",
      href: "/faq",
      iconKey: "faq",
    },
  ];

  return (
    <div className="space-y-24">
      <HeroBanner />

      {/* Quick Search */}
      <section className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-dark mb-8">Быстрый поиск</h2>
        <SearchBar />
      </section>

      {/* Sections */}
      <section className="container mx-auto px-4 pb-24">
        <h2 className="font-heading text-3xl md:text-4xl text-dark mb-8">Основные разделы</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <SectionCard
              key={section.href}
              href={section.href}
              title={section.title}
              description={section.description}
              iconKey={section.iconKey}
            />
          ))}
        </div>
      </section>
    </div>
  );
} 