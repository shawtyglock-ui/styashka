import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Алексей, Казань",
    avatar: "https://via.placeholder.com/80",
    text: "Сделали стяжку быстро и качественно. Уже через 3 дня настилали ламинат. Рекомендую!",
  },
  {
    id: 2,
    name: "Мария, ЖК Арт-Сити",
    avatar: "https://via.placeholder.com/80",
    text: "Очень довольна! Приехали на замер в тот же день, всё объяснили, цена прозрачная.",
  },
  {
    id: 3,
    name: "ИП Сафин",
    avatar: "https://via.placeholder.com/80",
    text: "Оперативно залили 150 м² в офисе, работы прошли чётко по срокам. Благодарю!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 px-4">
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white drop-shadow-lg">
          Отзывы клиентов
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 text-center"
            >
              <img
                src={review.avatar}
                alt={review.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-yellow-400"
              />
              <p className="text-gray-200 italic mb-4">“{review.text}”</p>
              <p className="font-semibold text-white">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
