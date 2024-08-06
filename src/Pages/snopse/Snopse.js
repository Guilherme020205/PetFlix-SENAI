// Recebe o id do filme selecionado
const id_recebido = 0

document.addEventListener('DOMContentLoaded', () => {
    
    // Pegando os dados
    const titulo = filme[id_recebido].titulo // Titulo do filme
    const tempo = filme[id_recebido].tempo // Tempo do filme
    const data_lancamento = filme[id_recebido].data_lancamento // Data lançamento do filme
    const descricao = filme[id_recebido].descricao // Descrição do filme
    const capa = filme[id_recebido].capa // Link capa 

    // Pegando os elementos
    const box_snopse = document.querySelector('.box_snopse') 
    
    // Busca os elementos e já coloca as informações 
    box_snopse.querySelector('.capa_filme').src = capa;
    
    box_snopse.querySelector('.titulo_filme').textContent = titulo;
    box_snopse.querySelector('.tempo_filme').textContent = tempo;
    box_snopse.querySelector('.data_lancamento_filme').textContent = data_lancamento ;
    box_snopse.querySelector('.descricao_filme').textContent = descricao;

});

document.getElementById('trailerButton').onclick = function() {
    var url = 'https://youtube.com/results?search_query=' + encodeURIComponent( filme[id_recebido].titulo + ' Trailer');
    window.open(url, '_blank', 'noopener,noreferrer');
};  