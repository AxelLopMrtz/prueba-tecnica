import { useState } from "react"
import "./App.css"
import ModalHeader from "./components/ModalHeader"
import FormularioReserva from "./components/FormularioReserva"
import InfoVehiculo from "./components/InfoVehiculo"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [datosReserva, setDatosReserva] = useState({
    fecha: "23/05/2024",
    horario: "09:00",
    pasajeros: 2,
  })

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const actualizarReserva = (nuevosdatos) => {
    setDatosReserva(nuevosdatos)
  }

  return (
    <div className="contenedor-app">
      <div className="contenedor">
        <h1 className="titulo">Sistema de Reserva de Transporte</h1>
        <button className="boton-reserva" onClick={handleOpenModal}>
          Reservar Transporte
        </button>

        {isModalOpen && (
          <div className="modal" onClick={() => setIsModalOpen(false)}>
            <div className="contenedor-modal" onClick={(e) => e.stopPropagation()}>
              <ModalHeader onClose={() => setIsModalOpen(false)} />
              <div className="modal-contenido">
                <FormularioReserva onReservaChange={actualizarReserva} />
                <InfoVehiculo datosReserva={datosReserva} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
