const valor = document.querySelector("#valor");
const botao = document.querySelector("#calcular");
const saida = document.querySelector("#saida");

botao.onclick = () => {
  const nota = Number(document.querySelector("#nota").value);

  if(nota >= 7){
    saida.textContent = "Aprovado";
    saida.className = "ok";
  }
  else if(nota < 7 && nota >= 5){
    saida.textContent = "Recuperação";
    saida.className = "alerta";
  }
  else if(nota < 5){
    saida.textContent = "Reprovado";
    saida.className = "erro";
  }
}
