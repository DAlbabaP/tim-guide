import { HeroBanner } from "@/components/layout/hero-banner";
import { SectionCard } from "@/components/cards/section-card";
import { UniversityStats, ImportantDates, ApplicantTimeline } from "@/components/home";

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
    <div className="space-y-0">
      {/* Hero Banner */}
      <HeroBanner />

      {/* University Statistics */}
      <UniversityStats />

      {/* Important Dates */}
      <ImportantDates />

      {/* Main Sections */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl text-dark mb-8 text-center">
            Основные разделы гайда
          </h2>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 items-stretch">
            {/* Поступление - занимает 2 ячейки на средних и больших экранах */}
            <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2">
              <SectionCard
                href="/admission"
                title="Поступление"
                description="Подача документов, конкурсный отбор, зачисление и адаптация"
                iconKey="admission"
              />
            </div>
            
            {/* Учёба */}
            <div className="col-span-1">
              <SectionCard
                href="/study"
                title="Учёба"
                description="Информационные сервисы, ВУЦ, практики, библиотека и другое"
                iconKey="study"
              />
            </div>
            
            {/* Кампус */}
            <div className="col-span-1">
              <SectionCard
                href="/campus"
                title="Кампус"
                description="Общежитие, инфраструктура и интерактивная карта"
                iconKey="campus"
              />
            </div>
            
            {/* Организации - занимает 2 ячейки на средних и больших экранах */}
            <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2">
              <SectionCard
                href="/organizations"
                title="Организации"
                description="Студенческие объединения, творческие студии, спортивные секции"
                iconKey="organizations"
              />
            </div>
            
            {/* Поддержка и стипендии */}
            <div className="col-span-1">
              <SectionCard
                href="/support"
                title="Поддержка и стипендии"
                description="Финансовая поддержка, стипендии, гранты, справки"
                iconKey="support"
              />
            </div>
            
            {/* Контакты */}
            <div className="col-span-1">
              <SectionCard
                href="/contacts"
                title="Контакты"
                description="Контакты институтов, подразделений, кафедр, сотрудников"
                iconKey="contacts"
              />
            </div>
            
            {/* FAQ */}
            <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-4">
              <SectionCard
                href="/faq"
                title="FAQ"
                description="Ответы на частые вопросы и форма обратной связи"
                iconKey="faq"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applicant Timeline */}
      <ApplicantTimeline />
    </div>
  );
} 