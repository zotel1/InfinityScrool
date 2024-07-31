// Selecciona el elemento con la clase 'container'
const container = document.querySelector('.container');

// Agrega un evento de desplazamiento (scroll) a la ventana
window.addEventListener('scroll', () => {
    // Obtiene las dimensiones relevantes del documento
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;

    // Imprime información en la consola
    console.log(`scrollTop + clientHeight = ${scrollTop + clientHeight} | Altura personalizada = ${scrollHeight - 3}`);

    // Verifica si el desplazamiento alcanza una posición específica y luego llama a la función newContainer
    if (scrollTop + clientHeight > scrollHeight - 3) {
        setTimeout(newContainer, 400);
    }
});

// Función para crear un nuevo contenedor
const newContainer = () => {
    const box = document.createElement('div');
    box.className = 'box d'; // Asigna la clase 'box d' al nuevo contenedor
    container.appendChild(box); // Agrega el contenedor al elemento 'container'
};
