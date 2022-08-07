export const formatearFecha = (fecha) => {
    const fechaFormateada = new Date(fecha)
    return fechaFormateada.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    })
    }