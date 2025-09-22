import { useState } from "react"
import "./App.css"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  return (
    <div className="contenedor-app">
      <div className="contenedor">
        <h1 className="titulo">Sistema de Reserva de Transporte</h1>
        <button className="boton-reserva" onClick={handleOpenModal}>
          Reservar Transporte
        </button>
        {/* modal de prueba */}
        {isModalOpen && (
          <div className="modal" onClick={() => setIsModalOpen(false)}>
            <div className="contenedor-modal" onClick={(e) => e.stopPropagation()}>
              <p>Modal</p>
              <button onClick={() => setIsModalOpen(false)}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App