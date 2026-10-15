const mostrar = (mensagem, classe) => {
    const saida = document.querySelector("#saida")
    saida.textContent = mensagem;
    saida.className = classe; 
}

const ehPar = (n1) => n1 % 2 === 0;