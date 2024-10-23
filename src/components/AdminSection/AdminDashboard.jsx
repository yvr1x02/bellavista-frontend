import React, { useEffect, useState } from "react";
import { Carousel, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import GestionePrenotazioni from "./GestionePrenotazioni";
import Header from "../HomePage/header/Header";

import "./admin.css";
import Prenotazioni from "../Prenotazioni/Prenotazioni";

function AdminDashboard() {
  const [username, setUsername] = useState(null);
  const [role, setRole] = useState(null); // Stato per memorizzare il ruolo

  // Recupera l'username e il ruolo da localStorage al caricamento della pagina
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedRole = localStorage.getItem("role");
    if (storedUsername) {
      setUsername(storedUsername);
      setRole(storedRole); // Imposta lo stato con il ruolo dell'utente loggato
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username"); // Rimuove il nome utente da localStorage
    localStorage.removeItem("role"); // Rimuove il ruolo
    setUsername(null); // Aggiorna lo stato per nascondere l'username e mostrare "Accedi"
    setRole(null); // Resetta anche il ruolo
  };
  return (
    <>
      <Header></Header>
      <Prenotazioni></Prenotazioni>
      <GestionePrenotazioni />
    </>
  );
}

export default AdminDashboard;
