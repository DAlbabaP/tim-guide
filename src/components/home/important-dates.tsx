'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import FadeIn from '@/components/ui/fade-in';
import { cn } from '@/utils/cn';

interface ImportantDate {
  id: string;
  title: string;
  description: string;
  date: Date;
  type: 'upcoming' | 'current' | 'past';
  category: 'admission' | 'academic' | 'general';
}

export const ImportantDates = () => {
  const [currentDate] = useState(new Date());
  const [importantDates, setImportantDates] = useState<ImportantDate[]>([]);

  useEffect(() => {
    const dates: ImportantDate[] = [
      // Даты поступления (примерные)
      {
        id: '1',
        title: 'Начало приема документов',
        description: 'Старт подачи документов для поступления',
        date: new Date(currentDate.getFullYear(), 5, 20), // 20 июня
        type: 'upcoming',
        category: 'admission'
      },
      {
        id: '2',
        title: 'Завершение приема документов',
        description: 'Последний день подачи документов',
        date: new Date(currentDate.getFullYear(), 6, 25), // 25 июля
        type: 'upcoming',
        category: 'admission'
      },
      {
        id: '3',
        title: 'Публикация списков зачисленных',
        description: 'Официальные списки поступивших',
        date: new Date(currentDate.getFullYear(), 7, 3), // 3 августа
        type: 'upcoming',
        category: 'admission'
      },
      // Академические даты
      {
        id: '4',
        title: 'Начало учебного года',
        description: 'Первый день занятий',
        date: new Date(currentDate.getFullYear(), 8, 1), // 1 сентября
        type: 'upcoming',
        category: 'academic'
      },
      {
        id: '5',
        title: 'Зимняя сессия',
        description: 'Экзаменационная сессия',
        date: new Date(currentDate.getFullYear(), 11, 20), // 20 декабря
        type: 'upcoming',
        category: 'academic'
      },
      {
        id: '6',
        title: 'Весенняя сессия',
        description: 'Экзаменационная сессия',
        date: new Date(currentDate.getFullYear() + 1, 0, 15), // 15 января
        type: 'upcoming',
        category: 'academic'
      },
      // Общие даты
      {
        id: '7',
        title: 'День студента',
        description: 'Международный день студентов',
        date: new Date(currentDate.getFullYear(), 10, 17), // 17 ноября
        type: 'upcoming',
        category: 'general'
      }
    ];

    // Сортируем даты и определяем их статус
    const sortedDates = dates
      .map(date => ({
        ...date,
        type: getDateType(date.date, currentDate)
      }))
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .slice(0, 6); // Показываем только ближайшие 6 дат

    setImportantDates(sortedDates);
  }, [currentDate]);

  const getDateType = (date: Date, current: Date): 'upcoming' | 'current' | 'past' => {
    const diffTime = date.getTime() - current.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'past';
    if (diffDays <= 7) return 'current';
    return 'upcoming';
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long'
    });
  };

  const getDaysUntil = (date: Date): number => {
    const diffTime = date.getTime() - currentDate.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'current':
        return <AlertCircle className="w-5 h-5 text-warning" />;
      case 'past':
        return <CheckCircle className="w-5 h-5 text-success" />;
      default:
        return <Calendar className="w-5 h-5 text-primary" />;
    }
  };

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'current':
        return 'border-warning bg-warning/5';
      case 'past':
        return 'border-success bg-success/5';
      default:
        return 'border-primary bg-primary/5';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl text-dark text-center mb-16">
            Важные даты
          </h2>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {importantDates.map((date) => (
            <FadeIn key={date.id} className="delay-200">
              <div className={cn(
                "p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-medium group",
                getTypeStyles(date.type)
              )}>
                <div className="flex items-start justify-between mb-4">
                  {getTypeIcon(date.type)}
                  <div className="text-right">
                    <div className="text-sm text-gray-600">
                      {formatDate(date.date)}
                    </div>
                    {date.type === 'upcoming' && (
                      <div className="text-xs text-primary font-medium">
                        через {getDaysUntil(date.date)} дн.
                      </div>
                    )}
                    {date.type === 'current' && (
                      <div className="text-xs text-warning font-medium">
                        скоро!
                      </div>
                    )}
                  </div>
                </div>

                <h3 className="font-heading text-xl font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
                  {date.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {date.description}
                </p>

                <div className="mt-4 flex items-center text-xs text-gray-500">
                  <Clock className="w-3 h-3 mr-1" />
                  {date.category === 'admission' && 'Поступление'}
                  {date.category === 'academic' && 'Учёба'}
                  {date.category === 'general' && 'Общее'}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}; 