const btnMostrarNotas = document.querySelector('.mostrar-notas');
const notasGuardadas = document.querySelector('.notas-guardadas');
const btnCerrarNotas = document.querySelector('.btn-cerrar-notas');

btnMostrarNotas.addEventListener("click", () =>{
    notasGuardadas.classList.add('notas-guardadas-show');
    notaHidden.classList.add('nota-close');
});

btnCerrarNotas.addEventListener("click", () => {
    notasGuardadas.classList.remove('notas-guardadas-show');
    notaHidden.classList.remove('nota-close');
});



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
const notaHidden = document.querySelector('.nota');

openNota.addEventListener('click', () => {
    crearNota.classList.add('nota-crear-show');
    notaHidden.classList.add('nota-close');
});

closeNota.addEventListener('click', () => {
    crearNota.classList.remove('nota-crear-show');
    notaHidden.classList.remove('nota-close');
});

//editor

function formatDoc(cmd, value = null) {
    if (value) {
        document.execCommand(cmd, false, value);
    } else {
        document.execCommand(cmd);
    }
}

const btnGuadarNota = document.getElementById("guardar-nota");
const verNotas = document.getElementById("visualizar-notas");
const inputNota = document.getElementById("input-nota");

btnGuadarNota.addEventListener("click", function () {
    const card = document.createElement("div");
    card.classList.add("card-notas");
    verNotas.appendChild(card);

    const notaParrafo = document.createElement("p");
    notaParrafo.innerHTML = inputNota.innerHTML;
    card.appendChild(notaParrafo);

    const eliminarNota = document.createElement("button");
    eliminarNota.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`;
    card.appendChild(eliminarNota);

    eliminarNota.addEventListener("click", function(){
        card.remove();
    });

    inputNota.innerHTML = "";
});
