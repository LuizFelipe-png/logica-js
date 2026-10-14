const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

const secreto = Math.floor(Math.random() * 100) + 1;
let tentativa = 0;

  botao.onclick = () => {

    const palpite = Number(document.querySelector("#palpite").value);
    tentativa++;

    if (palpite === secreto) {
        resultado.textContent = "Parabéns! Você acertou em " + tentativa + " tentativas.";
        resultado.className = "ok";
    } 
    else if (palpite < secreto) {
        resultado.textContent = "O número secreto é maior.";
        resultado.className = "alerta";
    }
    else {
        resultado.textContent = "O número secreto é menor.";
        resultado.className = "alerta";
    } 

    if(palpite === "" || palpite < 1 || palpite > 100) {
        resultado.textContent = "Por favor, insira um número entre 1 e 100.";
        resultado.className = "erro";
    }

}
