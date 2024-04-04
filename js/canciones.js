// Lista de canciones
const canciones = [
    "../GuitarHero/sources/Holy Wars.mp3",


    // Agrega más canciones aquí
];

// Índice de la canción actual
let indiceCancionActual = 0;

// Función para reproducir la siguiente canción
function reproducirSiguienteCancion() {
    // Crea un nuevo objeto de audio
    const audio = new Audio();

    // Actualiza el src del objeto de audio con la siguiente canción
    audio.src = canciones[indiceCancionActual];

    // Incrementa el índice de la canción actual
    indiceCancionActual = (indiceCancionActual + 1) % canciones.length;

    // Escucha el evento 'ended' para reproducir la siguiente canción cuando termine la actual
    audio.addEventListener('ended', reproducirSiguienteCancion);

    // Reproduce la canción
    audio.play();
}

// Inicia la reproducción de la primera canción
reproducirSiguienteCancion();
