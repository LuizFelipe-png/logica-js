const media = document.querySelector("#numero");
const botao = document.querySelector("#calcular");
const saida = document.querySelector("#saida");

botao.onclick = () => {
  const n1 = Number(document.querySelector("#numero").value);
  
  const par = n1 % 2 === 0;

  if(par) {
    saida.textContent = "O número " + n1 + " é par.";
    saida.className = "ok";
  }
  else{
    saida.textContent = "O número " + n1 + " é ímpar.";
    saida.className = "erro";
  }
};