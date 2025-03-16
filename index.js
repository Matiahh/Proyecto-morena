function openModal() {
    document.getElementById('menuModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('menuModal').style.display = 'none';
}

window.onclick = function(event) {
    let modal = document.getElementById('menuModal');
    if (event.target === modal) {
        closeModal();
    }
}

function iniciarMap(){
    var coord = {lat: -33.423128 , lng: -70.643362};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 14.7,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map,
        title: "Aqui toi"
    });
}

function moverCarrusel(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}


//FUNCIÓN DE LA ALERTA 

// Obtener los elementos de la capa de fondo (alert-overlay), la alerta y el botón de cierre
const alertOverlay = document.querySelector('.alert-overlay');
const alertElement = document.querySelector('.alert');
const btnClose = document.querySelector('.btn-close');

// Función para mostrar la alerta como un modal
function showAlert() {
    alertOverlay.style.display = 'flex'; // Mostrar el fondo oscuro
    alertElement.classList.add('show'); // Asegurarnos de que la alerta se muestre
}

// Función para cerrar la alerta
function closeAlert() {
    alertOverlay.style.display = 'none'; // Ocultar el fondo oscuro
    alertElement.classList.remove('show'); // Ocultar la alerta
}

// Mostrar la alerta al cargar la página
window.addEventListener('load', function() {
    showAlert(); // Mostrar la alerta como un modal
});

// Cerrar la alerta al hacer clic en el botón de cierre
btnClose.addEventListener('click', closeAlert);

// Cerrar la alerta al hacer clic fuera de la alerta (en el fondo oscuro)
alertOverlay.addEventListener('click', function(event) {
    if (!alertElement.contains(event.target)) {
        closeAlert(); // Cerrar la alerta si el clic es fuera de la alerta
    }
});

//
//document.querySelectorAll('a[href^="#quienes-somos"]').forEach(anchor => {
    //anchor.addEventListener("click", function (e) {
        //e.preventDefault();
        //let target = document.querySelector(this.getAttribute("href"));
        //let offset = 150; // Ajusta la distancia del desplazamiento

        //if (target) {
            //window.scrollTo({
          //      top: target.offsetTop - offset,
        //        behavior: "smooth"
      //      });
    //    }
  //  });
//});
//