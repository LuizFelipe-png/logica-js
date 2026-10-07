const botao = document.querySelector("#calcular");
const saidaResultado = document.querySelector("#resultado");

botao.onclick = () => {
    // 1. Ler os valores
    const distancia = Number(document.querySelector("#distancia").value);
    const kmLitro = Number(document.querySelector("#kmLitro").value);
    const precoLitro = Number(document.querySelector("#precoLitro").value);

    // 2. Calcular os resultados
    const litrosGastos = distancia / kmLitro;
    const custoIda = litrosGastos * precoLitro;
    const custoIdaVolta = custoIda * 2;

    // 3. Mostrar os resultados
    saidaResultado.textContent = "Litros gastos: " + litrosGastos.toFixed(1) + " litros.\n" +
                                 "Custo da ida: R$ " + custoIda.toFixed(2) + ".\n" +
                                 "Custo da ida e volta: R$ " + custoIdaVolta.toFixed(2) + ".";
};