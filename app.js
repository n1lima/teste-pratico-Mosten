/* Caso queira limpar todos os filmes e votos armazenados no localStorage,
 descomente a linha abaixo. Use isso para resetar os dados, 
 por exemplo, durante testes.
 */
// localStorage.removeItem('filmes');

let filmes = JSON.parse(localStorage.getItem('filmes')) || [
  {
    titulo: "Minecraft: O Filme",
    genero: "Aventura, Fantasia, Animação",
    descricao: "Baseado no popular jogo de videogame, o filme segue a jornada épica de uma adolescente e seus amigos para salvar o mundo em blocos de uma ameaça perigosa.",
    capa: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHAuYOz4eh4akUfe6CHe55sV1UfpQ2clSp6wd5aFytCwHyLvEr",
    votosPositivos: 0,
    votosNegativos: 0
  },
  {
    titulo: "Shrek",
    genero: "Comédia, Aventura, Fantasia",
    descricao: "Um ogro mal-humorado e solitário tem sua paz perturbada e, para recuperá-la, precisa resgatar uma princesa em uma aventura divertida com um burro tagarela.",
    capa: "https://upload.wikimedia.org/wikipedia/pt/e/e6/Shrek_Poster.jpg",
    votosPositivos: 0,
    votosNegativos: 0
  },
  {
    titulo: "Scooby-Doo (2002)",
    genero: " Comédia, Mistério, Aventura",
    descricao: "A Mistério S.A. se reúne após dois anos para investigar eventos paranormais em um resort, mas precisam deixar de lado suas diferenças para resolver o caso.",
    capa: "https://m.media-amazon.com/images/M/MV5BNTE3MzJjYWYtOWZjMC00YjljLWE4ZGQtNGM2ZDkwYTE4YzQ0XkEyXkFqcGc@._V1_.jpg",
    votosPositivos: 0,
    votosNegativos: 0
  },
  {
    titulo: "Shrek 2",
    genero: "Comédia, Aventura, Fantasia",
    descricao: "Shrek e Fiona viajam para o Reino de Tão Tão Distante para o casamento, onde Shrek precisa provar seu valor para os pais de Fiona e enfrentar a Fada Madrinha e o Gato de Botas.",
    capa: "https://upload.wikimedia.org/wikipedia/pt/thumb/7/78/Shrek_2_Poster.jpg/250px-Shrek_2_Poster.jpg",
    votosPositivos: 0,
    votosNegativos: 0
  },
  {
    titulo: "Shrek - O Terceiro",
    genero: " Comédia, Aventura, Fantasia",
    descricao: "Com o rei doente, Shrek parte em uma jornada para encontrar o próximo herdeiro do trono, enquanto o Príncipe Encantado tenta tomar o reino de Tão Tão Distante.",
    capa: "https://m.media-amazon.com/images/M/MV5BNzg3YjY4N2UtMDQ2Zi00YzkxLThhZWQtN2ZmZmMyYzBhYzEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    votosPositivos: 0,
    votosNegativos: 0
  }
];

function salvarFilmes() {
  localStorage.setItem('filmes', JSON.stringify(filmes));
}

function renderizarFilmes() {
  const lista = document.getElementById('lista-filmes');
  lista.innerHTML = '';
  let totalPositivos = 0;
  let totalNegativos = 0;

  filmes.forEach((filme, i) => {
    totalPositivos += filme.votosPositivos;
    totalNegativos += filme.votosNegativos;

    const item = document.createElement('div');
    item.classList.add('filme');
    item.innerHTML = `
      <img src="${filme.capa}" alt="${filme.titulo}">
      <h3>${filme.titulo}</h3>
      <p><strong>Gênero:</strong> ${filme.genero}</p>
      <p>${filme.descricao}</p>
      <p>👍 ${filme.votosPositivos} | 👎 ${filme.votosNegativos}</p>
      <div class="botoes">
        <button class="btn-positivo" data-index="${i}">Gostei</button>
        <button class="btn-negativo" data-index="${i}">Não Gostei</button>
      </div>
    `;
    lista.appendChild(item);
  });

  document.getElementById('totalPositivos').textContent = totalPositivos;
  document.getElementById('totalNegativos').textContent = totalNegativos;

  document.querySelectorAll('.btn-positivo').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = btn.getAttribute('data-index');
      votar(index, 'positivo');
    });
  });

  document.querySelectorAll('.btn-negativo').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = btn.getAttribute('data-index');
      votar(index, 'negativo');
    });
  });
}

function votar(index, tipo) {
  index = parseInt(index);
  if (tipo === 'positivo') filmes[index].votosPositivos++;
  else filmes[index].votosNegativos++;
  salvarFilmes();
  renderizarFilmes();
}

document.getElementById('form-filme').addEventListener('submit', (e) => {
  e.preventDefault();
  const titulo = document.getElementById('titulo').value;
  const genero = document.getElementById('genero').value;
  const descricao = document.getElementById('descricao').value;
  const capa = document.getElementById('capa').value;

  filmes.push({ titulo, genero, descricao, capa, votosPositivos: 0, votosNegativos: 0 });
  salvarFilmes();
  renderizarFilmes();
  e.target.reset();
});

renderizarFilmes();
