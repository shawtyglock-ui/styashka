import React from "react";

export default function FloatingCalcButton() {
  const scrollToPrices = () => {
    const prices = document.getElementById("prices");
    if (prices) {
      prices.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Десктоп-версия */}
      <div className="hidden lg:block fixed bottom-8 right-8 z-50">
        <div className="bg-white shadow-xl p-4 rounded-xl border border-blue-200">
          <p className="text-sm font-semibold text-gray-800 mb-2">
            Рассчитайте стоимость
          </p>
          <button
            onClick={scrollToPrices}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Открыть калькулятор
          </button>
        </div>
      </div>

      {/* Мобильная кнопка */}
      <div className="lg:hidden fixed bottom-4 inset-x-0 px-6 z-50">
        <button
          onClick={scrollToPrices}
          className="w-full bg-blue-600 text-white py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition"
        >
          💰 Рассчитать стоимость
        </button>
      </div>
    </>
  );
}
