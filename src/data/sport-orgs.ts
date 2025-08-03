export interface SportOrg {
  id: string;
  fullName: string;
  position: string;
  institute: string;
  contactLink: string;
  contactType: 'vk' | 'telegram';
  photo?: string;
}

export const sportOrgs: SportOrg[] = [
  {
    id: '1',
    fullName: 'Шаповалов Кирилл Александрович',
    position: 'Спорторг Академии',
    institute: 'Академия РГАУ-МСХА',
    contactLink: '@shapovalov_66',
    contactType: 'telegram'
  },
  {
    id: '2',
    fullName: 'Назаров Александр Сергеевич',
    position: 'Спорторг института',
    institute: 'Агробиотехнологий',
    contactLink: 'https://vk.com/xol04',
    contactType: 'vk'
  },
  {
    id: '3',
    fullName: 'Тимофеева Полина Павловна',
    position: 'Спорторг института',
    institute: 'Садоводства и ландшафтной архитектуры',
    contactLink: 'https://vk.com/omg_ucrazy',
    contactType: 'vk'
  },
  {
    id: '4',
    fullName: 'Аникин Дмитрий Александрович',
    position: 'Спорторг института',
    institute: 'Технологический институт',
    contactLink: 'https://vk.com/anijr7',
    contactType: 'vk'
  },
  {
    id: '5',
    fullName: 'Кочев Артём Андреевич',
    position: 'Спорторг института',
    institute: 'Мелиорации, водного хозяйства и строительства имени А.Н. Костякова',
    contactLink: '@arta_temka',
    contactType: 'telegram'
  },
  {
    id: '6',
    fullName: 'Зима Арина Александровна',
    position: 'Спорторг института',
    institute: 'Механики и энергетики имени В.П. Горячкина',
    contactLink: 'https://t.me/kisarinazi',
    contactType: 'telegram'
  },
  {
    id: '7',
    fullName: 'Немова Виктория Валерьевна',
    position: 'Спорторг института',
    institute: 'Зоотехнии и биологии',
    contactLink: 'https://vk.com/vnemova',
    contactType: 'vk'
  },
  {
    id: '8',
    fullName: 'Верещако Кристина Максимовна',
    position: 'Спорторг института',
    institute: 'Экономики и управления АПК',
    contactLink: '@vrkk224',
    contactType: 'telegram'
  },
  {
    id: '9',
    fullName: 'Юсбаева Карина Тимуровна',
    position: 'Спорторг колледжа',
    institute: 'Технологический колледж',
    contactLink: 'https://vk.com/karinakonnik',
    contactType: 'vk'
  },
  {
    id: '10',
    fullName: 'Дмитрий Мичиславович Лотов',
    position: 'Заместитель спорторг института',
    institute: 'Зоотехнии и биологии',
    contactLink: 'https://vk.com/summer_560',
    contactType: 'vk'
  },
  {
    id: '11',
    fullName: 'Чилингарян Айк Левонович',
    position: 'Заместитель спорторг института',
    institute: 'Мелиорации, водного хозяйства и строительства имени А.Н. Костякова',
    contactLink: 'https://vk.com/0w_ner',
    contactType: 'vk'
  },
  {
    id: '12',
    fullName: 'Насиров Фёдор Имамвердиевич',
    position: 'Заместитель спорторга института',
    institute: 'Агробиотехнологий',
    contactLink: 'https://vk.com/fedos2712',
    contactType: 'vk'
  },
  {
    id: '13',
    fullName: 'Макаров Андрей Николаевич',
    position: 'Заместитель спорторга института',
    institute: 'Агробиотехнологий',
    contactLink: 'https://t.me/andreymakarovfifootball',
    contactType: 'telegram'
  },
  {
    id: '14',
    fullName: 'Жуковский Ярослав Евгеньевич',
    position: 'Заместитель спорторга института',
    institute: 'Агробиотехнологий',
    contactLink: '@Espada051',
    contactType: 'telegram'
  },
  {
    id: '15',
    fullName: 'Мурлин Глеб Вадимович',
    position: 'Заместитель спорторга института',
    institute: 'Технологический колледж',
    contactLink: '@kentzidana (вк и тг)',
    contactType: 'telegram'
  },
  {
    id: '16',
    fullName: 'Жумаева Василиса Дмитриевна',
    position: 'Заместитель спорторга института',
    institute: 'Технологический колледж',
    contactLink: 'https://vk.com/vasssutka',
    contactType: 'vk'
  },
  {
    id: '17',
    fullName: 'Дружинина Ольга Владимировна',
    position: 'Заместитель спорторга института',
    institute: 'Садоводства и ландшафтной архитектуры',
    contactLink: '@Olylysik',
    contactType: 'telegram'
  },
  {
    id: '18',
    fullName: 'Косогорова Стефания Викторовна',
    position: 'Заместитель спорторга института',
    institute: 'Механики и энергетики имени В.П. Горячкина',
    contactLink: '@sstefanka',
    contactType: 'telegram'
  },
  {
    id: '19',
    fullName: 'Лангаршоев Зулфикор Мухторович',
    position: 'Заместитель спорторга колледжа',
    institute: 'Технологический колледж',
    contactLink: 'https://vk.com/zulfiq228',
    contactType: 'vk'
  }
];

// Группировка по институтам
export const getSportOrgsByInstitute = () => {
  const grouped = sportOrgs.reduce((acc, org) => {
    if (!acc[org.institute]) {
      acc[org.institute] = [];
    }
    acc[org.institute].push(org);
    return acc;
  }, {} as Record<string, SportOrg[]>);

  // Сортируем внутри каждого института: сначала спорторги, потом заместители
  Object.keys(grouped).forEach(institute => {
    grouped[institute].sort((a, b) => {
      const aIsMain = a.position.includes('Спорторг') && !a.position.includes('Заместитель');
      const bIsMain = b.position.includes('Спорторг') && !b.position.includes('Заместитель');
      if (aIsMain && !bIsMain) return -1;
      if (!aIsMain && bIsMain) return 1;
      return a.fullName.localeCompare(b.fullName);
    });
  });

  // Сортируем институты: академия наверх, колледж в конец, остальные по алфавиту
  const sortedInstitutes = Object.keys(grouped).sort((a, b) => {
    // Академия всегда наверху
    if (a.includes('Академия') || a.includes('Костякова')) return -1;
    if (b.includes('Академия') || b.includes('Костякова')) return 1;
    
    // Колледж всегда в конце
    if (a.includes('Колледж')) return 1;
    if (b.includes('Колледж')) return -1;
    
    // Остальные по алфавиту
    return a.localeCompare(b);
  });

  const sortedGrouped: Record<string, SportOrg[]> = {};
  sortedInstitutes.forEach(institute => {
    sortedGrouped[institute] = grouped[institute];
  });

  return sortedGrouped;
};

// Получение уникальных институтов
export const getUniqueInstitutes = () => {
  return Array.from(new Set(sportOrgs.map(org => org.institute)));
};

// Получение спорторгов по должности
export const getSportOrgsByPosition = (position: string) => {
  return sportOrgs.filter(org => org.position === position);
}; 