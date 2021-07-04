const foto = document.querySelector('.foto-anotada > img');
const filtro = document.querySelector('#filtro-da-foto');

filtro.addEventListener('change', event => {
    foto.style.filter = filtro.value;
});