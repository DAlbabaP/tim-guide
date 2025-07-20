'use client';

import Link from "next/link";
import { cn } from "@/utils/cn";
import FadeIn from "@/components/ui/fade-in";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface OrganizationCardProps {
  slug: string;
  name: string;
  shortDescription: string;
  category: string;
  isFeatured?: boolean;
  logo?: string;
  className?: string;
}

const categoryColors = {
  student: 'bg-blue-500',
  creative: 'bg-purple-500',
  sports: 'bg-green-500',
  culture: 'bg-pink-500',
  'sport-orgs': 'bg-green-600',
} as const;

const categoryLabels = {
  student: 'Студенческие',
  creative: 'Творческие',
  sports: 'Спортивные',
  culture: 'Культура',
  'sport-orgs': 'Спорторги',
} as const;

const categoryRus = {
  student: 'Студенческие',
  creative: 'Творческие',
  sports: 'Спортивные',
  culture: 'Культура',
  'sport-orgs': 'Спорторги',
} as const;

const categoryBadgeVariants = {
  student: 'primary',
  creative: 'info', 
  sports: 'success',
  culture: 'warning',
  'sport-orgs': 'success',
} as const;

export function OrganizationCard({
  slug,
  name,
  shortDescription,
  category,
  isFeatured = false,
  logo,
  className,
}: OrganizationCardProps) {
  const inner = (
    <div
      className={cn(
        "group relative flex rounded-2xl border border-gray-200 bg-white shadow-soft hover:shadow-strong hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full min-h-[160px]",
        isFeatured && "ring-2 ring-primary/20",
        className
      )}
    >
      {/* Логотип слева - на всю высоту */}
      <div className="flex-shrink-0 w-40 h-full relative">
        {logo ? (
          // Если есть логотип - показываем его
          <Image
            src={logo}
            alt={`Логотип ${name}`}
            fill
            sizes="160px"
            className="object-cover rounded-l-2xl"
          />
        ) : (
          // Если нет логотипа - показываем стилизованный логотип
          <div className="w-full h-full bg-gradient-to-br from-primary to-secondary rounded-l-2xl flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-xl font-bold mb-1">
                {name.split(' ').map(word => word[0]).join('').slice(0, 3)}
              </div>
              <div className="text-xs opacity-80">РГАУ-МСХА</div>
            </div>
          </div>
        )}
      </div>

      {/* Контент справа */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          {/* Бейджик над названием */}
          <div className="mb-2">
            <Badge variant={categoryBadgeVariants[category as keyof typeof categoryBadgeVariants]} className="text-xs px-2 py-1">
              {categoryRus[category as keyof typeof categoryRus] ?? category}
            </Badge>
          </div>
          
          <h3 className="font-heading text-lg font-semibold text-dark mb-2 line-clamp-2">
            {name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {shortDescription}
          </p>
        </div>
        
        <div className="mt-3 flex items-center justify-between">
          <span className="text-primary group-hover:text-primary-dark font-medium text-sm transition-colors">
            Подробнее
          </span>
          <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
            <ChevronRight className="w-3 h-3 text-gray-500 group-hover:text-primary transition-colors" />
          </div>
        </div>
      </div>

      {/* Декоративный градиентный фон */}
      <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );

  return (
    <FadeIn>
      <Link href={`/organizations/${slug}`}>
        {inner}
      </Link>
    </FadeIn>
  );
} 