"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send form data (e.g., via an API)
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="Contact"
      className="bg-black h-screen bg-opacity-50 flex justify-center items-center p-4"
    >
      <div className="bg-black p-8 rounded-lg bg-opacity-80 shadow-lg w-full max-w-md">
        <h1 className="text-white text-2xl font-bold text-center mb-4">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4  text-white rounded-md">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md bg-transparent"
            />
          </div>
          <div className="mb-4  text-white rounded-md">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md bg-transparent"
            />
          </div>
          <div className="mb-4  text-white rounded-md">
            <label
              htmlFor="message"
              className="text-white block text-sm font-medium "
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="mt-1 p-2 w-full rounded-md border bg-transparent"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
