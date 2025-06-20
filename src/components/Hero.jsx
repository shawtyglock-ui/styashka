import React from "react";

const Hero = ({ onOpenModal }) => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat text-white px-4 pt-24 pb-12"
      style={{ backgroundImage: "url('/your-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
          Полусухая стяжка пола <br />
          <span className="text-yellow-400">в Казани и других регионах!</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 drop-shadow-md">
          Быстро, качественно и по доступной цене. Работаем с квартирами, коттеджами и коммерческими помещениями.
        </p>

        <button
          onClick={onOpenModal} // Используем onOpenModal, переданный как пропс
          className="mt-8 px-8 py-3 bg-yellow-500 hover:bg-yellow-600 transition text-black rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Заказать замер
        </button>
      </div>
    </section>
  );
};

export default Hero;
