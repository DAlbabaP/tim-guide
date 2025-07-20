# UI Components Documentation

## Обзор

Эта библиотека компонентов построена на основе Tailwind CSS и предоставляет консистентный интерфейс для всего приложения ТимГид.

## Компоненты

### Button

Универсальный компонент кнопки с различными вариантами стилизации.

```tsx
import { Button } from '@/components/ui/button';

// Основная кнопка
<Button variant="primary" size="md">
  Нажми меня
</Button>

// Вторичная кнопка
<Button variant="secondary" size="lg">
  Вторичная кнопка
</Button>

// Контурная кнопка
<Button variant="outline" size="sm">
  Контурная кнопка
</Button>

// Призрачная кнопка
<Button variant="ghost">
  Призрачная кнопка
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' (по умолчанию: 'primary')
- `size`: 'sm' | 'md' | 'lg' (по умолчанию: 'md')
- `disabled`: boolean
- Все стандартные HTML атрибуты кнопки

### Card

Компонент карточки с различными вариантами отображения.

```tsx
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

<Card variant="elevated">
  <CardHeader>
    <h3>Заголовок карточки</h3>
  </CardHeader>
  <CardContent>
    <p>Содержимое карточки</p>
  </CardContent>
  <CardFooter>
    <Button>Действие</Button>
  </CardFooter>
</Card>
```

**Props:**
- `variant`: 'default' | 'elevated' | 'outlined' (по умолчанию: 'default')

### Input

Компонент поля ввода с поддержкой иконок.

```tsx
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

// Обычное поле ввода
<Input placeholder="Введите текст" />

// Поле поиска с иконкой
<Input 
  variant="search"
  leftIcon={<Search className="h-5 w-5" />}
  placeholder="Поиск..."
/>

// Поле с ошибкой
<Input variant="error" placeholder="Ошибка валидации" />
```

**Props:**
- `variant`: 'default' | 'search' | 'error' (по умолчанию: 'default')
- `size`: 'sm' | 'md' | 'lg' (по умолчанию: 'md')
- `leftIcon`: React.ReactNode
- `rightIcon`: React.ReactNode
- Все стандартные HTML атрибуты input

### Badge

Компонент для отображения тегов и статусов.

```tsx
import { Badge } from '@/components/ui/badge';

<Badge variant="primary">Основной</Badge>
<Badge variant="success">Успех</Badge>
<Badge variant="warning">Предупреждение</Badge>
<Badge variant="error">Ошибка</Badge>
<Badge variant="info">Информация</Badge>
<Badge variant="neutral">Нейтральный</Badge>
```

**Props:**
- `variant`: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral' (по умолчанию: 'primary')

### FadeIn

Компонент для анимации появления элементов при скролле.

```tsx
import FadeIn from '@/components/ui/fade-in';

<FadeIn>
  <div>Этот элемент появится с анимацией</div>
</FadeIn>
```

## Цветовая палитра

### Основные цвета
- `primary`: Корпоративный зеленый (#3d7648)
- `secondary`: Вторичный цвет (#d1cdca)
- `accent`: Акцентный цвет (#f2e9d8)
- `dark`: Темный цвет (#3E3C2C)

### Семантические цвета
- `success`: Успех (#22c55e)
- `warning`: Предупреждение (#f59e0b)
- `error`: Ошибка (#ef4444)
- `info`: Информация (#3b82f6)

### Серые оттенки
- `gray`: Основной серый (#898079)
- `gray-50` до `gray-900`: Полная палитра серых

## Типографика

### Шрифты
- `font-sans`: Inter, system-ui, sans-serif
- `font-heading`: Montserrat, system-ui, sans-serif
- `font-display`: Montserrat, system-ui, sans-serif

### Размеры
- `text-xs` до `text-9xl`: Полная шкала размеров
- Каждый размер имеет оптимизированный line-height

## Анимации

### Встроенные анимации
- `animate-fade-in-up`
- `animate-fade-in-left`
- `animate-fade-in-right`
- `animate-scale-in`
- `animate-slide-in-bottom`

### Задержки
- `delay-200` до `delay-1000`

## Тени

- `shadow-soft`: Мягкая тень
- `shadow-medium`: Средняя тень
- `shadow-strong`: Сильная тень

## Использование

1. Импортируйте нужные компоненты
2. Используйте Tailwind классы для кастомизации
3. Следуйте принципам дизайн-системы
4. Тестируйте на разных устройствах

## Принципы

- **Консистентность**: Все компоненты следуют единому стилю
- **Доступность**: Поддержка клавиатурной навигации и screen readers
- **Производительность**: Оптимизированные CSS классы
- **Масштабируемость**: Легко расширяемая система 