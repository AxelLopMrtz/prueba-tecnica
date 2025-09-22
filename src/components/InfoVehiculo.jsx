function InfoVehiculo({ datosReserva }) {
    const { pasajeros, fecha, horario } = datosReserva
    const precioTotal = pasajeros * 5000

    const agregarAlCarrito = () => {
        alert(`Reserva agregada al carrito:
    
Fecha: ${fecha}
Horario: ${horario}
Vehículo: Standard Bus Lorem Ipsum
Pasajeros: ${pasajeros}
Precio total: MXN $${precioTotal.toLocaleString()}`)
    }

    return (
        <div className="info-vehiculo">
            <div className="vehiculo-header">
                <h3 className="vehiculo-titulo">Vehículo Standard Bus</h3>
                <h4 className="vehiculo-subtitulo">Lorem Ipsum</h4>
                <span className="etiqueta-compartido">Compartido</span>
            </div>

            <div className="vehiculo-imagen">
                <img
                    src="/transporte.png"
                    alt="Vehículo de transporte"
                    className="imagen-vehiculo"
                />
            </div>

            <div className="vehiculo-caracteristicas">
                <div className="caracteristica">
                    <span className="icono-caracteristica">👥</span>
                    <span>4/10 Personas</span>
                </div>
                <div className="caracteristica">
                    <span className="icono-caracteristica">🧳</span>
                    <span>2 Maletas</span>
                </div>
                <div className="caracteristica">
                    <span className="icono-caracteristica">🚗</span>
                    <span>Cargador</span>
                </div>
                <div className="caracteristica">
                    <span className="icono-caracteristica">❄️</span>
                    <span>Aire acondicionado</span>
                </div>
                <div className="caracteristica">
                    <span className="icono-caracteristica">🛡️</span>
                    <span>Seguro de viaje</span>
                </div>
                <div className="caracteristica">
                    <span className="icono-caracteristica">👶</span>
                    <span>Silla para bebés</span>
                </div>
            </div>

            <div className="precio-info">
                <p className="precio-nota">El precio total se calcula sumando el costo individual de cada pasajero.</p>
            </div>

            <div className="total-seccion">
                <div className="precio-total">
                    <span className="etiqueta-total">Total:</span>
                    <span className="monto-total">MXN ${precioTotal.toLocaleString()}</span>
                </div>
                <button className="boton-agregar" onClick={agregarAlCarrito}>
                    Agregar al carrito
                </button>
                <button className="link-politicas">Políticas de cancelación</button>
            </div>
        </div>
    )
}

export default InfoVehiculo
