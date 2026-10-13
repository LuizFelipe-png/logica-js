const valor = document.querySelector("#valor");
const botao = document.querySelector("#calcular");
const saida = document.querySelector("#saida");

botao.onclick = () => {
  const valor = Number(document.querySelector("#valor").value);
  const regiao = document.querySelector("#regiao").value; 
  let frete = 0;

  switch (regiao) {
    case "1":
      frete = valor + 15;
      break;
    case "2":
      frete = valor + 20;
      break;
    case "3":
      frete = valor + 25;
      break;
    case "4":
      frete = valor + 30;
      break;
    case "5":
      frete = valor + 35;
      break;
    default:
      frete = 0; 
  }

  (valorCompra >= 200 && regiao === "2" || regiao === "2") ? frete = 0 : frete;

  if(regiao === ""){
    saida.textContent = "Por favor, selecione uma região.";
    saida.className = "erro";
}
  else{
  saida.textContent = "O valor total é: R$ " + frete.toFixed(2);
  saida.className = "ok";
  }
};