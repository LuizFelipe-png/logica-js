const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");
const historicoTela = document.querySelector("#historico");

const secreto = Math.floor(Math.random() * 100) + 1;
const max = 7;
let tentativa = 0;
let historico = "";
let fim = false;

botao.onclick = () => {

    if (fim) {
        resultado.textContent = "O jogo acabou. Aperte F5 para jogar de novo.";
        resultado.className = "erro";
        return;
    }

    const texto = document.querySelector("#palpite").value;
    const palpite = Number(texto);

    if (texto === "" || palpite < 1 || palpite > 100) {
        resultado.textContent = "Por favor, insira um número entre 1 e 100.";
        resultado.className = "erro";
        return;
    }

    tentativa++;
    historico += palpite + " ";
    const restam = max - tentativa;

    if (palpite === secreto) {
        resultado.textContent = "Parabéns! Você acertou em " + tentativa + " tentativas.";
        resultado.className = "ok";
        fim = true;
    }
    else if (tentativa === max) {
        resultado.textContent = "Suas 7 tentativas acabaram. O número era " + secreto + ".";
        resultado.className = "erro";
        fim = true;
    }
    else if (palpite < secreto) {
        resultado.textContent = "O número secreto é maior. Restam " + restam + " tentativas.";
        resultado.className = "alerta";
    }
    else {
        resultado.textContent = "O número secreto é menor. Restam " + restam + " tentativas.";
        resultado.className = "alerta";
    }

    historicoTela.textContent = "Chutes: " + historico;
};