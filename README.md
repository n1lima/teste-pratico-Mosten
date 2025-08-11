# Simulador de Votação de Filmes e Séries

## Descrição do Repositório

Este projeto é um simulador de votação para filmes e séries, criado como parte de um teste prático de formação.  
A aplicação permite aos usuários visualizar uma lista de títulos, votar neles (positivamente ou negativamente) e adicionar novos filmes ou séries à lista.  

## Funcionalidades

- **Exibição de Itens**: A aplicação exibe inicialmente uma lista com pelo menos 5 filmes ou séries.  
  Cada item possui título, gênero, descrição, imagem e botões de votação ("Gostei" e "Não Gostei").
  
- **Votação**: Ao clicar nos botões "Gostei" ou "Não Gostei", o contador de votos é atualizado imediatamente.  
  Os votos são armazenados por item, e os totais de votos positivos e negativos são exibidos tanto por item quanto de forma geral na página.

- **Cadastro de Novos Itens**: É possível cadastrar novos filmes ou séries através de um formulário.  
  Os campos obrigatórios para cadastro são título, gênero e URL da imagem. A descrição é opcional.  
  Novos itens são adicionados com os votos zerados e ficam disponíveis para votação imediatamente.

- **Armazenamento de Dados**: Todos os dados, incluindo a lista de filmes/séries e os votos, são persistidos usando o `localStorage` do navegador, garantindo que as informações não se percam ao recarregar a página.

## Estrutura do Projeto

O projeto é composto por três arquivos principais:

- `index.html`: Estrutura da página web, incluindo lista de filmes, contadores de votos e formulário de cadastro.
- `styles.css`: Folha de estilos responsável pela aparência visual da aplicação.
- `app.js`: Script JavaScript que gerencia a lógica da aplicação, como renderização dos filmes, contagem de votos, cadastro de novos itens e persistência no `localStorage`.

## Como Executar

1. Clone o repositório para sua máquina local.  
  ```bash
   git clone https://github.com/n1lima/teste-pratico-Mosten.git
```

## Observação Importante

No início do arquivo `app.js`, existe uma linha comentada que pode ser usada para **limpar todos os filmes e votos armazenados no `localStorage`**:

```js
// localStorage.removeItem('filmes');
```

## Link da Aplicação

Você pode acessar a aplicação funcionando no link abaixo:

[Simulador de Votação de Filmes e Séries](https://n1lima.github.io/teste-pratico-Mosten)


