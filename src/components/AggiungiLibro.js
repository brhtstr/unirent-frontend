  import React, { useState } from "react";
  import axios from "axios";
  import { useNavigate } from "react-router-dom";

  const AggiungiLibro = () => {
    const [titolo, setTitolo] = useState("");
    const [autore, setAutore] = useState("");
    const [corso_di_studio, setCorso] = useState("");
    const [anno, setAnno] = useState("");
    const [genere, setGenere] = useState("");
    const [disponibilita, setDisponibilita] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const handleAggiungiLibro = async () => {
      try {
        // Effettua la richiesta POST all'API per aggiungere il libro
        const response = await axios.post("https://unirent-api.onrender.com/libri", {
          titolo,
          autore,
          corso_di_studio,
          anno,
          genere,
          disponibilita,
        });

        // Se l'aggiunta del libro è riuscita, mostra un messaggio di successo
        setSuccessMessage("Libro aggiunto con successo, reindirizzamento alla lista dei libri");
        setErrorMessage(""); // Resetta eventuali messaggi di errore
        setTimeout(() => {
          // Reindirizza alla lista dei libri dopo 2 secondi
          navigate("/libri");
        }, 2000);
      } catch (error) {
        // In caso di errore, mostra un messaggio di errore
        setErrorMessage(error.response?.data?.message || "Errore durante l'aggiunta del libro");
        setSuccessMessage("");
      }
    };

    return (
      <div className="AggiungiLibro">
        <h1>Aggiungi Libro</h1>

        {/* Form per l'inserimento dei dati del libro */}
        <label>Titolo:</label>
        <input type="text" value={titolo} onChange={(e) => setTitolo(e.target.value)} />
        <br />
        <label>Autore:</label>
        <input type="text" value={autore} onChange={(e) => setAutore(e.target.value)} />
        <br />
        <label>Corso:</label>
        <input type="text" value={corso_di_studio} onChange={(e) => setCorso(e.target.value)} />
        <br />
        <label>Anno:</label>
        <input type="text" value={anno} onChange={(e) => setAnno(e.target.value)} />
        <br />
        <label>Genere:</label>
        <input type="text" value={genere} onChange={(e) => setGenere(e.target.value)} />
        <br />
        <label>Disponibilità:</label>
        <input type="text" value={disponibilita} onChange={(e) => setDisponibilita(e.target.value)} />
        <br />

        {/* Pulsante per aggiungere il libro */}
        <button onClick={handleAggiungiLibro}>Aggiungi Libro</button>

        {/* Messaggi di errore/successo dall'API */}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      </div>
    );
  };

  export default AggiungiLibro;
