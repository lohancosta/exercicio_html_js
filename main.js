const form = document.getElementById("formulario");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // impedir comportamento padrão

  const valorCampoA = Number(document.getElementById("campoA").value);
  const valorCampoB = Number(document.getElementById("campoB").value);

  const campoA = document.getElementById("campoA");
  const campoB = document.getElementById("campoB");

  const mensagemSucesso = `O valor <b>${valorCampoB}</b> do campo B é maior que o valor <b>${valorCampoA}</b> do Campo A `;
  const mensagemErro = `O valor <b>${valorCampoB}</b> do campo B é menor que o valor <b>${valorCampoA}</b> do Campo A `;

  let formularioCalculo = false;

  function valor(valorCampoA, valorCampoB) {
    return valorCampoA < valorCampoB;
  }

  const msgSucesso = document.querySelector(".mensagemSucesso");
  const msgErro = document.querySelector(".mensagemErro");

  formularioCalculo = valor(valorCampoA, valorCampoB);

  if (formularioCalculo) {
    msgSucesso.innerHTML = mensagemSucesso;
    msgSucesso.style.display = "block";
    msgErro.style.display = "none";

    campoA.style.border = "";
    msgErro.innerHTML = "";

    campoA.value = "";
    campoB.value = "";
  } else {
    campoA.style.border = "1px solid red";
    msgErro.innerHTML = mensagemErro;
    msgErro.style.display = "block";
    msgSucesso.style.display = "none";

    campoB.value = "";
  }
});
