import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    age: "",
  });

  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting....");
    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage(`${result.message}`);
        setFormData({ name: "", email: "", number: "", age: "" });
      } else {
        setMessage(`Error : ",${result.message}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("Failed to connect server ");
    }
  };

  let handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your name </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />{" "}
        <br /> <br />
        <label>Enter your email </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <label>Enter your contactNumber </label>
        <input
          type="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <label>Enter your age </label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <input type="submit" />
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Form;
