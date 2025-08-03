import { Metadata } from 'next';
import { sportsSections } from '@/data/sports-sections';
import { SportsSectionCard } from '@/components/sports/sports-section-card';
import FadeIn from '@/components/ui/fade-in';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Users, Medal, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Спортивные секции',
  description: 'Спортивные секции РГАУ-МСХА имени К.А. Тимирязева. Футбол, баскетбол, волейбол, плавание, легкая атлетика и другие виды спорта.',
  keywords: ['спорт', 'секции', 'РГАУ-МСХА', 'футбол', 'баскетбол', 'волейбол', 'плавание', 'легкая атлетика', 'тренировки', 'соревнования'],
};

export default function SportsPage() {
  const featuredSections = sportsSections.filter(section => section.isFeatured);
  const otherSections = sportsSections.filter(section => !section.isFeatured);
  const teamSports = sportsSections.filter(section => section.category === 'team-sports');
  const individualSports = sportsSections.filter(section => section.category === 'individual-sports');

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      {/* Заголовок */}
      <header className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
            <Trophy className="w-8 h-8 text-gray-700" />
          </div>
          <div>
            <h1 className="font-heading text-4xl md:text-5xl text-dark">Спортивные секции</h1>
            <p className="text-gray text-lg mt-2">РГАУ-МСХА имени К.А. Тимирязева</p>
          </div>
        </div>
      </header>

      {/* Основная информация */}
      <div className="grid gap-6 lg:grid-cols-2 auto-rows-fr">
        <FadeIn className="h-full">
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
            <CardHeader>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Общая информация
              </h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray leading-relaxed">
                Присоединяйтесь к спортивному движению университета! Развивайтесь физически, 
                участвуйте в соревнованиях и находите единомышленников. В нашем университете 
                представлены как командные, так и индивидуальные виды спорта для всех уровней подготовки.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="neutral" className="hover:scale-105 transition-transform duration-200">50+ секций</Badge>
                <Badge variant="neutral" className="hover:scale-105 transition-transform duration-200">500+ спортсменов</Badge>
                <Badge variant="neutral" className="hover:scale-105 transition-transform duration-200">50+ наград в год</Badge>
                <Badge variant="neutral" className="hover:scale-105 transition-transform duration-200">Все уровни подготовки</Badge>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
        <div className="flex flex-col gap-6 h-full">
          {/* Статистика */}
          <FadeIn>
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Trophy className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Статистика
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-2 rounded-lg">
                    <Trophy className="w-4 h-4 text-blue-500" />
                    <span className="font-medium">15+</span>
                    <span className="text-gray">спортивных секций</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg">
                    <Users className="w-4 h-4 text-green-500" />
                    <span className="font-medium">500+</span>
                    <span className="text-gray">активных спортсменов</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg">
                    <Medal className="w-4 h-4 text-purple-500" />
                    <span className="font-medium">50+</span>
                    <span className="text-gray">наград в год</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span className="font-medium">Круглый год</span>
                    <span className="text-gray">тренировки и соревнования</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>

      {/* Featured Sections */}
      {featuredSections.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl text-dark text-center mb-4">
                Рекомендуемые секции
              </h2>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Самые популярные и успешные спортивные направления нашего университета
              </p>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredSections.map((section) => (
                <SportsSectionCard
                  key={section.slug}
                  slug={section.slug}
                  name={section.name}
                  description={section.description}
                  coachName={section.coachName}
                  coachTitle={section.coachTitle}
                  dayOfWeek={section.dayOfWeek}
                  trainingTime={section.trainingTime}
                  specialDayOfWeek={section.specialDayOfWeek}
                  specialTrainingTime={section.specialTrainingTime}
                  location={section.location}
                  category={section.category}
                  isFeatured={section.isFeatured}
                  logo={section.logo}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Team Sports */}
      {teamSports.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl text-dark text-center mb-4">
                Командные виды спорта
              </h2>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Развивайте командный дух и лидерские качества
              </p>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {teamSports.map((section) => (
                <SportsSectionCard
                  key={section.slug}
                  slug={section.slug}
                  name={section.name}
                  description={section.description}
                  coachName={section.coachName}
                  coachTitle={section.coachTitle}
                  dayOfWeek={section.dayOfWeek}
                  trainingTime={section.trainingTime}
                  specialDayOfWeek={section.specialDayOfWeek}
                  specialTrainingTime={section.specialTrainingTime}
                  location={section.location}
                  category={section.category}
                  isFeatured={section.isFeatured}
                  logo={section.logo}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Individual Sports */}
      {individualSports.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl text-dark text-center mb-4">
                Индивидуальные виды спорта
              </h2>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Развивайте личное мастерство и достигайте индивидуальных высот
              </p>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {individualSports.map((section) => (
                <SportsSectionCard
                  key={section.slug}
                  slug={section.slug}
                  name={section.name}
                  description={section.description}
                  coachName={section.coachName}
                  coachTitle={section.coachTitle}
                  dayOfWeek={section.dayOfWeek}
                  trainingTime={section.trainingTime}
                  specialDayOfWeek={section.specialDayOfWeek}
                  specialTrainingTime={section.specialTrainingTime}
                  location={section.location}
                  category={section.category}
                  isFeatured={section.isFeatured}
                  logo={section.logo}
                />
              ))}
            </div>
          </div>
        </section>
      )}


    </div>
  );
} 