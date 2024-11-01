let i = 0;
function mudarFoto(indice) {
  const fotos = document.getElementById("fotos");
  const totalFotos = fotos.children.length;
  i = (indice + totalFotos) % totalFotos;
  fotos.style.transform = `translateX(-${i * 100}%)`;
}
function anterior() {
  mudarFoto(i - 1);
}
function proximo() {
  mudarFoto(i + 1);
}

function adicionarUC() {
  const novaUC = prompt("Digite o nome da nova UC:");
  if (novaUC) {
    const li = document.createElement("li");
    li.innerHTML = `${novaUC} <button onclick="moverCima(this)">🔼</button> <button onclick="moverBaixo(this)">🔽</button>`;
    document.getElementById("lista-ucs").appendChild(li);
  }
}

function moverCima(botao) {
  const item = botao.parentNode;
  if (item.previousElementSibling) {
    item.parentNode.insertBefore(item, item.previousElementSibling);
  }
}

function moverBaixo(botao) {
  const item = botao.parentNode;
  if (item.nextElementSibling) {
    item.parentNode.insertBefore(item.nextElementSibling, item);
  }
}

function validarCPF() {
  const cpf = document.getElementById("cpf").value;
  const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  if (!regexCPF.test(cpf)) {
    alert("CPF inválido! Use o formato ddd.ddd.ddd-dd.");
  }
}

function validarEmail() {
  const email = document.getElementById("email").value;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    alert("E-mail inválido!");
  }
}

function adicionarDescricao() {
  const descricaoExtra = document.getElementById("nova-descricao").value.trim();
  if (descricaoExtra) {
    const descricaoAtual = document.querySelector("#descricao-atual");
    descricaoAtual.innerHTML += " " + descricaoExtra;
    document.getElementById("nova-descricao").value = "";
  }
}
