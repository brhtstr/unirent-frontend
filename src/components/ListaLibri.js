import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListaLibri = () => {
  const [libri, setLibri] = useState([]);

  useEffect(() => {
    // Carica la lista dei libri quando il componente viene montato
    fetchLibri();
  }, []);

  const fetchLibri = async () => {
    try {
      const response = await axios.get("http://localhost:5000/libri");
      setLibri(response.data.data);
    } catch (error) {
      console.error("Errore durante il recupero dei libri:", error.message);
    }
  };

  const handleEliminaLibro = async (id) => {
    // Finestra di conferma
    const confermaEliminazione = window.confirm("Sei sicuro di voler eliminare questo libro?");
    if (!confermaEliminazione) {
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/libri/${id}`);
      fetchLibri(); // Ricarica la lista dei libri dopo l'eliminazione
    } catch (error) {
      console.error("Errore durante l'eliminazione del libro:", error.message);
    }
  };

  return (
    <div className="libri">
       <div>
        <h1>Lista dei Libri</h1>
        {/* Bottone per aggiungere un libro */}
        <Link to="/aggiungi-libro">
            <button>Aggiungi Libro</button>
        </Link>
        </div>
      {/* Tabella dei libri */}
      <table className="lista-libri">
        <thead>
          <tr>
            <th>Titolo</th>
            <th>Autore</th>
            <th>Corso</th>
            <th>Anno</th>
            <th>Genere</th>
            <th>Disponibilità</th>
            <th>Elimina</th>
          </tr>
        </thead>
        <tbody>
          {libri.map((libro) => (
            <tr key={libro._id}>
              <td>{libro.titolo}</td>
              <td>{libro.autore}</td>
              <td>{libro.corso_di_studio}</td>
              <td>{libro.anno}</td>
              <td>{libro.genere}</td>
              <td>{libro.disponibilita}</td>
              <td>
                <button onClick={() => handleEliminaLibro(libro._id)}>Elimina</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaLibri;
