"use client";


import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_futd4x8", // Substitua pelo seu Service ID
        "template_4yceiqb", // Substitua pelo seu Template ID
        formData,
        "yMt3XIOa1UdQOevs-" // Substitua pela sua Public Key
      )
      .then(
        (result) => {
          setSuccessMessage("E-mail enviado com sucesso!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Erro ao enviar o e-mail:", error);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[32rem] flex flex-col gap-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Seu nome"
        value={formData.name}
        onChange={handleChange}
        required
        className="p-3 rounded-md bg-[#16171a] text-white"
      />
      <input
        type="email"
        name="email"
        placeholder="Seu e-mail"
        value={formData.email}
        onChange={handleChange}
        required
        className="p-3 rounded-md bg-[#16171a] text-white"
      />
      <textarea
        name="message"
        placeholder="Sua mensagem"
        value={formData.message}
        onChange={handleChange}
        required
        className="p-3 rounded-md bg-[#16171a] text-white"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="p-3 rounded-md bg-cyan-500 text-white font-bold hover:bg-cyan-600 transition"
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>
      {successMessage && (
        <p className="text-green-500 font-semibold">{successMessage}</p>
      )}
    </form>
  );
}
