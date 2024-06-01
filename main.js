const form = document.getElementById("formulario");

form.addEventListener("submit", function (e) {
  //Esta linha adiciona um ouvinte de evento ao formulário. O evento que está sendo ouvido é o "submit" (envio) do formulário. Quando o formulário é enviado, a função definida é executada.
  e.preventDefault(); // impedir comportamento padrão, para que possamos fazer validações ou outras operações antes de realmente enviar os dados.

  const valorCampoA = Number(document.getElementById("campoA").value);
  const valorCampoB = Number(document.getElementById("campoB").value); //Estas linhas obtêm os valores dos campos de entrada com os IDs do HTML "campoA" e "campoB", convertem esses valores para números e os armazenam em valorCampoA e valorCampoB.

  const campoA = document.getElementById("campoA");
  const campoB = document.getElementById("campoB"); //Estas linhas armazenam as referências aos elementos do DOM com os IDs do HTML "campoA" e "campoB" em campoA e campoB.

  const mensagemSucesso = `O valor <b>${valorCampoB}</b> do campo B é maior que o valor <b>${valorCampoA}</b> do Campo A `;
  const mensagemErro = `O valor <b>${valorCampoB}</b> do campo B é menor que o valor <b>${valorCampoA}</b> do Campo A `; //Estas linhas definem duas mensagens, uma de sucesso e uma de erro, que serão exibidas com base na comparação dos valores dos campos. As mensagens usam template literals para inserir os valores dos campos nas strings.

  let formularioCalculo = false; //Inicializa uma variável formularioCalculo com o valor false. Esta variável será usada para determinar se a condição especificada é verdadeira ou falsa.

  function valor(valorCampoA, valorCampoB) {
    return valorCampoA < valorCampoB; //Define uma função valor que recebe dois argumentos (valorCampoA e valorCampoB) e retorna true se valorCampoA for menor que valorCampoB, e false caso contrário.
  }

  const msgSucesso = document.querySelector(".mensagemSucesso");
  const msgErro = document.querySelector(".mensagemErro"); //Obtém as referências aos elementos do DOM com as classes mensagemSucesso e mensagemErro do HTML e as armazena em msgSucesso e msgErro, respectivamente.

  formularioCalculo = valor(valorCampoA, valorCampoB); //Chama a função valor com os valores valorCampoA e valorCampoB e armazena o resultado em formularioCalculo.

  // Este bloco if-else exibe a mensagem apropriada com base no valor de formularioCalculo:
  // Se formularioCalculo for true (ou seja, valorCampoA é menor que valorCampoB):
  if (formularioCalculo) {
    msgSucesso.innerHTML = mensagemSucesso; // Define o conteúdo HTML de msgSucesso para mensagemSucesso.
    msgSucesso.style.display = "block"; // Mostra mensagem msgSucesso
    msgErro.style.display = "none"; // esconde mensagem msgErro

    campoA.style.border = ""; // remove borda do campoA
    msgErro.innerHTML = ""; // limpa o conteúdo de msgErro

    campoA.value = ""; // Limpar valor do campoA
    campoB.value = ""; // Limpar valor do CampoB
    //Se formularioCalculo for false (ou seja, valorCampoA não é menor que valorCampoB):
  } else {
    campoA.style.border = "1px solid red"; // Adiciona uma borda vermelha ao campo campoA
    msgErro.innerHTML = mensagemErro; // Define o conteúdo HTML de msgErro para mensagemErro
    msgErro.style.display = "block"; // Mostra msgErro
    msgSucesso.style.display = "none"; // Esconde msgSucesso

    campoB.value = ""; // Limpa o valor do campoB
  }

  //Limpa o valor do campo campoB.
});
