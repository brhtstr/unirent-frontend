import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("mario.rossi@example.com");
  const [password, setPassword] = useState("password_admin");
  const [message, setMessage] = useState(""); // Nuovo stato per il messaggio
  const [isError, setIsError] = useState(false); // Nuovo stato per indicare se si tratta di un errore
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/users/login", { email, password });
      setMessage(response.data.message);
      setIsError(false); // Resetta lo stato dell'errore

      // Se il login ha successo, reindirizza l'utente a un altro componente
      navigate("/area-personale");
    } catch (error) {
      setMessage(error.response.data.message || "Errore durante il login");
      setIsError(true);
    }
  };

  

  return (
    <div className="welcome">
      <header>Benvenuto su UniRENT</header>
      
      {/* Form per l'inserimento delle credenziali */}
      <form>  
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        </form>
      {/* Visualizza il messaggio */}
      {message && (
        <div style={{ color: isError ? "red" : "green", marginBottom: "10px" }}>
          {message}
        </div>
      )}
      {/* Pulsante per effettuare il login */}
      <button onClick={handleLogin}>Login</button>
      
    </div>
  );
};

export default Login;
