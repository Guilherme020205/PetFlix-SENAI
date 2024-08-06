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

        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const titulo = document.createElement('p');
        titulo.textContent = filme.titulo;
        titulo.classList.add('titulo_filme');

        const sinopse = document.createElement('button');
        sinopse.textContent = '🔍';
        sinopse.classList.add('sinopse');

        filmeElement.appendChild(capa);
        cardElement.appendChild(titulo);
        cardElement.appendChild(sinopse);

        container.appendChild(filmeElement);
        filmeElement.appendChild(cardElement);

        // Busca os elementos e já coloca as informações 
        //  container.querySelector('.capa_filme').src = filme.capa;
    });
});