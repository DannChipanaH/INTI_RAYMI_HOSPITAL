document.addEventListener('DOMContentLoaded', () => {
    // Función para cargar el menú del día
    const cargarMenuDia = async () => {
        try {
            const response = await fetch('/api/menu-dia');
            const menu = await response.json();
            mostrarMenu(menu);
        } catch (error) {
            console.error('Error al cargar el menú:', error);
        }
    };

    // Función para mostrar el menú en la página
    const mostrarMenu = (menu) => {
        const contenedor = document.getElementById('menu-contenido');
        contenedor.innerHTML = menu.map(plato => `
            <div class="plato-card">
                <h3>${plato.nombre}</h3>
                <p>${plato.descripcion}</p>
                <p class="precio">Precio: $${plato.precio}</p>
            </div>
        `).join('');
    };

    // Cargar el menú cuando la página se inicie
    cargarMenuDia();
});
