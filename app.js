let listaAmigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Digite um nome antes de adicionar");
    return;
  }

  if (listaAmigos.includes(nome)) {
    alert("Este amigo já foi adicionado!");
    input.value = "";
    return;
  }

  listaAmigos.push(nome);
  input.value = "";
  mostrarAmigos();
}

function mostrarAmigos() {
  const ul = document.getElementById("listaAmigos");
  ul.innerHTML = "";

  listaAmigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    ul.appendChild(li);
  });
}

function sortearAmigo() {
  if (listaAmigos.length < 2) {
    alert("Adicione pelo menos dois amigos para fazer o sorteio!");
    return;
  }

  let amigosEmbaralhados = [...listaAmigos];
  for (let i = amigosEmbaralhados.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [amigosEmbaralhados[i], amigosEmbaralhados[j]] = [
      amigosEmbaralhados[j],
      amigosEmbaralhados[i],
    ];
  }

  const resultadoUl = document.getElementById("resultado");
  resultadoUl.innerHTML = "";

  for (let i = 0; i < amigosEmbaralhados.length; i++) {
    const amigoAtual = amigosEmbaralhados[i];
    const proximoAmigo =
      amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length];

    const li = document.createElement("li");
    li.textContent = `${amigoAtual} tirou ${proximoAmigo}`;
    resultadoUl.appendChild(li);
  }
}

function clearButton() {
  listaAmigos = [];

  const listaAmigosUl = document.getElementById("listaAmigos");
  const resultadoUl = document.getElementById("resultado");
  listaAmigosUl.innerHTML = "";
  resultadoUl.innerHTML = "";

  const input = document.getElementById("amigo");
  input.value = "";
}
