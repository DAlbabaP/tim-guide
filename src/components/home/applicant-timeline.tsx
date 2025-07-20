'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle, Circle, Clock } from 'lucide-react';
import FadeIn from '@/components/ui/fade-in';
import { cn } from '@/utils/cn';
import Link from 'next/link';

interface TimelineStep {
  id: string;
  title: string;
  description: string;
  period: string;
  status: 'completed' | 'current' | 'upcoming';
  href: string;
  icon: React.ReactNode;
}

export const ApplicantTimeline = () => {

  const timelineSteps: TimelineStep[] = [
    {
      id: '1',
      title: 'Подготовка документов',
      description: 'Сбор необходимых документов для поступления',
      period: 'Июнь',
      status: 'completed',
      href: '/admission/documents',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      id: '2',
      title: 'Подача заявления',
      description: 'Подача документов через ЕПГУ или лично',
      period: 'Июнь - Июль',
      status: 'current',
      href: '/admission/enrollment',
      icon: <Clock className="w-6 h-6" />
    },
    {
      id: '3',
      title: 'Конкурсный отбор',
      description: 'Рассмотрение документов и формирование рейтинга',
      period: 'Конец июля',
      status: 'upcoming',
      href: '/admission/selection',
      icon: <Circle className="w-6 h-6" />
    },
    {
      id: '4',
      title: 'Зачисление',
      description: 'Публикация списков зачисленных',
      period: 'Август',
      status: 'upcoming',
      href: '/admission/enrollment',
      icon: <Circle className="w-6 h-6" />
    },
    {
      id: '5',
      title: 'Оформление в общежитие',
      description: 'Подача документов на заселение',
      period: 'Конец августа',
      status: 'upcoming',
      href: '/admission/dormitory',
      icon: <Circle className="w-6 h-6" />
    },
    {
      id: '6',
      title: 'Адаптация и начало учебы',
      description: 'Знакомство с университетом и первая неделя занятий',
      period: 'Сентябрь',
      status: 'upcoming',
      href: '/admission/adaptation',
      icon: <Circle className="w-6 h-6" />
    }
  ];

  const getStepStyles = (step: TimelineStep) => {
    switch (step.status) {
      case 'completed':
        return 'border-success bg-success/5 text-success';
      case 'current':
        return 'border-primary bg-primary/5 text-primary';
      default:
        return 'border-gray-300 bg-gray-50 text-gray-400';
    }
  };

  const getStepIcon = (step: TimelineStep) => {
    switch (step.status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-success" />;
      case 'current':
        return <Clock className="w-6 h-6 text-primary animate-pulse" />;
      default:
        return <Circle className="w-6 h-6 text-gray-400" />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-dark mb-4">
              Хронология абитуриента
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ключевые этапы вашего пути в университет
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>

          <div className="space-y-8">
            {timelineSteps.map((step) => (
              <FadeIn key={step.id} className="delay-200">
                <div className="relative">
                  {/* Desktop timeline */}
                  <div className="hidden md:flex items-start gap-8">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full border-4 bg-white flex items-center justify-center z-10 relative">
                      {getStepIcon(step)}
                    </div>
                    
                    <div className={cn(
                      "flex-1 p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-medium group",
                      getStepStyles(step)
                    )}>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-heading text-xl font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 mb-3">
                            {step.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-primary">
                            {step.period}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {step.status === 'completed' && 'Завершено'}
                            {step.status === 'current' && 'Текущий этап'}
                            {step.status === 'upcoming' && 'Предстоит'}
                          </div>
                        </div>
                      </div>

                      <Link
                        href={step.href}
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-700 transition-colors"
                      >
                        Подробнее
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Mobile timeline */}
                  <div className="md:hidden">
                    <div className={cn(
                      "p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-medium group",
                      getStepStyles(step)
                    )}>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 bg-white flex items-center justify-center">
                          {getStepIcon(step)}
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-heading text-lg font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {step.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium text-primary">
                              {step.period}
                            </div>
                            <div className="text-xs text-gray-500">
                              {step.status === 'completed' && 'Завершено'}
                              {step.status === 'current' && 'Текущий этап'}
                              {step.status === 'upcoming' && 'Предстоит'}
                            </div>
                          </div>
                        </div>
                      </div>

                      <Link
                        href={step.href}
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-700 transition-colors"
                      >
                        Подробнее
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}; 