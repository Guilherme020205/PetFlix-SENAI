function userDog(){
    // Armazena o ID do genero do user
    localStorage.setItem('userIdgenero', 1);
     // Monta a URL para a página de sinopse com base na URL atual
     const baseUrl = window.location.origin + window.location.pathname.substring(0, window.location.pathname.indexOf('/Home/'));
     window.location.href = `${baseUrl}/filmes/filmes.html`;
}

function userCat(){
    // Armazena o ID do genero do user
    localStorage.setItem('userIdgenero', 2);
     // Monta a URL para a página de sinopse com base na URL atual
     const baseUrl = window.location.origin + window.location.pathname.substring(0, window.location.pathname.indexOf('/Home/'));
     window.location.href = `${baseUrl}/filmes/filmes.html`;
}