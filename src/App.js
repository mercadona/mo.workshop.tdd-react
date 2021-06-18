import { useState } from "react";
import products from "./products.json";

const App = () => {
  const [price, setPrice] = useState(0);

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  return (
    <div className="app">
      <div className="display">
        <label>
          <span>Peso:</span>
          <input type="number" step="any" min="0" placeholder="0,000" />
        </label>
        <label>
          <span>Precio:</span>
          <input
            type="number"
            step="any"
            min="0"
            placeholder="0,000"
            value={price}
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
          <div>Total - 0,000€</div>
          <ul>
            <li>Plátano - 2,570€</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { App };
