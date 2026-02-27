// Esperar a que el HTML cargue completamente
document.addEventListener('DOMContentLoaded', () => {

    const selectorForm = document.querySelector('form');
    const inputBusqueda = document.getElementById('inputBusqueda');

    // 1. Evitar que la página se refresque
    if (selectorForm) {
        selectorForm.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }

    // 2. Filtrar mientras escribes
    if (inputBusqueda) {
        inputBusqueda.addEventListener('keyup', () => {
            const texto = inputBusqueda.value.toLowerCase();
            const tarjetas = document.querySelectorAll('.tarjeta-producto');

            tarjetas.forEach(tarjeta => {
                const nombre = tarjeta.querySelector('.nombre-producto').textContent.toLowerCase();
                
                if (nombre.includes(texto)) {
                    tarjeta.style.setProperty("display", "block", "important");
                } else {
                    tarjeta.style.setProperty("display", "none", "important");
                }
            });
        });
    }
});