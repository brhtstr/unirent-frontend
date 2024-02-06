import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AreaPersonale = () => {
  const navigate = useNavigate();

  // Definizione delle variabili di stato
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleLogout = () => {
    axios.get("http://localhost:5000/users/logout")
      .then(() => {
        setMessage("Logout effettuato");
        setIsError(false);
        navigate("/");
      })
      .catch(error => {
        setMessage(error.response.data.message || "Errore durante il logout");
        setIsError(true);
      });
  };

  return (
    <div>
      <h1>Area Amministratore</h1>
      {/* Bottone per visualizzare l'elenco dei testi nel database */}
      <Link to="/libri">
        <button>Visualizza Testi</button>
      </Link>

      {/* Bottone per eseguire il logout */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AreaPersonale;
