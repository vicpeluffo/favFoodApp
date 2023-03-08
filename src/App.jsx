import { useState } from "react";
import Card from "../src/components/Card";
import "./App.css";
function App() {
  const [name, setName] = useState("");
  const [comida, setComida] = useState("");
  const [error, setError] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const regex = /^\s/;

  const handleInputName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleInputComida = (e) => {
    setComida(e.target.value);
    console.log(comida);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 3 && regex.test(name)) {
      setError(true);
    } else if (comida.length < 6) {
      setError(true);
    } else {
      setError(false);
      setShowCard(true);
    }
  };

  return (
    <div className="Color">
      <h1>Elige una comida</h1>
      <form onSubmit={handleSubmit} className="ColorForm">
        <input
          type="text"
          onChange={handleInputName}
          placeholder="Ingrese su nombre"
        />
        <input
          type="text"
          onChange={handleInputComida}
          placeholder="Ingrese su comida favorita"
        />
        <button type="submit">Enviar</button>
      </form>
      {error && (
        <div>
          <span>Por favor chequea que la informacion sea correcta</span>
        </div>
      )}
      {showCard && <Card name={name} comida={comida} />}
    </div>
  );
}

export default App;
