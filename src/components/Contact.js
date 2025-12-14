import React from "react";
import { motion } from "framer-motion";
import RequestForm from "./RequestForm";

export default function Contact({ setToast }) {
  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-5xl mx-auto p-6 my-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white drop-shadow-lg">
          Свяжитесь с нами
        </h2>
        <div className="max-w-md mx-auto">
          <RequestForm setToast={setToast} />
        </div>
      </motion.div>

      <div className="mt-10 text-center text-white space-y-2 text-lg">
        <p className="flex justify-center items-center gap-2">
          <span role="img" aria-label="phone" className="text-yellow-400 drop-shadow">
            📞
          </span>
          <a
            href="tel:+7(919)622-00-20"
            className="text-yellow-300 hover:text-yellow-400 hover:underline drop-shadow"
          >
            +7 (919) 622-00-20
          </a>
        </p>

        <p className="flex justify-center items-center gap-2">
          <span role="img" aria-label="map" className="text-yellow-400 drop-shadow">
            📍
          </span>
          <span className="text-yellow-300 drop-shadow">Республика Татарстан, г. Казань</span>
        </p>

        <p className="flex justify-center items-center gap-2">
          <span role="img" aria-label="email" className="text-yellow-400 drop-shadow">
            ✉️
          </span>
          <a
            href="mailto:info@pol-styazhka.ru"
            className="text-yellow-300 hover:text-yellow-400 hover:underline drop-shadow"
          >
            info@pol-styazhka.ru
          </a>
        </p>
      </div>
    </section>
  );
}
