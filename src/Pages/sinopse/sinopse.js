// O código será executado após o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    // Obtém o ID do filme armazenado no localStorage e converte para inteiro
    const id_recebido = parseInt(localStorage.getItem('filmeId'), 10);

    // Verifica se um ID foi recebido
    if (!id_recebido) {
        console.error('Nenhum ID de filme encontrado no localStorage.');
        return;
    }

    // Encontra o filme com o ID recebido
    const filmeSelecionado = filme.find(filme => filme.id === id_recebido);

    // Se o filme for encontrado, preenche os detalhes na página
    if (filmeSelecionado) {
        const { titulo, tempo, data_lancamento, descricao, capa } = filmeSelecionado;

        const box_sinopse = document.querySelector('.box_sinopse'); 

        box_sinopse.querySelector('.capa_filme').src = capa;
        box_sinopse.querySelector('.titulo_filme').textContent = titulo;
        box_sinopse.querySelector('.tempo_filme').textContent = tempo;
        box_sinopse.querySelector('.data_lancamento_filme').textContent = data_lancamento;
        box_sinopse.querySelector('.descricao_filme').textContent = descricao;
    } else {
        console.error('Filme com o id fornecido não foi encontrado.');
    }
});

// Configura o botão de trailer para abrir uma nova aba com o trailer do filme
document.getElementById('trailerButton').onclick = function() {
    const id_recebido = parseInt(localStorage.getItem('filmeId'), 10);
    
    var filmeSelecionado = filme.find(f => f.id === id_recebido);
    if (filmeSelecionado) {
        var url = 'https://youtube.com/results?search_query=' + encodeURIComponent(filmeSelecionado.titulo + ' Trailer');
        window.open(url, '_blank', 'noopener,noreferrer');
    } else {
        console.error('Filme com o id fornecido não foi encontrado.');
    }
};