const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");

botao.onclick = () => {
    // 1. ler
    const temp = Number(document.querySelector("#tempo").value);

    // 2. calcular
    const horas = Math.floor(temp / 60);
    const minutos = temp % 60;
    
    // 3. mostrar
    saida.textContent = `${temp} minutos = ${horas} h e ${minutos} min`;

}