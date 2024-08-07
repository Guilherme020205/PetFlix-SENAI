const genero = [
    {
        id: 1,
        nome: "cachorro"
    },
    {
        id: 2,
        nome: "gato"
    }

]

const filme = [
    {
        id: 1,
        titulo: "Lassie",
        tempo: "1 hora e 40 minutos",
        data_lancamento: "2005",
        descricao: "A vida é difícil para o filho do mineiro de Yorkshire, Joe Carraclough (Jonathan Mason), que é espancado na escola por seu professor, seu único consolo é seu collie Lassie. Fica pior: quando a mina é desativada, seu pai, Sam (John Lynch), é forçado a vender o cachorro para o Duque (Peter O Toole), que é dono da propriedade local. O servo do Duque, Hynes (Steve Pemberton), assusta o cachorro, que continua correndo de volta, então os Carracloughs têm que continuar devolvendo-a, até que o Duque se mude para as Terras Altas da Escócia para a temporada de férias. Lassie escapa, embarcando em uma jornada desesperada para casa, com assustadores apanhadores de cães de Glasgow e acolhida por um artista de circo. Parece que um milagre é necessário, até o Natal.",
        capa: "https://m.media-amazon.com/images/M/MV5BMTdhNmMyZjQtZmMwYi00MGM4LThmMDEtNmEwNTZmZTM4ZDY5XkEyXkFqcGdeQXVyMDAyMjM2OQ@@._V1_.jpg",
        genero: 1
    },
    { id: 2, titulo: "Garfield: O Filme", tempo: "1 hora e 20 minutos", data_lancamento: "2004", descricao: "O gato Garfield vive uma vida tranquila até que um novo cão é adotado por sua dona.", capa: "https://upload.wikimedia.org/wikipedia/pt/c/cb/Garfield_the_movie.png", genero: 2 },
    { id: 3, titulo: "Os 101 Dálmatas", tempo: "1 hora e 43 minutos", data_lancamento: "1961", descricao: "Pongo e Perdita tentam resgatar seus filhotes sequestrados por Cruella de Vil.", capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKzIuNWNsNsuaI8KaZ_9BhGSdypqF6xiCq3g&s", genero: 1 },
    { id: 4, titulo: "O Gato de Botas", tempo: "1 hora e 30 minutos", data_lancamento: "2011", descricao: "O Gato de Botas embarca em uma aventura para provar seu valor e conquistar seu lugar na história.", capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-gApy3LHlkupcM8pBIRPt1fZV-wkdFyESRA&s", genero: 2 },
    { id: 5, titulo: "Marley & Eu", tempo: "1 hora e 55 minutos", data_lancamento: "2008", descricao: "A história emocionante de um casal e seu travesso Labrador, Marley.", capa: "https://upload.wikimedia.org/wikipedia/pt/0/09/Marley_Me_2008.jpg", genero: 1 },
    { id: 6, titulo: "Oliver e sua Turma", tempo: "1 hora e 14 minutos", data_lancamento: "1988", descricao: "Um gatinho órfão encontra amizade nas ruas de Nova York.", capa: "https://static.wikia.nocookie.net/dublagem/images/4/44/Oliver_e_sua_turma.jpeg/revision/latest?cb=20230714183930&path-prefix=pt-br", genero: 2 },
    { id: 7, titulo: "Beethoven: O Magnífico", tempo: "1 hora e 27 minutos", data_lancamento: "1992", descricao: "As aventuras de um adorável São Bernardo e sua família adotiva.", capa: "https://s2-globo-play.glbimg.com/ala1b0Z1zGLjMPGj1QjuPXBBoqc=/362x536/https://s2-globo-play.glbimg.com/FgeurWi-gg2bo-0GJuHhkZjszXE=/https://s2.glbimg.com/UqdmxImgtOujOIYw7Ib_t6E6pR0=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2024/R/I/UdmttqTwakL8GShxE9Zg/1769395-poster.jpg", genero: 1 },
    { id: 8, titulo: "O Gato Felix", tempo: "1 hora e 18 minutos", data_lancamento: "1988", descricao: "As aventuras do gato Felix em um mundo mágico.", capa: "https://static.wikia.nocookie.net/dublagem/images/3/3d/O_Gato_Felix.jpg/revision/latest?cb=20220217153013&path-prefix=pt-br", genero: 2 },
    { id: 9, titulo: "Scooby-Doo", tempo: "1 hora e 26 minutos", data_lancamento: "2002", descricao: "A gangue da Mistério S/A resolve um mistério em um parque temático assombrado.", capa: "https://m.media-amazon.com/images/M/MV5BMTg4MzMzMTY0OF5BMl5BanBnXkFtZTYwNzM3MTg2._V1_.jpg", genero: 1 },
    { id: 10, titulo: "Os Aristogatas", tempo: "1 hora e 18 minutos", data_lancamento: "1970", descricao: "Um grupo de gatos aristocráticos tenta voltar para casa após ser sequestrado.", capa: "https://br.web.img3.acsta.net/pictures/bzp/04/96.jpg", genero: 2 },
    { id: 11, titulo: "Meu Amigo Enzo", tempo: "1 hora e 49 minutos", data_lancamento: "2019", descricao: "Um cão narra a história de sua vida ao lado de seu dono, um aspirante a piloto de corridas.", capa: "https://br.web.img3.acsta.net/pictures/19/05/29/20/17/5905985.jpg", genero: 1 },
    { id: 12, titulo: "Kiki's Delivery Service", tempo: "1 hora e 43 minutos", data_lancamento: "1989", descricao: "Uma jovem bruxa e seu gato preto tentam se ajustar à vida em uma nova cidade.", capa: "https://m.media-amazon.com/images/S/pv-target-images/b7c6b9756d1fcc53987ae7ba88b1cb04d3daa47db2ffa11f88cbc57a8deb7683.jpg", genero: 2 },
    { id: 13, titulo: "A Dama e o Vagabundo", tempo: "1 hora e 16 minutos", data_lancamento: "1955", descricao: "A história de amor entre uma cocker spaniel da alta sociedade e um vira-lata das ruas.", capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO-xgnUgKa0sHsPf6CnK4uveYNBPaJer4leg&s", genero: 1 },
    { id: 14, titulo: "O Gato e o Rato", tempo: "1 hora e 30 minutos", data_lancamento: "2007", descricao: "Um gato e um rato vivem várias aventuras juntos em um mundo mágico.", capa: "https://m.media-amazon.com/images/I/61tjPuEVe-L._AC_UF1000,1000_QL80_.jpg", genero: 2 },
    { id: 15, titulo: "A Vida Secreta dos Bichos", tempo: "1 hora e 27 minutos", data_lancamento: "2016", descricao: "Acompanhe o que os animais de estimação fazem quando seus donos não estão por perto.", capa: "https://play-lh.googleusercontent.com/64Efs9MetFt5748vQ_IDujXOn18U2q014AhVMGsd24FpMXyH4LpoX4t7ihXeH5I6Rlo", genero: 1 },
    { id: 16, titulo: "Bolt: Supercão", tempo: "1 hora e 36 minutos", data_lancamento: "2008", descricao: "Bolt, um cachorro que pensa ter superpoderes, embarca em uma jornada para salvar sua dona.", capa: "https://upload.wikimedia.org/wikipedia/pt/5/5c/Bolt-filme.jpg", genero: 1 },
    { id: 17, titulo: "Gato Preto", tempo: "1 hora e 40 minutos", data_lancamento: "1995", descricao: "Um gato preto misterioso se torna o centro de um suspense intrigante.", capa: "https://upload.wikimedia.org/wikipedia/commons/9/99/The_Black_Cat_%281934_poster_-_Style_B%29.jpg", genero: 2 },
    { id: 18, titulo: "Meu Amigo Totoro", tempo: "1 hora e 26 minutos", data_lancamento: "1988", descricao: "Duas irmãs se mudam para o campo e encontram criaturas mágicas, incluindo um grande espírito da floresta.", capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjZkxuKL7MlL6WfFiFCSnT58SSJ0EGAA3ryw&s", genero: 2 },
    { id: 19, titulo: "Sempre ao Seu Lado", tempo: "1 hora e 33 minutos", data_lancamento: "2009", descricao: "A emocionante história de lealdade de um cão que espera por seu dono todos os dias na estação de trem.", capa: "https://br.web.img3.acsta.net/medias/nmedia/18/87/30/97/20028681.jpg", genero: 1 },
    { id: 20, titulo: "O Gato", tempo: "1 hora e 22 minutos", data_lancamento: "2003", descricao: "Um gato mágico transforma a vida de dois irmãos em uma divertida bagunça.", capa: "https://static.wikia.nocookie.net/dublagem/images/d/d2/O_Gato_%282003%29.jpeg/revision/latest?cb=20230725101551&path-prefix=pt-br", genero: 2 },
    { id: 21, titulo: "Como Cães e Gatos", tempo: "1 hora e 27 minutos", data_lancamento: "2001", descricao: "Uma comédia sobre a guerra secreta entre cães e gatos.", capa: "https://br.web.img3.acsta.net/medias/nmedia/18/92/54/50/20205559.jpg", genero: 1 },
    { id: 22, titulo: "Gato de Botas", tempo: "1 hora e 30 minutos", data_lancamento: "2011", descricao: "O Gato de Botas embarca em uma aventura para provar seu valor e conquistar seu lugar na história.", capa: "https://br.web.img3.acsta.net/medias/nmedia/18/89/67/23/20061404.jpg", genero: 2 },
    { id: 23, titulo: "O Cão e a Raposa", tempo: "1 hora e 23 minutos", data_lancamento: "1981", descricao: "A amizade entre um filhote de raposa e um cão de caça é posta à prova.", capa: "https://br.web.img3.acsta.net/medias/nmedia/18/94/37/91/20324399.jpg", genero: 1 },
    { id: 24, titulo: "Gato no Castelo", tempo: "1 hora e 50 minutos", data_lancamento: "2021", descricao: "Um gato explora um castelo antigo e encontra tesouros escondidos.", capa: "https://br.web.img2.acsta.net/pictures/15/07/13/21/47/517191.jpg", genero: 2 },
    
]
