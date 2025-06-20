import { motion } from "framer-motion";
import {
  Building2,
  Castle,
  Warehouse,
  Layers3,
  Flame,
  Ruler,
} from "lucide-react";

const services = [
  {
    icon: <Building2 className="w-10 h-10 text-yellow-400" />,
    title: "Стяжка в квартирах",
    description: "Ровная стяжка по маякам в новостройках и вторичке.",
  },
  {
    icon: <Castle className="w-10 h-10 text-yellow-400" />,
    title: "Частные дома и коттеджи",
    description: "Сложные уклоны, утеплители, толщина от 5 см и выше.",
  },
  {
    icon: <Warehouse className="w-10 h-10 text-yellow-400" />,
    title: "Стяжка на больших объектах",
    description: "Склады, парковки, производственные площади, логистика.",
  },
  {
    icon: <Layers3 className="w-10 h-10 text-yellow-400" />,
    title: "Фиброволокно и армирование",
    description: "Повышенная прочность без трещин — проверено на практике.",
  },
  {
    icon: <Flame className="w-10 h-10 text-yellow-400" />,
    title: "Тёплый пол / утеплитель",
    description: "Работаем по пеноплексу, кабелю, водяному полу, технониколь.",
  },
  {
    icon: <Ruler className="w-10 h-10 text-yellow-400" />,
    title: "Бесплатный выезд и замер",
    description: "Точно рассчитываем объём и стоимость на месте.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 px-4">
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
          Наши услуги
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:scale-105 text-white text-left"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-200 text-sm sm:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
