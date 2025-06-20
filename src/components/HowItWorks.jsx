import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, Ruler, Wrench, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <PhoneCall className="w-10 h-10 text-yellow-400" />,
      title: "Вы оставляете заявку",
      description: "Свяжемся с вами в течение 15 минут.",
    },
    {
      icon: <Ruler className="w-10 h-10 text-yellow-400" />,
      title: "Бесплатный выезд",
      description: "Мастер приедет, всё замерит и проконсультирует.",
    },
    {
      icon: <Wrench className="w-10 h-10 text-yellow-400" />,
      title: "Выполняем работы",
      description: "Делаем по договору, качественно и в срок.",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-yellow-400" />,
      title: "Принимаете результат",
      description: "Вы довольны — мы получаем оплату.",
    },
  ];

  return (
    <section id="how" className="relative py-16 px-4">
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white drop-shadow-lg">
          Как мы работаем
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white drop-shadow-md">
                {step.title}
              </h3>
              <p className="text-gray-200 text-sm sm:text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
