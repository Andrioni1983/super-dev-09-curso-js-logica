/*
// Incrementar
let indice = 0; // Indice é um contador
indice = indice + 1; // indice = 0 + 1; // 1
indice = indice + 1; // indice = 1 + 1; // 2
indice = indice + 1; // 3
*/

function exemplo01(){
    debugger
    // Mostrar uma mensagem 4 vezes
    let indice = 0; // Indice é um contador

    while (indice < 4){
        console.log("Oie");
        indice=indice + 1;
    }
}


function exemploSolicitarNumeros(){
    // MODO ANTIGO, sem while
    // let numero1 = parseInt(prompt("Digite o número: "));
    // let numero2 = parseInt(prompt("Digite o número: "));
    // let numero3 = parseInt(prompt("Digite o número: "));

    debugger
    // Solicitar 3 números
    let indice = 0;

    // while: utilizamos para repetir código
    // while(indice < 3) {
    while(indice <= 2) {
        let numero = parseInt(prompt("Digite o número: "));
        indice = indice + 1;
    }

    alert("Muito obrigado");
}

function solicitarDadosPaciente(){
    // Solicitar os dados de 3 pacientes, nome e idade
    let indice = 0;

    while(indice < 3){
        let nome = prompt("Digite o seu nome").trim();
        let idade = parseInt(prompt("Digite sua idade"));

        let anoNascimento = 2026 - idade;

        alert(nome + " nasceu em " + anoNascimento);

        // Incrementar
        indice = indice + 1;
    }
}

function contagemRegressiva() {
    let indice = 10;

    while (indice >= 0) {
        alert(indice);
        indice = indice - 1;
    }
}

function calcularPrecoJogos() {
    let indice = 0;
   

    let total = 0;

    // Solicitar preço de 3 jogos
    while (indice <= 2) {
        let nome = prompt("Nome do jogo");
        let preco = parseFloat(prompt("Digite o preço"));

        // Somando: total recebe ele mesmo, ou seja, o valor inicial da variável total
        // mais o preço do jogo
        // total = 0 + preco;
        total = total + preco;

        indice = indice + 1;
    }
    alert("Total dos Jogos: " + total);
}

function descobrirQuantidade() {
    // Solicitar nome, idade de 3 pessoas e apresentar a quantidade de menores de idade
    let indice = 0;
    let quantidadeMenoresIdade = 0;
    debugger

    while (indice < 3) {
        let nome = prompt("Digite o nome");
        let idade = parseInt(prompt("Digite a idade"));

        if (idade <= 17) {
            // Incrementar a variável quantidadeMenoresIdade em 1
            quantidadeMenoresIdade = quantidadeMenoresIdade + 1;
        }

        indice = indice + 1;
    }
    alert("Quantidade de pessoas menores de 18 anos: " + quantidadeMenoresIdade);
}

function descobrirMaiorAltura(){
    // Descobrir maior altura
    let indice = 0;
    let maiorAltura = 0;

    while(indice < 4){
        let altura = parseFloat(prompt("Digite a altura")); // 2

        if(altura > maiorAltura){
            maiorAltura = altura;
        }

        indice = indice + 1;
    }

    alert("Maior altura: " + maiorAltura);
}

function descobrirMenorVitorias() {
    let indice = 0;
    let menorQuantidadeVitorias = 99999;

    while (indice < 3) {
        let personagem = prompt("Digite o nick");
        let quantidadeVitorias = parseInt(prompt("Digite a quantidade de vitórias"));

        if (quantidadeVitorias < menorQuantidadeVitorias) {
            menorQuantidadeVitorias = quantidadeVitorias;
        }

        indice = indice + 1;
    }

    alert("Menor quantidade de vitórias: " + menorQuantidadeVitorias);
}

function descobrirColaboradorComBonificacaoSalario(){
    let indice = 0;
    let maiorBonificacao = 0;
    let colaboradorMaiorBonificacao = "";

    while (indice < 3){
        let colaborador = prompt("Digite o nome do colab");
        let bonificacao = parseFloat(prompt("Digite o valor da bonificação"));


        if(bonificacao > maiorBonificacao){
            maiorBonificacao = bonificacao;

            colaboradorMaiorBonificacao = colaborador;
        }

        indice = indice + 1;
    }

    alert(colaboradorMaiorBonificacao + " tem a maior bonificação: " + maiorBonificacao);
}

function descobrirMenorNome() {
    let indice = 0;
    let menorNome = "papkdpakspdokaspokdpokopqwkpekpoqwkeopkqwepokaspdokpoaskd";

    let quantidadeDesejada = parseInt(prompt("Digite a quantidade desejada para cadastrar"));

    while (indice < quantidadeDesejada) {
        let nome = prompt("Digite o nome").trim();

        if (nome.length < menorNome.length) {
            menorNome = nome;
        }

        indice = indice + 1;
    }

    alert("Menor nome: " + menorNome + "\nQuantidade de caracteres: " + menorNome.length)
}

function repetirEnquantoUsuarioDesejaContinuar() {

    let desejaContinuar = "";

    alert("Bem vindo ao sistema de cadastro de fila de atendimento do SOS")

    while (desejaContinuar != "não") {

        let nomePaciente = prompt("Digite o nome do paciente");

        desejaContinuar = prompt("Deseja continuar? [sim/não]").toLowerCase();
    }
}

function repetirEnquantoUsuarioDesejaContinuarComConfirm() {
    let desejaContinuar = true;
    let quantidadePacientesCadastrados = 0;

    alert("Bem vindo ao sistema de cadastro de fila de atendimento do SOS");

    while (desejaContinuar != false) {
        let nomePaciente = prompt("Digite o nome do paciente");
        quantidadePacientesCadastrados = quantidadePacientesCadastrados + 1;
        
        // O confirm retorna true (OK) ou false (Cancelar)
        desejaContinuar = confirm("Deseja continuar?");
    }

    alert("Quantidade de pacientes que foram cadastrados: " + quantidadePacientesCadastrados);
}