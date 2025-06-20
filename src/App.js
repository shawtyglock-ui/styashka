import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Advantages from "./components/Advantages";
import Prices from "./components/Prices";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Modal from "./components/Modal";
import RequestForm from "./components/RequestForm";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className="min-h-screen bg-fixed bg-repeat bg-center text-white"
      style={{
        backgroundImage: "url('/bg-texture.png')", // Светлый текстурный фон
      }}
    >
      <Header />

      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-green-600 text-white px-5 py-3 rounded shadow-lg">
          {toast}
          <button onClick={() => setToast("")} className="ml-3 font-bold">
            ×
          </button>
        </div>
      )}

      <main className="pt-0 space-y-12">
        <Hero onOpenModal={openModal} />
        <Services />
        <HowItWorks />
        <Advantages />
        <Prices onOpenModal={openModal} />
        <Portfolio />
        <Testimonials />
        <Contact setToast={setToast} />
      </main>

      <Footer />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <RequestForm onSuccess={closeModal} setToast={setToast} />
      </Modal>

      <WhatsAppButton />
    </div>
  );
}

export default App;
