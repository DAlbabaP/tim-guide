'use client';

import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  // Проверяем, находимся ли мы в браузере и поддерживается ли framer-motion
  const isClient = typeof window !== 'undefined';
  const isStaticExport = process.env.NODE_ENV === 'production' && typeof window === 'undefined';

  // Динамически импортируем framer-motion только на клиенте
  let shouldReduce = false;
  if (isClient && !isStaticExport) {
    const { useReducedMotion } = require('framer-motion');
    shouldReduce = useReducedMotion();
  }

  // Если это статический экспорт или сервер, возвращаем детей без анимации
  if (isStaticExport || !isClient) {
    return <div className="min-h-screen">{children}</div>;
  }

  // Если пользователь предпочитает минимум движения, не анимируем.
  if (shouldReduce) {
    return <div className="min-h-screen">{children}</div>;
  }

  const { AnimatePresence, motion } = require('framer-motion');

  // Если пользователь предпочитает минимум движения, не анимируем.
  if (shouldReduce) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
