import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [status, setStatus] = useState("connecting to backend...");

  useEffect(() => {
    fetch("http://localhost:3000/api/test")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStatus(data.message);
        }
      })
      .catch((err) => {
        console.error("Error", err);
      });
  }, []);

  return (
    <>
      <p>{status}</p>
    </>
  );
}

export default App;
