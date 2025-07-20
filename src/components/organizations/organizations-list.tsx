'use client';

import { OrganizationCard } from './organization-card';
import { Chip } from '@/components/ui/chip';
import { organizations } from '@/data/organizations';
import { useState } from 'react';

const catVariant = {
  student: 'primary',
  creative: 'info',
  sports: 'success',
  culture: 'warning',
  'sport-orgs': 'success',
} as const;

const catRus: Record<string,string> = {
  student: 'Студенческие',
  creative: 'Творческие',
  sports: 'Спортивные',
  culture: 'Культура',
  'sport-orgs': 'Спорторги',
};

export function OrganizationsList() {
  const uniqueCategories = Array.from(new Set(organizations.map((o) => o.category))).sort();
  const [category, setCategory] = useState<string | 'all'>('all');
  const filteredBase = organizations.filter((o) =>
    category === 'all' ? true : o.category === category
  );

  const filtered = [
    ...filteredBase.filter((o) => o.isFeatured),
    ...filteredBase.filter((o) => !o.isFeatured).sort((a, b) => a.name.localeCompare(b.name)),
  ];

  const featured = organizations.filter((o) => o.isFeatured);

  return (
    <>
      {/* Featured */}
      {featured.length > 0 && (
        <div className="mb-10 w-full">
          <h2 className="font-heading text-2xl text-dark mb-4">Избранные организации</h2>
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            {featured.map((org) => (
              <OrganizationCard
                key={org.slug + '-featured'}
                slug={org.slug}
                name={org.name}
                shortDescription={org.shortDescription}
                category={org.category}
                isFeatured={org.isFeatured}
                logo={org.logo}
              />
            ))}
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 pt-2 mb-8">
        <Chip label="Все" active={category === 'all'} onClick={() => setCategory('all')} />
        {uniqueCategories.map((cat) => (
          <Chip
            key={cat}
            label={catRus[cat] ?? cat}
            active={category === cat}
            onClick={() => setCategory(cat)}
            variant={catVariant[cat as keyof typeof catVariant] ?? 'neutral'}
          />
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        {filtered.map((org) => (
          <OrganizationCard
            key={org.slug}
            slug={org.slug}
            name={org.name}
            shortDescription={org.shortDescription}
            category={org.category}
            isFeatured={org.isFeatured}
            logo={org.logo}
          />
        ))}
      </div>
    </>
  );
} 