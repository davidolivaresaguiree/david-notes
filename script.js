const openConfig = document.querySelector('.open-config');
const modalConfig = document.querySelector('.marco-config');
const closeConfig = document.querySelector('.cerrar-config');

openConfig.addEventListener("click", (e) => {
    e.preventDefault();
    modalConfig.classList.add('modal-config-show');
});

closeConfig.addEventListener("click", (e) => {
    e.preventDefault();
    modalConfig.classList.remove('modal-config-show');
});

const openInfo = document.querySelector('.open-info');
const informacionModal = document.querySelector('.informacion');
const closeInfo = document.querySelector('.close-info');

openInfo.addEventListener('click', (event) => {
    event.preventDefault();
    informacionModal.classList.add('informacion-show');
});

closeInfo.addEventListener('click', (event) => {
    event.preventDefault();
    informacionModal.classList.remove('informacion-show');
});

const openNota = document.querySelector('.nota');
const crearNota = document.querySelector('.nota-crear');
const closeNota = document.querySelector('.close-nota');

openNota.addEventListener('click', () => {
  crearNota.classList.add('nota-crear-show');
});

closeNota.addEventListener('click', () => {
  crearNota.classList.remove('nota-crear-show');
});
