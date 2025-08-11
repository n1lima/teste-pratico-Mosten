let filmes = JSON.parse(localStorage.getItem('filmes')) || [
    {
      titulo: "O Poderoso Chefão",
      genero: "Drama",
      descricao: "A história da família Corleone e o mundo da máfia.",
      capa: "https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg",
      votosPositivos: 0,
      votosNegativos: 0
    },
    {
      titulo: "Vingadores: Ultimato",
      genero: "Ação",
      descricao: "Os Vingadores tentam reverter o estalo de Thanos.",
      capa: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg",
      votosPositivos: 0,
      votosNegativos: 0
    },
    {
      titulo: "Interestelar",
      genero: "Ficção Científica",
      descricao: "Exploração espacial para salvar a humanidade.",
      capa: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_SY606_.jpg",
      votosPositivos: 0,
      votosNegativos: 0
    },
    {
      titulo: "A Origem",
      genero: "Suspense",
      descricao: "Um ladrão invade sonhos para roubar segredos.",
      capa: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3VT-Ynisr-nRV7R65rC8iZ4jyJKgLHU7wvROHYTnc1X7zg_4i",
      votosPositivos: 0,
      votosNegativos: 0
    },
    {
      titulo: "Toy Story",
      genero: "Animação",
      descricao: "Brinquedos ganham vida quando os humanos não estão olhando.",
      capa: "https://upload.wikimedia.org/wikipedia/pt/a/a7/Toy_Story_1995.jpg",
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
          <button onclick="votar(${i}, 'positivo')">Gostei</button>
          <button onclick="votar(${i}, 'negativo')">Não Gostei</button>
        </div>
      `;
      lista.appendChild(item);
    });

    document.getElementById('totalPositivos').textContent = totalPositivos;
    document.getElementById('totalNegativos').textContent = totalNegativos;
  }

  function votar(index, tipo) {
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