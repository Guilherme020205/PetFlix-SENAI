// ID do gênero recebido, que pode ser usado para filtrar filmes
// id_genero_recebido = 1;

// Obtém o ID do genero armazenado no localStorage e converte para inteiro
const id_recebido = parseInt(localStorage.getItem('userIdgenero'), 10);

// O código será executado após o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o elemento onde os filmes filtrados serão exibidos
    const container = document.querySelector('.container');

    // Filtra a lista de filmes pelo gênero recebido
    const filmes_filtrados = filme.filter(filme => filme.genero === id_recebido);

    // Para cada filme filtrado, cria os elementos HTML correspondentes
    filmes_filtrados.forEach(filme => {
        // Cria um novo elemento para o filme
        const filmeElement = document.createElement('div');
        filmeElement.classList.add('filme');

        // Cria e configura o elemento de imagem da capa do filme
        const capa = document.createElement('img');
        capa.src = filme.capa;
        capa.classList.add('capa_filme');

        const cardElement = document.createElement("div");
        cardElement.classList.add("cardBaixo"); 

        // Cria e configura o botão para ver a sinopse do filme
        const sinopseButton = document.createElement('button');
        sinopseButton.textContent = 'Sinopse'; // Corrigido "Snopse" para "Sinopse"
        sinopseButton.classList.add('sinopseButton');
        sinopseButton.onclick = () => {
            // Armazena o ID do filme no localStorage
            localStorage.setItem('filmeId', filme.id);

            // Monta a URL para a página de sinopse com base na URL atual
            const baseUrl = window.location.origin + window.location.pathname.substring(0, window.location.pathname.indexOf('/filmes/'));
            window.location.href = `${baseUrl}/sinopse/sinopse.html`;
        };

        // Adiciona os elementos criados ao elemento do filme
        filmeElement.appendChild(capa); 
        cardElement.appendChild(sinopseButton);

        // Adiciona o elemento do filme ao container
        container.appendChild(filmeElement);
        filmeElement.appendChild(cardElement)
    });
});

