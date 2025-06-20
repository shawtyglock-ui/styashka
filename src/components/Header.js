import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Modal from "./Modal";
import RequestForm from "./RequestForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showHeader, setShowHeader] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 100) {
        setShowHeader(true);
      } else {
        setShowHeader(currentScrollY < lastScrollY);
        lastScrollY = currentScrollY;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    ["Услуги", "services"],
    ["Как мы работаем", "how"],
    ["Преимущества", "advantages"],
    ["Цены", "prices"],
    ["Портфолио", "portfolio"],
    ["Отзывы", "testimonials"],
    ["Контакты", "contact"],
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        } bg-transparent backdrop-blur-md shadow-md`}
      >
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Логотип */}
          <ScrollLink
            to="home"
            smooth
            duration={500}
            className="cursor-pointer flex items-center"
          >
            <img
              src="/logo-header.png"
              alt="Полусухая стяжка"
              className="h-16 md:h-20 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
            />
          </ScrollLink>

          {/* Меню и кнопки */}
          <div className="flex items-center space-x-4">
            {/* Десктоп-меню */}
            <ul className="hidden lg:flex space-x-6">
              {navItems.map(([label, id]) => (
                <li key={id}>
                  <ScrollLink
                    to={id}
                    smooth
                    duration={500}
                    offset={-100}
                    className={`cursor-pointer transition ${
                      activeSection === id
                        ? "text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    }`}
                  >
                    {label}
                  </ScrollLink>
                </li>
              ))}
            </ul>

            {/* Кнопка "Оставить заявку" */}
            <button
              onClick={openModal}
              className="hidden lg:inline-block bg-yellow-400 text-black font-bold py-2 px-4 rounded-xl hover:bg-yellow-500 transition animate-pulse"
            >
              Оставить заявку
            </button>

            {/* Кнопка бургер / крест */}
            <button className="lg:hidden text-white z-50" onClick={toggleMenu}>
              {isMenuOpen ? (
                // Крестик
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Бургер
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Градиентная линия */}
        <div className="h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400" />
      </header>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-black/90 flex flex-col items-center justify-center space-y-6 text-white text-xl z-40">
          {navItems.map(([label, id]) => (
            <ScrollLink
              key={id}
              to={id}
              smooth
              duration={500}
              offset={-100}
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer hover:text-yellow-400 transition"
            >
              {label}
            </ScrollLink>
          ))}
        </div>
      )}

      {/* Модалка */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <RequestForm onSuccess={closeModal} setToast={() => {}} />
        </Modal>
      )}
    </>
  );
};

export default Header;
