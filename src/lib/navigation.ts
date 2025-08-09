import { NavigationItem } from '@/types'

export const mainNavigation: NavigationItem[] = [
  {
    title: 'Поступление',
    href: '/admission',
    description: 'Полный путь от подачи документов до адаптации',
    children: [
      {
        title: 'Подача документов',
        href: '/admission/documents',
        description: 'Сроки, документы и процедуры подачи'
      },
      {
        title: 'Конкурсный отбор',
        href: '/admission/selection',
        description: 'Рейтинги и система отбора'
      },
      {
        title: 'Зачисление',
        href: '/admission/enrollment',
        description: 'Финальный этап поступления'
      },
      {
        title: 'Заселение в общежитие',
        href: '/admission/dormitory',
        description: 'Получение места и заселение'
      },
      {
        title: 'Адаптация первокурсника',
        href: '/admission/adaptation',
        description: 'Первые шаги в университете'
      }
    ]
  },
  {
    title: 'Учёба',
    href: '/study',
    description: 'Всё об учебном процессе и студенческой жизни',
    children: [
      {
        title: 'Информационные сервисы',
        href: '/study/services',
        description: 'Электронные сервисы университета'
      },
      {
        title: 'Академический отпуск и отчисление',
        href: '/study/academic-leave',
        description: 'Процедуры и документы'
      },
      {
        title: 'Военный учебный центр',
        href: '/study/military-center',
        description: 'Военная подготовка'
      },
      {
        title: 'Отсрочка от армии',
        href: '/study/deferment',
        description: 'Оформление отсрочки'
      },
      {
        title: 'Практики и трудоустройство',
        href: '/study/practice',
        description: 'Производственная практика'
      },
      {
        title: 'Библиотека',
        href: '/study/library',
        description: 'Библиотечные ресурсы'
      },
      {
        title: 'Дополнительное обучение',
        href: '/study/additional',
        description: 'Курсы и программы'
      },
      {
        title: 'Староста группы',
        href: '/study/headman',
        description: 'Роль и обязанности старосты'
      }
    ]
  },
  {
    title: 'Кампус',
    href: '/campus',
    description: 'Общежития, инфраструктура и карта кампуса',
    children: [
      {
        title: 'Общежитие и проживание',
        href: '/campus/dormitory',
        description: 'Условия проживания'
      },
      {
        title: 'Инфраструктура кампуса',
        href: '/campus/infrastructure',
        description: 'Магазины, транспорт, услуги'
      },
      {
        title: 'Карта кампуса',
        href: '/campus/map',
        description: 'Интерактивная карта'
      }
    ]
  },
  {
    title: 'Студенческая жизнь',
    href: '/student-life',
    description: 'Объединения, активности и мероприятия студентов',
    children: [
      {
        title: 'Студенческие организации',
        href: '/student-life/student',
        description: 'Активные объединения'
      },
      {
        title: 'Творческие студии',
        href: '/student-life/creative',
        description: 'Творческие коллективы'
      },
      {
        title: 'Спортивные секции',
        href: '/student-life/sports',
        description: 'Спортивные секции и команды'
      },
      {
        title: 'Культорги',
        href: '/student-life/culture',
        description: 'Страница культоргов институтов',
      },
      {
        title: 'Спорторги',
        href: '/student-life/sport-orgs',
        description: 'Страница спорторгов институтов',
      },
      {
        title: 'Мероприятия',
        href: '/student-life/events',
        description: 'Календарь и анонсы событий'
      }
    ]
  },
  {
    title: 'Наука',
    href: '/science',
    description: 'Научная деятельность, проекты и инициативы'
  },
  {
    title: 'Поддержка и стипендии',
    href: '/support',
    description: 'Финансовая поддержка и социальные льготы',
    children: [
      {
        title: 'Гос. академическая стипендия',
        href: '/support/academic-scholarship',
        description: 'Основная стипендия'
      },
      {
        title: 'Гос. социальная стипендия',
        href: '/support/social-scholarship',
        description: 'Социальная поддержка'
      },
      {
        title: 'Гос. повышенная академическая стипендия',
        href: '/support/enhanced-academic',
        description: 'Повышенная стипендия'
      },
      {
        title: 'Гос. повышенная социальная стипендия',
        href: '/support/enhanced-social',
        description: 'Повышенная социальная стипендия'
      },
      {
        title: 'Другие виды стипендий',
        href: '/support/other-scholarships',
        description: 'Дополнительные стипендии'
      },
      {
        title: 'Материальная поддержка университета',
        href: '/support/university-support',
        description: 'Внутривузовская поддержка'
      },
      {
        title: 'Материальная поддержка Правительства Москвы',
        href: '/support/moscow-support',
        description: 'Городская поддержка'
      },
      {
        title: 'Социально-психологическая служба',
        href: '/support/psychological',
        description: 'Психологическая помощь'
      },
      {
        title: 'Федеральные проекты',
        href: '/support/federal-projects',
        description: 'Государственные программы'
      },
      {
        title: 'Гранты',
        href: '/support/grants',
        description: 'Грантовая поддержка'
      },
      {
        title: 'Заказ справок',
        href: '/support/certificates',
        description: 'Оформление документов'
      }
    ]
  },
  {
    title: 'Контакты',
    href: '/contacts',
    description: 'Свяжитесь с нужными подразделениями',
    children: [
      {
        title: 'Дирекции институтов',
        href: '/contacts/institutes',
        description: 'Контакты институтов'
      },
      {
        title: 'Сотрудники дирекции',
        href: '/contacts/staff',
        description: 'Персонал университета'
      },
      {
        title: 'Структурные подразделения',
        href: '/contacts/departments',
        description: 'Административные отделы'
      },
      {
        title: 'Кафедры университета',
        href: '/contacts/chairs',
        description: 'Академические кафедры'
      }
    ]
  },
  {
    title: 'FAQ',
    href: '/faq',
    description: 'Часто задаваемые вопросы',
    children: [
      {
        title: 'Часто задаваемые вопросы',
        href: '/faq/questions',
        description: 'Популярные вопросы'
      },
      {
        title: 'Задать вопрос',
        href: '/faq/ask',
        description: 'Форма обратной связи'
      }
    ]
  }
]

// Функция для получения хлебных крошек
export function getBreadcrumbs(pathname: string): NavigationItem[] {
  const segments = pathname.split('/').filter(Boolean)
  const breadcrumbs: NavigationItem[] = []
  
  let currentPath = ''
  
  for (const segment of segments) {
    currentPath += `/${segment}`
    
    // Ищем соответствующий элемент навигации
    const findNavigationItem = (items: NavigationItem[], path: string): NavigationItem | null => {
      for (const item of items) {
        if (item.href === path) {
          return item
        }
        if (item.children) {
          const found = findNavigationItem(item.children, path)
          if (found) return found
        }
      }
      return null
    }
    
    const item = findNavigationItem(mainNavigation, currentPath)
    if (item) {
      breadcrumbs.push(item)
    }
  }
  
  return breadcrumbs
}

// Функция для поиска по навигации
export function searchNavigation(query: string): NavigationItem[] {
  const results: NavigationItem[] = []
  
  const searchInItems = (items: NavigationItem[]) => {
    for (const item of items) {
      if (
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description?.toLowerCase().includes(query.toLowerCase())
      ) {
        results.push(item)
      }
      if (item.children) {
        searchInItems(item.children)
      }
    }
  }
  
  searchInItems(mainNavigation)
  return results
} 