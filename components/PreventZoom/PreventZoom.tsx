"use client";

import { useEffect } from "react";

export default function PreventZoom() {
  useEffect(() => {
    // Проверяем, используется ли мобильное устройство
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!isMobile) {
      return; // Если не мобильное устройство, ничего не делаем
    }

    // Запрет масштабирования на сенсорных устройствах
    const preventTouchZoom = (event: TouchEvent) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };

    // Запрет жестов масштабирования
    const preventGestureZoom = (event: Event) => {
      event.preventDefault();
    };

    // Запрет двойного нажатия (двойной тап)
    let lastTouchEnd = 0;
    const preventDoubleTapZoom = (event: TouchEvent) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    };

    // Добавляем обработчики событий
    document.addEventListener("touchstart", preventTouchZoom, {
      passive: false,
    });
    document.addEventListener("gesturestart", preventGestureZoom);
    document.addEventListener("touchend", preventDoubleTapZoom, {
      passive: false,
    });

    // Удаляем обработчики при размонтировании компонента
    return () => {
      document.removeEventListener("touchstart", preventTouchZoom);
      document.removeEventListener("gesturestart", preventGestureZoom);
      document.removeEventListener("touchend", preventDoubleTapZoom);
    };
  }, []);

  return null;
}
