const valor = document.querySelector("#valor");
const botao = document.querySelector("#calcular");
const saida = document.querySelector("#saida");

botao.onclick = () => {
  const peso = Number(document.querySelector("#peso").value);
  const altura = Number(document.querySelector("#altura").value);

    if(peso === 0 || altura === 0) {
        saida.textContent = "Por favor, preencha todos os campos";
        saida.className = "erro";
        return;
    }
    if(peso <= 0 || altura <= 0) {
        saida.textContent = "Por favor, insira valores válidos para peso e altura";
        saida.className = "erro";
        return;
    }

  IMC = peso / (altura * altura);

    if (IMC < 18.5) {
        saida.textContent = "Seu IMC é " + IMC.toFixed(1) + ". Você está abaixo do peso.";
        saida.className = "alerta";
    } 
    else if (IMC >= 18.5 && IMC < 25) {
        saida.textContent = "Seu IMC é " + IMC.toFixed(1) + ". Você está com o peso normal.";
        saida.className = "ok";
    } 
    else if (IMC >= 25 && IMC < 30) {
        saida.textContent = "Seu IMC é " + IMC.toFixed(1) + ". Você está com sobrepeso.";
        saida.className = "alerta";
    } 
    else {
        saida.textContent = "Seu IMC é " + IMC.toFixed(1) + ". Você está com obesidade.";
        saida.className = "erro";
    } 
};
