import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { sportsSections } from '@/data/sports-sections';
import { PhotoGallery } from '@/components/gallery/PhotoGallery';
import FadeIn from '@/components/ui/fade-in';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { 
  Trophy, 
  MapPin, 
  Clock, 
  Star, 
  Award, 
  Users,
  ExternalLink,
  CheckCircle,
  Quote,
  Calendar
} from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return sportsSections.map((section) => ({
    slug: section.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const section = sportsSections.find((s) => s.slug === params.slug);
  
  if (!section) {
    return {
      title: 'Секция не найдена',
    };
  }

  return {
    title: section.name,
    description: section.description,
    keywords: ['спорт', 'секция', section.name, section.coachName, 'РГАУ-МСХА', 'тренировки'],
  };
}

export default function SportsSectionPage({ params }: Props) {
  const section = sportsSections.find((s) => s.slug === params.slug);

  if (!section) {
    notFound();
  }

  const galleryPhotos = section.gallery?.map(src => ({ src, alt: `${section.name} - фото` })) || [];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Banner */}
      <section className="relative h-96 overflow-hidden">
        {section.banner ? (
          <Image
            src={section.banner}
            alt={`${section.name} - баннер`}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-primary" />
        )}
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="container mx-auto px-4 text-center">
            <FadeIn>
              {section.logo && (
                <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm p-2">
                  <Image
                    src={section.logo}
                    alt={`${section.name} - логотип`}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
                {section.name}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                {section.description}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Back to Sports Button */}
        <FadeIn>
          <div className="mb-8">
            <Link
              href="/student-life/sports"
              className="inline-flex items-center text-primary hover:text-primary-600 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Все спортивные секции
            </Link>
          </div>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Coach Section */}
            <FadeIn>
              <Card variant="elevated">
                <CardHeader>
                  <h2 className="font-heading text-2xl font-bold text-dark flex items-center">
                    <Users className="w-6 h-6 text-primary mr-3" />
                    Тренер секции
                  </h2>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-6">
                    {section.coachPhoto && (
                      <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                        <Image
                          src={section.coachPhoto}
                          alt={section.coachName}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-dark">
                          {section.coachName}
                        </h3>
                        <p className="text-primary font-medium">
                          {section.coachTitle}
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                        <Quote className="w-5 h-5 text-primary mb-2" />
                        <p className="text-gray-700 italic">
                          "{section.coachQuote}"
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Tournaments Section */}
            {section.tournaments.length > 0 && (
              <FadeIn>
                <Card variant="elevated">
                  <CardHeader>
                    <h2 className="font-heading text-2xl font-bold text-dark flex items-center">
                      <Trophy className="w-6 h-6 text-primary mr-3" />
                      Турниры и соревнования
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {section.tournaments.map((tournament, index) => (
                        <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-primary/30 transition-colors">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-dark">{tournament.title}</h3>
                            {tournament.year && (
                              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                {tournament.year}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{tournament.description}</p>
                          {tournament.achievement && (
                            <div className="flex items-center text-primary text-sm font-medium">
                              <Award className="w-4 h-4 mr-1" />
                              {tournament.achievement}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            )}

            {/* Awards Section */}
            {section.awards.length > 0 && (
              <FadeIn>
                <Card variant="elevated">
                  <CardHeader>
                    <h2 className="font-heading text-2xl font-bold text-dark flex items-center">
                      <Star className="w-6 h-6 text-primary mr-3" />
                      Награды и достижения
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2">
                      {section.awards.map((award, index) => (
                        <div key={index} className="flex items-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                          <Award className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                          <span className="text-dark text-sm">{award}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            )}



            {/* Photo Gallery */}
            {galleryPhotos.length > 0 && (
              <FadeIn>
                <Card variant="elevated">
                  <CardHeader>
                    <h2 className="font-heading text-2xl font-bold text-dark">
                      Фотогалерея
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <PhotoGallery photos={galleryPhotos} />
                  </CardContent>
                </Card>
              </FadeIn>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Requirements Section */}
            <FadeIn>
              <Card variant="elevated">
                <CardHeader>
                  <h3 className="font-heading text-xl font-bold text-dark flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    Требования для вступления
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {section.requirements.map((requirement, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
            
            {/* Quick Info */}
            <FadeIn>
              <Card variant="elevated" className="sticky top-4">
                <CardHeader>
                  <h3 className="font-heading text-xl font-bold text-dark">
                    Информация о секции
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  
                  {/* Category */}
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Категория</div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                      {section.category === 'team-sports' ? 'Командный спорт' : 
                       section.category === 'individual-sports' ? 'Индивидуальный спорт' : 
                       section.category}
                    </span>
                  </div>

                  {/* Schedule */}
                  {(section.dayOfWeek || section.trainingTime || section.specialDayOfWeek || section.specialTrainingTime) && (
                    <div>
                      <div className="text-sm text-gray-600 mb-2">Расписание</div>
                      <div className="space-y-1">
                        {section.dayOfWeek && (
                          <div className="flex items-center text-dark">
                            <Calendar className="w-4 h-4 text-primary mr-2" />
                            <span className="text-sm">{section.dayOfWeek}</span>
                          </div>
                        )}
                        {section.trainingTime && (
                          <div className="flex items-center text-dark">
                            <Clock className="w-4 h-4 text-primary mr-2" />
                            <span className="text-sm">{section.trainingTime}</span>
                          </div>
                        )}
                        {section.specialDayOfWeek && (
                          <div className="flex items-center text-dark">
                            <Calendar className="w-4 h-4 text-primary mr-2" />
                            <span className="text-sm">{section.specialDayOfWeek}</span>
                          </div>
                        )}
                        {section.specialTrainingTime && (
                          <div className="flex items-center text-dark">
                            <Clock className="w-4 h-4 text-primary mr-2" />
                            <span className="text-sm">{section.specialTrainingTime}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Location */}
                  {section.location && (
                    <div>
                      <div className="text-sm text-gray-600 mb-2">Место проведения</div>
                      <div className="flex items-center text-dark">
                        <MapPin className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm">{section.location}</span>
                      </div>
                    </div>
                  )}

                  {/* Contact Link */}
                  <div className="pt-4 border-t">
                    <a
                      href={section.contactLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Связаться с секцией
                    </a>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>


          </div>
        </div>
      </div>
    </div>
  );
} 