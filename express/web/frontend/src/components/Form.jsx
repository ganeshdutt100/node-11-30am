import React, { useState, useEffect } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const [message, setMessage] = useState("");

  const handleChanges = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (data.success) {
        setMessage(data.message);
        setForm({ name: " ", email: " " });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChanges}
        />{" "}
        <br />
        <label>Email : </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChanges}
        />{" "}
        <br />
        <button type="submit">submit Form</button>
        <p>{message}</p>
      </form>
    </div>
  );
};

export default Form;
