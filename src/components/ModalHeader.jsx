function ModalHeader({ onClose }) {
    return (
        <div className="modal-header">
            <h2 className="modal-titulo">Reservar transporte</h2>
            <button className="boton-cerrar" onClick={onClose}>
                ×
            </button>
        </div>
    )
}

export default ModalHeader
