// Función para actualizar el contador
function actualizarContador() {
    const fechaActual = new Date();
    const fechaEvento = new Date('2024-07-18 00:00:00'); // Fecha del Evento

    const diferencia = fechaEvento - fechaActual;

    const segundos = Math.floor(diferencia / 1000) % 60;
    const minutos = Math.floor(diferencia / (1000 * 60)) % 60;
    const horas = Math.floor(diferencia / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    document.getElementById('contador-dias').innerText = dias < 10 ? '0' + dias : dias;
    document.getElementById('contador-horas').innerText = horas < 10 ? '0' + horas : horas;
    document.getElementById('contador-minutos').innerText = minutos < 10 ? '0' + minutos : minutos;
    document.getElementById('contador-segundos').innerText = segundos < 10 ? '0' + segundos : segundos;
}


setInterval(actualizarContador, 1000);

// Boton de Reproducir y Pausar Audio

document.addEventListener('DOMContentLoaded', function () {
    // Abre el modal automáticamente al cargar la página
    $('#BienvenidaModal').modal('show');
    const audio = document.getElementById('audio');
    audio.muted = false;
    audio.play();
    const toggleButton = document.getElementById('toggleAudio');
    const playIcon = document.getElementById('btn-play');
    const pauseIcon = document.getElementById('btn-pause');
});

function play_music() {
    var audio = document.getElementById('audio');
    var toggleButton = document.getElementById('toggleAudio');
    var playIcon = document.getElementById('btn-play');
    var pauseIcon = document.getElementById('btn-pause');
    if (audio.paused) {
        audio.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    } else {
        audio.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
}