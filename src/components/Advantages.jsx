import React from "react";
import { motion } from "framer-motion";
import { Hammer, Clock, ShieldCheck, MessageSquare } from "lucide-react";

const advantages = [
  {
    icon: <Hammer className="w-10 h-10 text-yellow-400" />,
    title: "Своя бригада",
    description: "Работаем без посредников, надёжно и точно.",
  },
  {
    icon: <Clock className="w-10 h-10 text-yellow-400" />,
    title: "В срок и без задержек",
    description: "Соблюдаем график работ, уважаем ваше время.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-yellow-400" />,
    title: "Гарантия на всё",
    description: "Официальная гарантия на материалы и работы.",
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-yellow-400" />,
    title: "Консультация бесплатно",
    description: "Поможем выбрать, посчитаем, расскажем.",
  },
];

const Advantages = () => {
  return (
    <section id="advantages" className="relative py-20 px-4">
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-white drop-shadow-lg">
          Наши преимущества
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg transform hover:scale-105"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white drop-shadow-md">
                {item.title}
              </h3>
              <p className="text-gray-200 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
