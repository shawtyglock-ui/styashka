import React, { useEffect } from "react";

export default function Modal({ isOpen, onClose = () => {}, children }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Тёмный фон */}
      <div
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Содержимое модалки */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-xl text-white">
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl font-bold text-white hover:text-yellow-400 transition"
          aria-label="Закрыть"
        >
          &times;
        </button>

        {/* Заголовок и пояснение */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Оставьте заявку</h2>
          <p className="text-gray-200 text-sm sm:text-base">
            Мы свяжемся с вами в течение 15 минут и бесплатно проконсультируем.
          </p>
        </div>

        {/* Динамический контент — форма или что угодно */}
        <div>{children}</div>
      </div>
    </div>
  );
}
