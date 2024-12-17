// Aguarda o DOM estar totalmente carregado antes de adicionar os eventos
/*document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o formulário
    const formulario = document.getElementById('formulario');

    // Adiciona um ouvinte ao evento "submit" do formulário
    formulario.addEventListener('submit', (event) => {
        // Impede o envio do formulário e o recarregamento da página
        event.preventDefault();

        // Seleciona o campo de nome e obtém o valor digitado
        const nomeElemento = document.getElementById('nome');
        const nome = nomeElemento ? nomeElemento.value : null;

        // Verifica se o campo foi preenchido
        if (nome) {
            console.log(`Nome enviado: ${nome}`);
        } else {
            console.log("Por favor, preencha o campo de nome.");
        }
    });
})*/


function square(numero){
    return numero * numero;
}

console.log(square(5))

const soma = (a,b) => a + b;
console.log(soma(2,3));

let contador = 0;

const inicializarContador = () => {
  const h1 = document.getElementById("contador");
  const botao = document.getElementById("incrementar");

  const atualizarContador = () => {
    contador++;
    h1.textContent = contador;
  };

  botao.addEventListener("click", atualizarContador);
};

// Inicializa a funcionalidade quando a página carrega
document.addEventListener("DOMContentLoaded", inicializarContador);
