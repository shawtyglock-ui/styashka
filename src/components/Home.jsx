import React, { useState } from "react";
import RequestForm from "./RequestForm";
import Modal from "./Modal"; // Импортируем модалку

export default function Home({ setToast }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Открытие модалки
  const openModal = () => setIsModalOpen(true);

  // Закрытие модалки
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="bg-gray-100 text-gray-800">
      {/* Кнопка "Оставить заявку" */}
      <section className="pt-20 pb-12 text-center">
        <button
          onClick={openModal}
          className="px-8 py-3 bg-yellow-500 text-black rounded-xl text-lg font-semibold shadow-lg hover:bg-yellow-600 transition"
        >
          Оставить заявку
        </button>
      </section>

      {/* Разделы сайта */}
      {/* Например: Услуги, Как мы работаем, Преимущества */}
      {/* Эти компоненты можно добавлять сюда */}
      {/* <Services /> */}
      {/* <HowItWorks /> */}
      {/* <Advantages /> */}

      {/* Модалка с формой заявки */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <RequestForm onSuccess={closeModal} setToast={setToast} />
        </Modal>
      )}
    </main>
  );
}
