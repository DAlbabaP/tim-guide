'use client';

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Image, ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoGalleryProps {
  photos?: { src?: string; alt?: string }[];
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3); // По умолчанию 3 для десктопа
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Если нет фото — показываем 3 плейсхолдера
  const items: { src?: string; alt?: string }[] = photos.length > 0 ? photos : [1, 2, 3].map((i) => ({ alt: `Фото ${i}` }));

  const totalItems = items.length;

  // Определяем количество фото в зависимости от размера экрана
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) { // sm breakpoint - мобильные
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) { // lg breakpoint - планшеты
        setItemsPerView(2);
      } else { // lg и больше - десктоп
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, totalItems - itemsPerView);

  // Обработчики навигации
  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  }, [maxIndex]);

  // Обработчики свайпа только для мобильных устройств
  const handleTouchStart = (e: React.TouchEvent) => {
    // Проверяем, что это мобильное устройство (ширина экрана < 1024px)
    if (window.innerWidth >= 1024) return;
    
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setTranslateX(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    // Проверяем, что это мобильное устройство
    if (window.innerWidth >= 1024) return;
    
    if (!isDragging) return;
    e.preventDefault();
    
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    // Проверяем, что это мобильное устройство
    if (window.innerWidth >= 1024) return;
    
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Определяем направление свайпа
    if (translateX > 50 && currentIndex > 0) {
      goToPrevious();
    } else if (translateX < -50 && currentIndex < maxIndex) {
      goToNext();
    }
    
    setTranslateX(0);
  };

  // Сброс состояния при изменении фото
  useEffect(() => {
    setCurrentIndex(0);
  }, [photos]);

  // Вычисляем смещение для слайдера
  const getSlideOffset = () => {
    // Вычисляем ширину одного элемента с учетом отступов
    const itemWidth = 100 / itemsPerView;
    const gapWidth = 16; // gap-4 = 16px
    const gapPercentage = (gapWidth / window.innerWidth) * 100;
    
    // Общая ширина элемента + отступ
    const totalItemWidth = itemWidth + gapPercentage;
    
    return currentIndex * totalItemWidth;
  };

  return (
    <div className="w-full relative group">
      {/* Кнопки навигации */}
      {currentIndex > 0 && (
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 md:opacity-100"
          aria-label="Предыдущее фото"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}
      
      {currentIndex < maxIndex && (
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 md:opacity-100"
          aria-label="Следующее фото"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      {/* Контейнер карусели */}
      <div 
        ref={containerRef}
        className="w-full overflow-hidden"
      >
        <div
          ref={carouselRef}
          className="flex gap-4 transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${getSlideOffset()}%)`
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {items.map((photo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-10.666px)] h-64 bg-gray-100 rounded-lg flex items-center justify-center relative shadow-sm"
            >
              {photo.src ? (
                <img
                  src={photo.src}
                  alt={photo.alt || `Фото ${idx + 1}`}
                  className="object-cover w-full h-full rounded-lg pointer-events-none"
                  draggable={false}
                />
              ) : (
                <div className="text-center text-gray-400 flex flex-col items-center justify-center w-full h-full pointer-events-none">
                  <Image className="w-12 h-12 mb-2" />
                  <span className="text-sm">{photo.alt || `Фото ${idx + 1}`}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Индикаторы */}
      {totalItems > itemsPerView && (
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === currentIndex 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Перейти к фото ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoGallery; 