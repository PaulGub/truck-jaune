"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  nom: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="mx-64 p-4 text-white">
      <h2 className="font-BebasNeue text-7xl font-bold mb-4">Contactez-moi</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="nom" className="mb-2 font-semibold">Nom:</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-blue-200 text-black"
        />

        <label htmlFor="email" className="mb-2 font-semibold">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-blue-200 text-black"
        />

        <label htmlFor="message" className="mb-2 font-semibold">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-blue-200 text-black"
        />

        <button type="submit" className="bg-yellow-500 text-black hover:text-white py-2 rounded hover:bg-blue-600 transition duration-200">
          Soumettre
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
