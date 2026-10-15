const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");
const botaoF = document.querySelector("#calcularFahrenheit");

const celsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
const fahrenheit = (celsius) => (celsius * 9) / 5 + 32;

botao.onclick = () => {
  // 1. ler
  const n1 = Number(document.querySelector("#celsius").value);

  const celsiuss = celsius(n1);

  // 3. mostrar
  saida.textContent = "Celsius:  " + celsiuss.toFixed(1);
  saida.className = "ok";
};

botaoF.onclick = () => {
  const n2 = Number(document.querySelector("#fahrenheit").value);
  const fahrenheitt = fahrenheit(n2);
  saida.textContent = "Fahrenheit:  " + fahrenheitt.toFixed(1);
  saida.className = "ok";
};
