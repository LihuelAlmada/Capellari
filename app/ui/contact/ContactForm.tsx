"use client";

import { useState } from "react";

const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    description: "",
  });
  //TODO: add types
  const handleInputChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  //TODO: add types
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch(`http://localhost:3000/api/contact`, {
      method: "POST",
      body: JSON.stringify(values),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={values.name}
        placeholder="Your name"
        name="name"
        className="p-2 border mx-2"
        onChange={handleInputChange}
      />

      <input
        type="email"
        value={values.email}
        placeholder="Your email"
        name="email"
        className="p-2 border mx-2"
        onChange={handleInputChange}
      />
      <textarea
				required
        value={values.description}
        placeholder="Your massage"
        name="description"
        className="resize-none p-2 w-1/2 h-24 rounded border border-blue-100 block my-4"
        onChange={handleInputChange}
      />
      <button type="submit" className="my-4">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
