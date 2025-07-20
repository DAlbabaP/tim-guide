// Базовые типы для навигации
export interface NavigationItem {
  title: string
  href: string
  description?: string
  icon?: string
  children?: NavigationItem[]
}

// Типы для страниц
export interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  image?: string
}

// Типы для FAQ
export interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
  tags: string[]
  isPublished: boolean
  createdAt: Date
  updatedAt: Date
}

// Типы для контактов
export interface Contact {
  id: string
  name: string
  position: string
  department: string
  email?: string
  phone?: string
  office?: string
  isActive: boolean
}

// Типы для организаций
export interface Organization {
  id: string
  name: string
  description: string
  category: string
  contactInfo?: string
  logoUrl?: string
  isActive: boolean
}

// Типы для стипендий
export interface Scholarship {
  id: string
  name: string
  description: string
  amount: number
  requirements: string[]
  applicationDeadline?: Date
  isActive: boolean
}

// Типы для поиска
export interface SearchResult {
  id: string
  title: string
  description: string
  url: string
  type: 'page' | 'faq' | 'contact' | 'organization'
  relevance: number
}

// Типы для пользовательских вопросов
export interface UserQuestion {
  id: string
  question: string
  email: string
  status: 'pending' | 'answered' | 'closed'
  createdAt: Date
  answeredAt?: Date
  answer?: string
}

// Типы для аналитики
export interface PageView {
  id: string
  pageId: string
  userAgent: string
  ipAddress: string
  viewedAt: Date
}

export interface SearchQuery {
  id: string
  query: string
  resultsCount: number
  createdAt: Date
} 