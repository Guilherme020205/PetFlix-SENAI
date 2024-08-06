const id_genero_recebido = 1

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    const filmes_filtrados = filme.filter(filme => filme.genero === id_genero_recebido);

    filmes_filtrados.forEach(filme => {
        const filmeElement = document.createElement('div');
        filmeElement.classList.add('filme');

        const capa = document.createElement('img');
        capa.src = filme.capa;
        capa.classList.add('capa_filme');

        const titulo = document.createElement('p');
        titulo.textContent = filme.titulo;
        titulo.classList.add('titulo_filme');

        filmeElement.appendChild(capa);
        filmeElement.appendChild(titulo);

        container.appendChild(filmeElement);
    });
});