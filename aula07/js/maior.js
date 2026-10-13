const valor = document.querySelector("#valor");
const botao = document.querySelector("#calcular");
const saida = document.querySelector("#saida");

botao.onclick = () => {
  const n1 = Number(document.querySelector("#n1").value);
  const n2 = Number(document.querySelector("#n2").value);

  if (n1 > n2) {
    saida.textContent = "O primeiro número é maior que o segundo número";
    saida.className = "ok";
  } 
  else if (n1 < n2) {
    saida.textContent = "O segundo número é maior que o primeiro número";
    saida.className = "alerta";
  } 
  else {
    saida.textContent = "Os números são iguais";
    saida.className = "erro";
  }
};
