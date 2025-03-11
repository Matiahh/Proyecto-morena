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
