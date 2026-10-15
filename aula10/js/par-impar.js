const media = document.querySelector("#numero");
const botao = document.querySelector("#calcular");
const saida = document.querySelector("#saida");

botao.onclick = () => {
  const n1 = Number(document.querySelector("#numero").value);

  if(ehPar(n1)){
    mostrar(`${n1} é par`, "ok");
  }
  else{
    mostrar(`${n1} é impar`, "alerta");
  }
  }
