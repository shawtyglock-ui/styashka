/* global ym */
import React from "react";

export default function WhatsAppButton() {
  const phone = "79625635815";
  const message = "Здравствуйте! Хочу заказать полусухую стяжку.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    ym(102775778, 'reachGoal', 'whatsapp_click'); // Цель: клик по WhatsApp
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition flex items-center gap-2"
      onClick={handleClick}
    >
      <svg
        className="w-5 h-5 fill-white"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.002 3.003a12.902 12.902 0 0 0-11.044 19.623l-1.447 5.29 5.416-1.419a12.902 12.902 0 1 0 7.075-23.494Zm.001 23.304a10.327 10.327 0 0 1-5.275-1.471l-.379-.229-3.214.843.86-3.135-.247-.386a10.328 10.328 0 1 1 8.255 4.378Zm5.676-7.767c-.312-.156-1.848-.912-2.136-1.017-.288-.104-.498-.156-.708.157s-.816 1.017-1.003 1.226c-.187.208-.364.235-.676.078-.312-.156-1.319-.486-2.514-1.552-.93-.828-1.559-1.849-1.742-2.16-.182-.312-.02-.48.137-.634.141-.14.312-.364.468-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.708-1.711-.97-2.345-.255-.612-.514-.529-.708-.54l-.604-.01a1.165 1.165 0 0 0-.844.39c-.29.312-1.1 1.07-1.1 2.609s1.126 3.026 1.284 3.236c.156.208 2.215 3.379 5.37 4.736.751.323 1.336.516 1.792.662.753.239 1.44.206 1.982.125.604-.09 1.848-.755 2.109-1.484.26-.728.26-1.354.182-1.484-.078-.13-.26-.208-.572-.364Z" />
      </svg>
      WhatsApp
    </a>
  );
}
