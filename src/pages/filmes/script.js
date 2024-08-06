const id_recebido = 1

document.addEventListener('DOMContentLoaded', () => {
    const capa = filme[id_recebido].capa
    const titulo = filme[id_recebido].titulo

    const detalhes = document.querySelector('.container')

    detalhes.querySelector('.capa_filme').src = capa;
    detalhes.querySelector('.titulo_filme').textContent = titulo;
});