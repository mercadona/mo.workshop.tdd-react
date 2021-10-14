import { useState } from "react";
import productos from "./products.json";

const VACIO = 0;
const SIN_ERROR = false;

const App = () => {
  const [error, setearError] = useState(SIN_ERROR);
  const [peso, setearPeso] = useState(VACIO);

  function manejarCambioDePeso(event) {
    setearPeso(event.target.value);
  }

  return (
    <div className="app">
      <div className="display">
        <label>
          <span>Peso:</span>
          <input
            type="number"
            step="any"
            min="0"
            placeholder="0,000"
            value={peso}
            onChange={manejarCambioDePeso}
          />
        </label>
        <label>
          <span>Precio:</span>
          <input
            type="number"
            step="any"
            min="0"
            placeholder="0,000"
            readOnly={true}
            disabled={true}
            value={VACIO}
          />
        </label>
        <label>
          <span>Total:</span>
          <input type="number" placeholder="0,000" disabled />
        </label>
      </div>
      <div className="controls">
        <div className="products">
          {productos.map((producto) => {
            return (
              <button key={product.id} aria-label={product.nombre} value={product.precio}>
                <img src={product.imagen} alt="" />
              </button>
            );
          })}
        </div>
        <div className="sidebar" data-testid="sidebar">
          <div>
            <button>Calcular</button>
          </div>
        </div>
      </div>
      { error &&
        <div className="error">Error</div>
      }
    </div>
  );
};

export { App };
