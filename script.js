const form = document.getElementById("form-add");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const primeiro = parseFloat(document.getElementById("a").value);
  const segundo = parseFloat(document.getElementById("b").value);

  const mensagemMaior = `Correto! <b>${segundo}</b> é maior que <b>${primeiro}</b>.`;
  const mensagemMenor = `Errado! <b>${segundo}</b> não é maior que <b>${primeiro}</b>.`;
  const mensagemIgual = `Iguais! <b>${segundo}</b> é igual a <b>${primeiro}</b>.`;

  const localMensagem = document.getElementById("mensagem");
  
  localMensagem.classList.remove("maior", "menor", "igual");

  if (primeiro < segundo) {
    localMensagem.innerHTML = mensagemMaior;
    localMensagem.classList.add("maior");
  } else if (primeiro > segundo) {
    localMensagem.innerHTML = mensagemMenor;
    localMensagem.classList.add("menor");
  } else {
    localMensagem.innerHTML = mensagemIgual;
    localMensagem.classList.add("igual");
  }
});
