const botao = document.querySelector("#calcular");
const valorFinal = document.querySelector("#valorFinal");
const taxa_servico = 0.1;

botao.onclick = () => {
    const valor = Number(document.querySelector("#valor").value);
    const quantidade = Number(document.querySelector("#quantidade").value);

    const valor_pago = valor / quantidade;
    const valor_com_taxa = valor + (valor * taxa_servico);
    const valor_pago_com_taxa = valor_com_taxa / quantidade;
    const taxa = valor * taxa_servico;

    valorFinal.textContent = "Valor total com taxa de serviço: R$" + valor_com_taxa.toFixed(2) + "\nValor a ser pago por pessoa com taxa de serviço: R$" + valor_pago_com_taxa.toFixed(2) + " reais." + "\nValor da taxa de serviço: R$" + taxa.toFixed(2) + " reais.";
};