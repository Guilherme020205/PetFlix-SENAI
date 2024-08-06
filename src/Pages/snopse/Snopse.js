// Recebe o id do filme selecionado
const id_recebido = 1; // Troque para o id desejado

document.addEventListener('DOMContentLoaded', () => {
    let filmeSelecionado = null;
    
    // Varre o array para encontrar o filme com o id correspondente
    for (let i = 0; i < filme.length; i++) {
        if (filme[i].id === id_recebido) {
            filmeSelecionado = filme[i];
            break;
        }
    }

    if (filmeSelecionado) {
        const titulo = filmeSelecionado.titulo;
        const tempo = filmeSelecionado.tempo;
        const data_lancamento = filmeSelecionado.data_lancamento;
        const descricao = filmeSelecionado.descricao;
        const capa = filmeSelecionado.capa;

        // Pegando os elementos
        const box_snopse = document.querySelector('.box_snopse'); 

        // Busca os elementos e já coloca as informações 
        box_snopse.querySelector('.capa_filme').src = capa;
        box_snopse.querySelector('.titulo_filme').textContent = titulo;
        box_snopse.querySelector('.tempo_filme').textContent = tempo;
        box_snopse.querySelector('.data_lancamento_filme').textContent = data_lancamento;
        box_snopse.querySelector('.descricao_filme').textContent = descricao;
    } else {
        console.error('Filme com o id fornecido não foi encontrado.');
    }
});

document.getElementById('trailerButton').onclick = function() {
    var filmeSelecionado = filme.find(f => f.id === id_recebido);
    if (filmeSelecionado) {
        var url = 'https://youtube.com/results?search_query=' + encodeURIComponent(filmeSelecionado.titulo + ' Trailer');
        window.open(url, '_blank', 'noopener,noreferrer');
    } else {
        console.error('Filme com o id fornecido não foi encontrado.');
    }
};