import { useState } from "react";
import products from "./products.json";

const EMPTY = "";
const NO_ERROR = false;

const App = () => {
  const [error, setError] = useState(NO_ERROR);
  const [weight, setWeight] = useState(EMPTY);

  function handleWeightChange(event) {
    setWeight(event.target.value);
  }

  function handlePriceChange(event) {

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
            value={weight}
            onChange={handleWeightChange}
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
            value={EMPTY}
            onChange={handlePriceChange}
          />
        </label>
        <label>
          <span>Total:</span>
          <input type="number" placeholder="0,000" disabled />
        </label>
      </div>
      <div className="controls">
        <div className="products">
          {products.map((product) => {
            return (
              <button key={product.id} aria-label={product.name}>
                <img src={product.image} alt="" />
              </button>
            );
          })}
        </div>
        <div className="sidebar">
          <div>
            <button>Calcular</button>
          </div>
          { error &&
            <div>Error</div>
          }
        </div>
      </div>
    </div>
  );
};

export { App };
