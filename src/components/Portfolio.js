import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    before: "https://via.placeholder.com/400x250?text=До",
    after: "https://via.placeholder.com/400x250?text=После",
    title: "Квартира в Казани",
    description: "45 м², срок — 2 дня. Стяжка пола + гидроизоляция.",
  },
  {
    id: 2,
    before: "https://via.placeholder.com/400x250?text=До",
    after: "https://via.placeholder.com/400x250?text=После",
    title: "Офисное помещение",
    description: "120 м², выполнено за 3 дня с гарантией.",
  },
  {
    id: 3,
    before: "https://via.placeholder.com/400x250?text=До",
    after: "https://via.placeholder.com/400x250?text=После",
    title: "Частный дом",
    description: "60 м², выполнено с армированием и отделкой.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 px-4">
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white drop-shadow-lg">
          Наши работы
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          {projects.map(({ id, before, after, title, description }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="flex">
                <img src={before} alt="до" className="w-1/2 object-cover" />
                <img src={after} alt="после" className="w-1/2 object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-white drop-shadow-md">
                  {title}
                </h3>
                <p className="text-gray-200 text-sm">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
