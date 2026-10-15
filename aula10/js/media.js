const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");

const calcularMedia = (n1, n2) => {
    return (n1 + n2) / 2;
}

botao.onclick = () => {
    const n1 = Number(document.querySelector("#n1").value)
    const n2 = Number(document.querySelector("#n2").value)
    saida.textContent = "Média: " + calcularMedia(n1, n2).toFixed(1);
}
