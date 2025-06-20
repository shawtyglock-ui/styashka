import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const services = [
  "Полусухая стяжка пола",
  "Выравнивание поверхностей",
  "Подготовка основания",
  "Бесплатная консультация и расчёт",
];

export default function ServicesPage() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6">Наши услуги</h1>
      <ul className="space-y-4">
        {services.map((service, index) => (
          <li key={index} className="flex items-center space-x-4">
            <CheckCircleIcon className="w-6 h-6 text-blue-700" />
            <span className="text-lg">{service}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
