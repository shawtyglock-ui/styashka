import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Prices({ onOpenModal }) {
  const basePricePerMm = 5;
  const minThickness = 30;
  const maxThickness = 100;

  const [thickness, setThickness] = useState(minThickness);
  const pricePerM2 = basePricePerMm * thickness;

  return (
    <section id="prices" className="relative py-20 px-4">
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      <div className="relative z-10 container mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-10 drop-shadow-lg">
          Рассчитайте цену стяжки
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-10"
        >
          <label htmlFor="thickness" className="block mb-4 text-lg font-semibold text-white">
            Выберите толщину стяжки (мм):
          </label>
          <input
            type="range"
            id="thickness"
            min={minThickness}
            max={maxThickness}
            value={thickness}
            onChange={(e) => setThickness(+e.target.value)}
            className="w-full h-3 rounded-lg bg-yellow-400/40"
          />
          <div className="flex justify-center mt-6 text-xl font-semibold text-white">
            <span>{thickness} мм</span>
            <span className="mx-3 text-gray-400">/</span>
            <span>{(thickness / 10).toFixed(1)} см</span>
          </div>
          <div className="mt-10 p-8 border-2 border-yellow-400 rounded-lg text-white shadow-md">
            <p className="text-2xl">
              Цена:{" "}
              <span className="font-bold text-yellow-400">
                {pricePerM2.toLocaleString()} ₽
              </span>{" "}
              / м²
            </p>
          </div>
          <button
            onClick={onOpenModal}
            className="mt-10 px-10 py-3 bg-yellow-500 text-black rounded-full font-semibold hover:bg-yellow-600 transition animate-pulse"
          >
            Заказать замер
          </button>
        </motion.div>
      </div>
    </section>
  );
}
