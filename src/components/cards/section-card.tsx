'use client';

import Link from "next/link";
import { cn } from "@/utils/cn";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/ui/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  BarChart3, 
  Star, 
  Home, 
  GraduationCap,
  Users,
  Palette,
  Trophy,
  Heart,
  BookOpen,
  Calendar,
  Settings,
  Phone,
  HelpCircle,
  Award,
  Shield,
  Building,
  UserCheck,
  FileCheck,
  Lightbulb,
  Globe,
  CreditCard,
  MapPin,
  Clock,
  CheckCircle
} from "lucide-react";

// Маппинг иконок для разных разделов
const iconMap: Record<string, React.ReactNode> = {
  // Основные разделы
  'admission': <FileText className="w-8 h-8" />,
  'study': <BookOpen className="w-8 h-8" />,
  'campus': <MapPin className="w-8 h-8" />,
  'organizations': <Users className="w-8 h-8" />,
  'support': <Award className="w-8 h-8" />,
  'contacts': <Phone className="w-8 h-8" />,
  'faq': <HelpCircle className="w-8 h-8" />,
  
  // Поступление
  'documents': <FileText className="w-8 h-8" />,
  'selection': <BarChart3 className="w-8 h-8" />,
  'enrollment': <Star className="w-8 h-8" />,
  'dormitory': <Home className="w-8 h-8" />,
  'adaptation': <GraduationCap className="w-8 h-8" />,
  
  // Учёба
  'services': <Settings className="w-8 h-8" />,
  'academic-leave': <Calendar className="w-8 h-8" />,
  'military-center': <Shield className="w-8 h-8" />,
  'deferment': <CheckCircle className="w-8 h-8" />,
  'practice': <Users className="w-8 h-8" />,
  'library': <BookOpen className="w-8 h-8" />,
  'additional': <Lightbulb className="w-8 h-8" />,
  'headman': <UserCheck className="w-8 h-8" />,
  
  // Кампус
  'campus-dormitory': <Home className="w-8 h-8" />,
  'campus-infrastructure': <Building className="w-8 h-8" />,
  'campus-map': <MapPin className="w-8 h-8" />,
  
  // Организации
  'student': <Users className="w-8 h-8" />,
  'creative': <Palette className="w-8 h-8" />,
  'sports': <Trophy className="w-8 h-8" />,
  'culture': <Heart className="w-8 h-8" />,
  'sport-orgs': <Trophy className="w-8 h-8" />,
  
  // Поддержка
  'academic-scholarship': <Award className="w-8 h-8" />,
  'social-scholarship': <Heart className="w-8 h-8" />,
  'enhanced-academic': <Award className="w-8 h-8" />,
  'enhanced-social': <Heart className="w-8 h-8" />,
  'other-scholarships': <Award className="w-8 h-8" />,
  'university-support': <Building className="w-8 h-8" />,
  'moscow-support': <Globe className="w-8 h-8" />,
  'psychological': <Heart className="w-8 h-8" />,
  'federal-projects': <Globe className="w-8 h-8" />,
  'grants': <CreditCard className="w-8 h-8" />,
  'certificates': <FileCheck className="w-8 h-8" />,
  
  // Контакты
  'institutes': <Building className="w-8 h-8" />,
  'staff': <Users className="w-8 h-8" />,
  'departments': <Settings className="w-8 h-8" />,
  'chairs': <BookOpen className="w-8 h-8" />,
  
  // FAQ
  'questions': <HelpCircle className="w-8 h-8" />,
  'ask': <FileText className="w-8 h-8" />,
};

// Маппинг тегов для разных разделов
const tagMap: Record<string, string[]> = {
  // Основные разделы
  'admission': ['Поступление', 'Документы', 'Адаптация'],
  'study': ['Учёба', 'Сервисы', 'Практики'],
  'campus': ['Кампус', 'Общежитие', 'Инфраструктура'],
  'organizations': ['Организации', 'Активность', 'Развитие'],
  'support': ['Поддержка', 'Стипендии', 'Гранты'],
  'contacts': ['Контакты', 'Связь', 'Адреса'],
  'faq': ['Вопросы', 'Ответы', 'Помощь'],
  
  // Поступление
  'documents': ['Июнь - Июль', 'ЕПГУ', 'Документы'],
  'selection': ['Конец июля', 'Рейтинг ЕГЭ', 'Аттестат'],
  'enrollment': ['Август', 'Оплата', 'Статус студента'],
  'dormitory': ['Конец августа', 'Общежитие', 'Документы'],
  'adaptation': ['Сентябрь', 'Знакомство', 'Учёба'],
  
  // Учёба
  'services': ['Электронные', 'Сервисы', 'Онлайн'],
  'academic-leave': ['Документы', 'Процедуры', 'Восстановление'],
  'military-center': ['Военная подготовка', 'Служба', 'Обучение'],
  'deferment': ['Отсрочка', 'Армия', 'Документы'],
  'practice': ['Производственная', 'Трудоустройство', 'Опыт'],
  'library': ['Книги', 'Ресурсы', 'Исследования'],
  'additional': ['Курсы', 'Программы', 'Развитие'],
  'headman': ['Лидерство', 'Группа', 'Ответственность'],
  
  // Кампус
  'campus-dormitory': ['Проживание', 'Условия', 'Комфорт'],
  'campus-infrastructure': ['Магазины', 'Транспорт', 'Услуги'],
  'campus-map': ['Интерактивная', 'Навигация', 'Кампус'],
  
  // Организации
  'student': ['Активность', 'Развитие', 'Сообщество'],
  'creative': ['Творчество', 'Искусство', 'Выражение'],
  'sports': ['Спорт', 'Здоровье', 'Команда'],
  'culture': ['Культура', 'Мероприятия', 'Традиции'],
  'sport-orgs': ['Спорторги', 'Соревнования', 'Организация'],
  
  // Поддержка
  'academic-scholarship': ['Успеваемость', 'Финансы', 'Поддержка'],
  'social-scholarship': ['Социальная', 'Помощь', 'Льготы'],
  'enhanced-academic': ['Повышенная', 'Достижения', 'Награды'],
  'enhanced-social': ['Социальная', 'Повышенная', 'Поддержка'],
  'other-scholarships': ['Дополнительные', 'Специальные', 'Гранты'],
  'university-support': ['Университет', 'Материальная', 'Помощь'],
  'moscow-support': ['Москва', 'Городская', 'Программы'],
  'psychological': ['Психология', 'Поддержка', 'Помощь'],
  'federal-projects': ['Федеральные', 'Государственные', 'Программы'],
  'grants': ['Гранты', 'Финансирование', 'Проекты'],
  'certificates': ['Справки', 'Документы', 'Оформление'],
  
  // Контакты
  'institutes': ['Дирекции', 'Институты', 'Контакты'],
  'staff': ['Сотрудники', 'Персонал', 'Связь'],
  'departments': ['Подразделения', 'Администрация', 'Структура'],
  'chairs': ['Кафедры', 'Академические', 'Преподаватели'],
  
  // FAQ
  'questions': ['Вопросы', 'Ответы', 'Помощь'],
  'ask': ['Задать вопрос', 'Обратная связь', 'Поддержка'],
};

// Цвета для иконок
const iconColors: Record<string, string> = {
  // Основные разделы
  'admission': 'text-blue-500',
  'study': 'text-green-500',
  'campus': 'text-orange-500',
  'organizations': 'text-purple-500',
  'support': 'text-pink-500',
  'contacts': 'text-gray-600',
  'faq': 'text-indigo-500',
  
  // Поступление
  'documents': 'text-purple-500',
  'selection': 'text-blue-500',
  'enrollment': 'text-yellow-500',
  'dormitory': 'text-orange-500',
  'adaptation': 'text-indigo-500',
  
  // Учёба
  'services': 'text-green-500',
  'academic-leave': 'text-red-500',
  'military-center': 'text-gray-700',
  'deferment': 'text-green-600',
  'practice': 'text-blue-600',
  'library': 'text-amber-600',
  'additional': 'text-purple-600',
  'headman': 'text-emerald-600',
  
  // Кампус
  'campus-dormitory': 'text-orange-500',
  'campus-infrastructure': 'text-blue-500',
  'campus-map': 'text-green-500',
  
  // Организации
  'student': 'text-blue-500',
  'creative': 'text-purple-500',
  'sports': 'text-green-500',
  'culture': 'text-pink-500',
  'sport-orgs': 'text-green-600',
  
  // Поддержка
  'academic-scholarship': 'text-green-500',
  'social-scholarship': 'text-pink-500',
  'enhanced-academic': 'text-green-600',
  'enhanced-social': 'text-pink-600',
  'other-scholarships': 'text-blue-500',
  'university-support': 'text-blue-600',
  'moscow-support': 'text-red-500',
  'psychological': 'text-purple-500',
  'federal-projects': 'text-blue-600',
  'grants': 'text-green-600',
  'certificates': 'text-gray-600',
  
  // Контакты
  'institutes': 'text-blue-500',
  'staff': 'text-green-500',
  'departments': 'text-purple-500',
  'chairs': 'text-amber-500',
  
  // FAQ
  'questions': 'text-blue-500',
  'ask': 'text-green-500',
};

interface SectionCardProps {
  title: string;
  description?: string;
  href: string;
  className?: string;
  icon?: React.ReactNode;
  iconKey?: string; // Ключ для автоматического определения иконки
  tags?: string[]; // Кастомные теги
}

export const SectionCard: React.FC<SectionCardProps> = ({
  title,
  description,
  href,
  className,
  icon,
  iconKey,
  tags,
}) => {
  // Определяем иконку автоматически по ключу или используем переданную
  const cardIcon = icon || (iconKey && iconMap[iconKey]);
  const cardIconColor = iconKey ? iconColors[iconKey] : 'text-primary';
  
  // Определяем теги автоматически по ключу или используем переданные
  const cardTags = tags || (iconKey && tagMap[iconKey]) || [];

  const inner = (
    <Card variant="elevated" className={cn("group relative overflow-hidden h-full", className)}>
      <CardContent className="p-6">
        {/* Декоративный фон для иконки */}
        {cardIcon && (
          <div className="relative mb-4">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-50 transition-colors duration-300">
              <div className={cn("w-8 h-8 transition-transform duration-300 group-hover:scale-110", cardIconColor)}>
                {cardIcon}
              </div>
            </div>
          </div>
        )}

        {/* Заголовок */}
        <h3 className="font-heading text-xl font-semibold text-dark mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Описание */}
        {description && (
          <p className="text-sm text-gray mb-6 flex-1 leading-relaxed">
            {description}
          </p>
        )}

        {/* Теги */}
        {cardTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {cardTags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Индикатор действия */}
        <div className="mt-auto flex items-center justify-between">
          <span className="text-sm font-medium text-primary group-hover:underline">
            Подробнее
          </span>
          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Декоративный градиентный фон */}
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </CardContent>
    </Card>
  );

  const card = href === "#" ? inner : <Link href={href}>{inner}</Link>;

  return <FadeIn>{card}</FadeIn>;
}; 