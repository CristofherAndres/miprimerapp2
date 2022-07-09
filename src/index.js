/* Importar librerias para trabajar con react*/
import React from "react";
import ReactDOM from "react-dom";

/* Crearemos nuestro primer componente */
const App = () => {
  const fecha = new Date()
  const a = 10
  const b = 20
  return (
    <div>
      <h1>Hola Mundo - Desde React</h1>
      <br />
      <h2>La fecha de hoy es: {fecha.toString()}</h2>
      <h2>La suma de {a} + {b} = {a+b} </h2>
    </div>
  );
};

/* Cargar el componente en el index.html */
const root = document.getElementById("root");
ReactDOM.render(<App />, root);
