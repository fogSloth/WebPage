import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState(["Manzana", "Banana", "Naranja"]);
  const [newItem, setNewItem] = useState("");
  const [showList, setShowList] = useState(true);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Web para pruebas Playwright</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} data-testid="counter-btn">
          Contador: {count}
        </button>
        <input
          type="text"
          placeholder="Escribe algo..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          data-testid="input-simple"
        />
        <p>Valor actual: <span data-testid="input-value">{inputValue}</span></p>
      </div>
      <hr />
      <div>
        <h2>Listado de elementos</h2>
        <button onClick={() => setShowList(!showList)} data-testid="toggle-list">
          {showList ? "Ocultar" : "Mostrar"} lista
        </button>
        {showList && (
          <ul data-testid="item-list">
            {items.map((item, idx) => (
              <li key={idx} data-testid={`item-${idx}`}>{item}</li>
            ))}
          </ul>
        )}
        <input
          type="text"
          placeholder="Nuevo elemento"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          data-testid="input-new-item"
        />
        <button
          onClick={() => {
            if (newItem.trim()) {
              setItems([...items, newItem]);
              setNewItem("");
            }
          }}
          data-testid="add-item-btn"
        >
          Agregar elemento
        </button>
      </div>
      <hr />
      <div>
        <h2>Prueba de bucles</h2>
        <ul data-testid="loop-list">
          {[...Array(5)].map((_, i) => (
            <li key={i} data-testid={`loop-item-${i}`}>Elemento #{i + 1}</li>
          ))}
        </ul>
      </div>
      <p className="read-the-docs">
        Esta web contiene casos para pruebas automatizadas con Playwright.
      </p>
    </>
  )
}

export default App
