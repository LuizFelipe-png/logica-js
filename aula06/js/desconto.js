const botao = document.querySelector("#calcular");
const saidaDesconto = document.querySelector("#resultado");
const saidaValorFinal = document.querySelector("#valorFinal");

botao.onclick = () => {
    // 1. Ler os valores
    const valor = Number(document.querySelector("#valor").value);
    const porcentagem = Number(document.querySelector("#porcentagem").value);

    // 2. Calcular o desconto e o valor final
    const desconto = valor * (porcentagem / 100);
    const valor_final = valor - desconto;

    // 3. Mostrar os resultados
    saidaDesconto.textContent = "Desconto: " + desconto.toFixed(2) + " reais.";
    saidaValorFinal.textContent = "Valor final: " + valor_final.toFixed(2) + " reais.";
};