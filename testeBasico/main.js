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

// Função para inicializar o contador
const inicializarContador = () => {
  const h1 = document.getElementById("contador");
  const botao = document.getElementById("incrementar");

  const atualizarContador = () => {
    contador++;
    h1.textContent = contador;
  };

  botao.addEventListener("click", atualizarContador);
};

// Função para inicializar a lista de tarefas
const inicializarTarefa = () => {
  const listaTarefas = document.getElementById("tarefas");
  const botaoAdd = document.getElementById("botaoAdd");
  const botaoExcluir = document.getElementById("botaoExcluir");

  // Função para adicionar tarefa
  const adicionarTarefa = () => {
    const campoTarefa = document.getElementById("tarefa").value;

    if (campoTarefa.trim() !== "") { // Evita adicionar tarefas vazias
      const novaTarefa = document.createElement("li");
      novaTarefa.textContent = campoTarefa;

      // Botão de remover tarefa específico
      const botaoRemover = document.createElement("button");
      botaoRemover.textContent = "Remover";
      botaoRemover.addEventListener("click", () => {
        novaTarefa.remove();
      });

      novaTarefa.appendChild(botaoRemover);
      listaTarefas.appendChild(novaTarefa);

      document.getElementById("tarefa").value = ""; // Limpa o campo de input
    }
  };

  // Função para excluir todas as tarefas
  const removerTodasTarefas = () => {
    listaTarefas.innerHTML = "";
  };

  botaoAdd.addEventListener("click", adicionarTarefa);
  botaoExcluir.addEventListener("click", removerTodasTarefas);
};

// Inicializa tudo quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
  inicializarContador();
  inicializarTarefa();
});
