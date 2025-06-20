/* global ym */
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";

// 🔐 Интеграции
const TELEGRAM_TOKEN = "8194457651:AAEH9Qdutnnp3TuT6_prRAxpVzHxLgM3DiU";
const TELEGRAM_CHAT_ID = "269340468";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnnvzpbk";
const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbwZk96W_dv3VqQQmjxjmZj2NkkHSatfKbIcrvRyFR6xxjYfFMwbG3E1GqUg0etuQ3AFBq5pvV/exec";

export default function RequestForm({ onSuccess, setToast, onClose }) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const [isSent, setIsSent] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (isSent) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      if (countdown === 0) {
        onClose();
        clearInterval(timer);
      }

      return () => clearInterval(timer);
    }
  }, [isSent, countdown, onClose]);

  // 🐝 Honeypot — если поле заполнено, не отправляем
  const onSubmit = async (data) => {
    if (data.hiddenField) {
      console.warn("SPAM DETECTED");
      return;
    }

    try {
      await Promise.all([
        fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: `📥 Заявка с сайта:\n\n👤 Имя: ${data.name}\n📞 Телефон: ${data.phone}`,
          }),
        }),
        fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }),
        fetch(GOOGLE_SHEETS_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }),
      ]);

      reset();
      setIsSent(true);
      ym(102775778, 'reachGoal', 'form_sent'); // Цель: отправка формы
      if (onSuccess) onSuccess();
      if (setToast) {
        setToast("✅ Спасибо! Заявка принята.");
        setTimeout(() => setToast(""), 5000);
      }
    } catch (error) {
      console.error("Ошибка при отправке:", error);
      if (setToast) setToast("❌ Ошибка отправки. Попробуйте позже.");
    }
  };

  if (isSent) {
    return (
      <div className="text-center space-y-4 py-8">
        <div className="text-4xl">✅</div>
        <h3 className="text-2xl font-bold text-white">Заявка отправлена!</h3>
        <p className="text-gray-300">Мы свяжемся с вами в ближайшее время.</p>
        <p className="text-yellow-500 font-semibold">
          Закрытие через {countdown} секунд...
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Honeypot */}
      <input
        type="text"
        {...register("hiddenField")}
        className="hidden"
        tabIndex="-1"
        autoComplete="off"
      />

      {/* Имя */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
          Ваше имя
        </label>
        <input
          id="name"
          type="text"
          {...register("name", { required: true })}
          className={`w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 ${
            errors.name
              ? "border-2 border-red-500 focus:ring-red-400"
              : "border border-gray-300 focus:ring-yellow-400"
          }`}
          placeholder="Введите ваше имя, например: Иван"
        />
        {errors.name && (
          <p className="text-red-400 font-semibold text-sm mt-1">
            Пожалуйста, укажите ваше имя
          </p>
        )}
      </div>

      {/* Телефон */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
          Телефон
        </label>
        <IMaskInput
          id="phone"
          mask="+7 (000) 000-00-00"
          {...register("phone", { required: true })}
          onAccept={(value) => setValue("phone", value)}
          className={`w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 ${
            errors.phone
              ? "border-2 border-red-500 focus:ring-red-400"
              : "border border-gray-300 focus:ring-yellow-400"
          }`}
          placeholder="+7 (___) ___-__-__"
        />
        {errors.phone && (
          <p className="text-red-400 font-semibold text-sm mt-1">
            Укажите корректный номер телефона
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-3 px-6 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
      >
        Отправить заявку
      </button>
    </form>
  );
}
