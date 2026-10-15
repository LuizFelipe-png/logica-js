const botao = document.querySelector("#calcular");
const saidaDesconto = document.querySelector("#resultado");
const saidaValorFinal = document.querySelector("#valorFinal");

const valorDoDesconto = (preco, percentual) => {
    return preco * (percentual / 100);
}

const aplicarDesconto = (preco, percentual) => {
    const desconto = valorDoDesconto(preco, percentual);
    return preco - desconto;
}

botao.onclick = () => {
    // 1. Ler os valores
    const valor = Number(document.querySelector("#valor").value);
    const porcentagem = Number(document.querySelector("#porcentagem").value);

    // 3. Mostrar os resultados
    saidaDesconto.textContent = "Desconto: " + valorDoDesconto(valor, porcentagem).toFixed(2) + " reais.";
    saidaValorFinal.textContent = "Valor final: " + aplicarDesconto(valor, porcentagem).toFixed(2) + " reais.";
};