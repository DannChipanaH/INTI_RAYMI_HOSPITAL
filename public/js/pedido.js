document.addEventListener('DOMContentLoaded', () => {
    let carritoPedido = [];
    
    const cargarMenuDia = async () => {
        try {
            const response = await fetch('/api/menu-dia');
            const menu = await response.json();
            mostrarMenuDia(menu);
        } catch (error) {
            console.error('Error al cargar el menú del día:', error);
        }
    };
    
    const cargarPlatosRegulares = async () => {
        try {
            const response = await fetch('/api/platos-regulares');
            const platos = await response.json();
            mostrarPlatosRegulares(platos);
        } catch (error) {
            console.error('Error al cargar los platos regulares:', error);
        }
    };
    
    const mostrarMenuDia = (menu) => {
        const container = document.getElementById('menuDiaContainer');
        container.innerHTML = menu.map(plato => `
            <div class="plato-card">
                <h4>${plato.nombre}</h4>
                <p>${plato.descripcion}</p>
                <p class="precio">$${plato.precio}</p>
                <button onclick="agregarAlPedido('menu', ${plato.id})">Agregar</button>
            </div>
        `).join('');
    };
    
    // Iniciar carga de datos
    cargarMenuDia();
    cargarPlatosRegulares();
}); 