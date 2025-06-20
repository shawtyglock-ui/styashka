import React, { useState } from "react";
export default function ContactPage() {
  const [data,setData]=useState({name:"",phone:""});
  const [status,setStatus]=useState("");
  const onSubmit=async e=>{
    e.preventDefault();
    setStatus("Отправка...");
    try {
      const res=await fetch("/sendmail.php",{
        method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
      });
      setStatus(res.ok?"Спасибо, отправлено!":"Ошибка отправки");
    } catch {
      setStatus("Ошибка отправки");
    }
  };
  return (
    <section className="py-12 px-6 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Заказать стяжку</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <input required name="name" value={data.name} onChange={e=>setData({...data,name:e.target.value})}
          placeholder="Ваше имя" className="w-full p-3 border rounded" />
        <input required name="phone" value={data.phone} onChange={e=>setData({...data,phone:e.target.value})}
          placeholder="Телефон" className="w-full p-3 border rounded" />
        <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">Отправить заявку</button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </section>
  );
}
