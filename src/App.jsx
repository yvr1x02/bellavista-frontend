import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/HomePage/HomePageComponent";
import AdminDashboard from "./components/AdminSection/AdminDashboard"; // La sezione per l'admin
import Descrizione from "./components/Descrizione/Descrizione";

function App() {
  const [role, setRole] = useState(null); // Stato per il ruolo

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole"); // Recupera il ruolo da localStorage
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />

        {/* Sezione solo per l'admin */}
        {role === "ADMIN" && <Route path="/admin" element={<AdminDashboard />} />}

        {/* Se vuoi mostrare una pagina di errore agli user che accedono a /admin */}
        {role !== "ADMIN" && <Route path="/admin" element={<p>Accesso negato. Sezione riservata agli admin.</p>} />}
        <Route path="/descrizione" element={<Descrizione></Descrizione>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
