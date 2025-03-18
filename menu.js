
// Mostrar el pop-up al cargar la página
window.onload = function() {
    document.getElementById("popup").style.display = "flex"; // Mostrar el pop-up
};

// Cerrar el pop-up si se hace clic fuera del contenido
window.onclick = function(event) {
    var popup = document.getElementById("popup");
    var popupContent = document.querySelector(".popup-content");

    // Si el clic es fuera del contenido del pop-up, cierra el pop-up
    if (event.target === popup) {
        popup.style.display = "none";
    }
};

// Código para manejar el cierre del pop-up cuando se haga clic fuera del contenido
document.addEventListener('click', function(event) {
    var popup = document.getElementById('popup');
    var popupContent = document.querySelector('.popup-content');
    
    if (event.target === popup) {
        popup.style.display = 'none';  // Cerrar el pop-up si se hace clic fuera
    }
});
