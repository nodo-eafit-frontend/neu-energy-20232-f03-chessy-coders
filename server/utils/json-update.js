// Agregar y exportar los 2 métodos para leer y actualizar JSON
const fs = require('fs');

function leerJsonEnergia(ruta) {
    try {
        const contenido = fs.readFileSync(ruta, 'utf8');
        return JSON.parse(contenido);
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
        return null;
    }
}

function actualizarJsonEnergia(ruta, nuevaData) {
    try {
        const contenidoActual = leerArchivoJson(ruta);

        if (contenidoActual) {
            // Realiza las actualizaciones necesarias en contenidoActual

            // Convierte el objeto actualizado a JSON
            const nuevoContenido = JSON.stringify(contenidoActual, null, 2);

            // Escribe el archivo actualizado
            fs.writeFileSync(ruta, nuevoContenido, 'utf8');
            console.log('Archivo JSON actualizado correctamente.');
        }
    } catch (error) {
        console.error('Error al actualizar el archivo JSON:', error);
    }
}


module.exports = { actualizarJsonEnergia, leerJsonEnergia };