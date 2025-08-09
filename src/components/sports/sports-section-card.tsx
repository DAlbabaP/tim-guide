'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import FadeIn from '@/components/ui/fade-in';
import { cn } from '@/utils/cn';
import { Trophy, MapPin, Clock, Star } from 'lucide-react';

interface SportsSectionCardProps {
  slug: string;
  name: string;
  description: string;
  coachName: string;
  coachTitle: string;
  dayOfWeek?: string;
  trainingTime?: string;
  specialDayOfWeek?: string;
  specialTrainingTime?: string;
  location?: string;
  category: string;
  isFeatured?: boolean;
  logo?: string;
  className?: string;
}

export function SportsSectionCard({
  slug,
  name,
  description,
  coachName,
  coachTitle,
  dayOfWeek,
  trainingTime,
  location,
  category,
  isFeatured = false,
  logo,
  className,
}: SportsSectionCardProps) {
  const inner = (
    <Card variant="elevated" className={cn(
      "group relative overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-strong", 
      isFeatured && "ring-2 ring-primary/20",
      className
    )}>
      <CardContent className="p-6 flex flex-col h-full">
        {/* Заголовок с логотипом */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            {logo ? (
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                <img
                  src={logo}
                  alt={`Логотип ${name}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
            )}
            <div>
              <h3 className="font-heading text-xl font-semibold text-dark group-hover:text-primary transition-colors line-clamp-2">
                {name}
              </h3>
            </div>
          </div>
          
          {isFeatured && (
            <div className="flex-shrink-0">
              <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                <Star className="w-3 h-3 mr-1" />
                Рекомендуем
              </div>
            </div>
          )}
        </div>

        {/* Описание */}
        <p className="text-sm text-gray mb-4 leading-relaxed line-clamp-3 flex-1">
          {description}
        </p>

        {/* Расписание и место */}
        {(dayOfWeek || trainingTime || location) && (
          <div className="space-y-2 mb-4">
            {dayOfWeek && (
              <div className="flex items-center text-xs text-gray-600">
                <Clock className="w-3 h-3 mr-2 flex-shrink-0" />
                <span className="truncate">{dayOfWeek}</span>
              </div>
            )}
            {trainingTime && (
              <div className="flex items-center text-xs text-gray-600">
                <Clock className="w-3 h-3 mr-2 flex-shrink-0" />
                <span className="truncate">{trainingTime}</span>
              </div>
            )}
            {location && (
              <div className="flex items-start text-xs text-gray-600">
                <MapPin className="w-3 h-3 mr-2 flex-shrink-0 mt-0.5" />
                <span className="line-clamp-2 leading-relaxed">{location}</span>
              </div>
            )}
          </div>
        )}

        {/* Категория */}
        <div className="flex items-center justify-between mt-auto">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
            {category === 'team-sports' ? 'Командный спорт' : 
             category === 'individual-sports' ? 'Индивидуальный спорт' : 
             category}
          </span>
          
          <div className="flex items-center justify-end">
            <span className="text-sm font-medium text-primary group-hover:underline">
              Подробнее
            </span>
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors ml-2">
              <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Декоративный элемент для featured */}
        {isFeatured && (
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </CardContent>
    </Card>
  );

  const card = (
    <Link href={`/student-life/sports/${slug}`} className="block h-full">
      {inner}
    </Link>
  );

  return <FadeIn>{card}</FadeIn>;
} 