export interface OrganizationDetails {
  slug: string;
  name: string;
  shortDescription: string;
  leaderName: string;
  leaderPosition: string;
  leaderQuote: string;
  mission: string;
  events: { title: string; description: string }[];
  requirements: string[];
  howToJoin: string;
  socials: { platform: string; url: string }[];
  banner?: string; // path in public
  photo?: string; // path in public 
  logo?: string; // path in public 
  gallery?: string[]; // extra photos
  category: string; // e.g., 'student', 'creative'
  isFeatured?: boolean;
}

export const organizations: OrganizationDetails[] = [
  {
    slug: 'spk',
    name: 'Студенческие Парламентские Клубы',
    shortDescription: 'Платформа для развития молодых лидеров и будущих политиков.',
    leaderName: 'Мектиев Руслан Анарович',
    leaderPosition: 'Председатель Тимириазевского клуба',
    leaderQuote: 'Наша организация создаёт уникальную площадку для развития будущих лидеров. Присоединяйтесь, чтобы вместе создавать будущее политической культуры России!',
    mission: 'Развитие политической культуры и гражданской активности через практический опыт парламентской деятельности.',
    events: [
      { title: 'Дебаты и дискуссии', description: 'Обсуждение актуальных политических вопросов.' },
      { title: 'Мастер-классы', description: 'От действующих политиков и экспертов.' },
      { title: 'Симуляции заседаний', description: 'Практика парламентской деятельности.' },
      { title: 'Networking', description: 'Общение с единомышленниками.' },
    ],
    requirements: [
      'Возраст от 18 до 25 лет',
      'Статус студента',
      'Интерес к политике и общественной деятельности',
      'Готовность участвовать в мероприятиях клуба',
      'Умение работать в команде',
    ],
    howToJoin: 'Свяжитесь с нами через соцсети или заполните форму на мероприятии клуба – мы расскажем о ближайших встречах и возможностях участия.',
    socials: [
      { platform: 'ВКонтакте', url: '#' },
      { platform: 'Telegram', url: '#' },
    ],
    banner: '/tim-guide/images/student-life/spk/banner1.png',
    photo: '/tim-guide/images/student-life/spk/leader.jpg',
    logo: '/tim-guide/images/student-life/spk/logo.png',
    isFeatured: true,
    gallery: [
      '/tim-guide/images/student-life/spk/photo1.jpg',
      '/tim-guide/images/student-life/spk/photo2.jpg',
      '/tim-guide/images/student-life/spk/photo3.jpg',
    ],
    category: 'student',
  },
  {
    /* обязательные */
    slug: 'cybertimka',
    name: 'КиберТимка',
    shortDescription:
      'Сборная РГАУ-МСХА по киберспорту. Тренируемся, участвуем в лигах и продвигаем киберкультуру.',
    leaderName: 'Лидия Кузьмина',
    leaderPosition: 'Руководитель сборной',
    leaderQuote:
      '«Только осуществляя свои лучшие мечты, человечество продвигается вперёд» — К. А. Тимирязев',
    mission:
      'Развивать киберспортивное движение в университете, объединять студентов за любимыми играми и продвигать здоровую игровую культуру.',

    /* мероприятия */
    events: [
      { title: 'Тренировки', description: 'Еженедельные тим-праки и анализ матчей.' },
      { title: 'Универ-лиги', description: 'Участие в студенческих чемпионатах.' },
      { title: 'Мастер-классы', description: 'Приглашённые про-игроки и тренеры.' },
      { title: 'LAN-вечера', description: 'Дружеские турниры и просмотр финалов.' },
    ],

    /* требования, вступление, соцсети */
    requirements: [
      'Статус студента РГАУ-МСХА',
      'Желание играть командно',
      'Наличие Steam / Battle.net / Riot-аккаунта',
    ],
    howToJoin:
      'Заполни форму в VK-сообществе или приходи на открытую тренировку – мы расскажем о составе и расписании.',
    socials: [
      { platform: 'ВКонтакте', url: 'https://vk.com/cybertimka' },
      { platform: 'Discord',   url: 'https://discord.gg/example' },
    ],

    /* изображения */
    banner:  '/images/student-life/cybertimka/banner1.jpg',
    photo:   '/images/student-life/cybertimka/leader.jpg',
    logo:    '/images/student-life/cybertimka/logo.jpg',
    gallery: [
      '/images/student-life/cybertimka/photo1.jpg',
      '/images/student-life/cybertimka/photo2.jpg',
      '/images/student-life/cybertimka/photo3.jpg',
    ],

    /* категория (для фильтров в будущем) */
    category: 'sports',
  },
]; 