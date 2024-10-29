import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/HomePage/HomePageComponent";
import AdminDashboard from "./components/AdminSection/AdminDashboard"; // La sezione per l'admin
import Descrizione from "./components/Descrizione/Descrizione";
import Galleria from "./components/Galleria/Galleria";
import Prezzi from "./components/Prezzi/Prezzi";
import Preventivo from "./components/Preventivo/Preventivo";
import Footer from "./components/Footer/Footer";

function App() {
  const [role, setRole] = useState(null); // Stato per il ruolo

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole"); // Recupera il ruolo da localStorage
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />

          {/* Sezione solo per l'admin */}
          {role === "ADMIN" && <Route path="/admin" element={<AdminDashboard />} />}

          {/* Se vuoi mostrare una pagina di errore agli user che accedono a /admin */}
          {role !== "ADMIN" && <Route path="/admin" element={<p>Accesso negato. Sezione riservata agli admin.</p>} />}
          <Route path="/descrizione" element={<Descrizione></Descrizione>}></Route>
          <Route path="/galleria" element={<Galleria></Galleria>}></Route>
          <Route path="/prezzi" element={<Prezzi></Prezzi>}></Route>
          <Route path="/preventivo" element={<Preventivo></Preventivo>}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
