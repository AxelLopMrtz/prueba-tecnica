import { useState } from "react"

function FormularioReserva({ onReservaChange }) {
    const [fecha, setFecha] = useState("23/05/2024")
    const [horario, setHorario] = useState("09:00")
    const [pasajeros, setPasajeros] = useState(2)

    // Actualizar datos de reserva cuando cambien
    const actualizarReserva = (nuevaFecha, nuevoHorario, nuevosPasajeros) => {
        onReservaChange({
            fecha: nuevaFecha || fecha,
            horario: nuevoHorario || horario,
            pasajeros: nuevosPasajeros || pasajeros,
        })
    }

    const cambiarFecha = (e) => {
        const nuevaFecha = e.target.value
        setFecha(nuevaFecha)
        actualizarReserva(nuevaFecha, horario, pasajeros)
    }

    const cambiarHorario = (e) => {
        const nuevoHorario = e.target.value
        setHorario(nuevoHorario)
        actualizarReserva(fecha, nuevoHorario, pasajeros)
    }

    const cambiarPasajeros = (cantidad) => {
        if (cantidad >= 1 && cantidad <= 10) {
            setPasajeros(cantidad)
            actualizarReserva(fecha, horario, cantidad)
        }
    }

    return (
        <div className="formulario-reserva">
            <div className="campo-tipo">
                <label className="etiqueta-campo">Tipo de viaje</label>
                <div className="selector-tipo">
                    <span className="tipo-seleccionado">Redondo</span>
                </div>
            </div>

            <div className="campos-ubicacion">
                <div className="campo-ubicacion">
                    <label className="etiqueta-campo">Desde</label>
                    <div className="input-ubicacion">
                        <span className="icono-ubicacion">📍</span>
                        <span>Aeropuerto Internacional de Cancún</span>
                    </div>
                </div>

                <div className="campo-ubicacion">
                    <label className="etiqueta-campo">Hacia</label>
                    <div className="input-ubicacion">
                        <span className="icono-ubicacion">📍</span>
                        <span>Hotel Nickelodeon Riviera Maya</span>
                    </div>
                </div>
            </div>

            <div className="campos-fecha-hora">
                <div className="campo-fecha">
                    <label className="etiqueta-campo">Fecha</label>
                    <input type="date" className="input-fecha" value={fecha} onChange={cambiarFecha} />
                </div>

                <div className="campo-horario">
                    <label className="etiqueta-campo">Horario</label>
                    <input type="time" className="input-horario" value={horario} onChange={cambiarHorario} />
                </div>
            </div>

            <div className="campo-pasajeros">
                <label className="etiqueta-campo">¿Cuántos pasajeros?</label>
                <div className="selector-pasajeros">
                    <button className="boton-cantidad" onClick={() => cambiarPasajeros(pasajeros - 1)}>
                        −
                    </button>
                    <span className="numero-pasajeros">{pasajeros}</span>
                    <button className="boton-cantidad" onClick={() => cambiarPasajeros(pasajeros + 1)}>
                        +
                    </button>
                </div>
                <div className="precio-individual">
                    Precio individual: <span className="precio">MXN $5,000</span>
                </div>
            </div>
        </div>
    )
}

export default FormularioReserva
