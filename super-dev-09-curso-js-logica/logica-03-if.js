function exemploOperador Logicoe(){
    let idade = parseInt(prompt("Digite "Criança ou adolescente"))

    //0,1,2,3,4 ...17
    if ((idade>=0 && ()idade<=17)) {
        alert("Criança ou adolescente");
    } else if (idade >= 18) {
        alert ("Adulta");
    }else {
        alert("Idade inválida");
          }
    
    }

    /* 
    Tabela Verdade Operador E
    V e V => V
    V e F => F
    F e V => F
    F e F => F
    */

    //pipeline ->|| duas barras paralelas
    functionexemploOperadorLogicoOu(){
        let ((transporte === "moto")|| (transporte === "carro")) {
            alert ("viajar de boas");
        } else {
            alert("Não vamos viajar");
        }
    }

    /* limpar banheiro ou limpar janelas => pão de queijo com queijo de minas caso contrário . . .

    Tabela verdade Ou
    V ou V => V
    V ou F => V
    F ou V => V
    F ou F => F
    */
   
    // moba, fps, => 10%
    // aventura, rpg => 15%
    // roguelike, soulslike =>20%
    
    funcitionexemploLoja(){
        let nomeJogo1 = prompt("Digite o nome do jogo 1");
        let categoria1 = prompt("Digite a categoria do jogo");
        let precoBase1 = 399.90;

        let preComDesconto1 = 0;
        let percentualDesconto1 = 0;
        let precoDesconto1 = 0;

        if((categoria1 === "moba") || (categoria1 === "fps")){
            percentualDesconto1 = 0.10;
            precoDesconto1 = precoBase1 * percentualDesconto1;
            precoComDesconto1 = precoBase1 - precoDesconto1;
        } else if ((categoria1 ==="aventura") ||(categoria1 === "rpg")){
            percentualDesconto1 = 0.15;
            precoDesconto1 = precoBase1 * precoBase1;
            precoComDesconto1 = precoBase1 - precoDesconto1;
        } else if ((categoria1 === "roguelike") || (categoria1 === "soulslike")){
            percentualDesconto1 = 0.20;
            precoDesconto1 = precoBase1 * percentualDesconto1;
            precoComDesconto1 = precoBase1 - precoDesconto1;
        }
        let nome2 = prompt ("Digite o nome do jogo 2");
        let categoria2 = prompt("Digite a categoria do jogo");
        let precoBase2= 190.99;

        let precoComDesconto2 = 0;
        let percentualDeconto2=0;
        let precoDesconto2 = 0;

        if((categoria2 === "moba") || (categoria2 === "fps")){
            percentualDesconto2=0.10;
            precoDesconto2 = precoBase2 * percentualDesconto2;
            precoComDesconto2= precoBase2 - precoDesconto2;
        
        if((categoria2 === "aventura") || (categoria2 === "rpg")){
                percentualDesconto2=0.15;
                precoDesconto2 = percentualDesconto2 * precoBase2;
                precoComDesconto2= precoBase2 - precoDesconto2;  

        if((categoria2 === "roguelike") || (categoria2 === "soulslike")){
                percentualDesconto2=0.20;
                precoDesconto2 = percentualDesconto2 * precoBase2;
                precoComDesconto2= precoBase2 - precoDesconto2;  
 
    }

    let totalPedido = preComDesconto1 + precoComDesconto2;
 
    alert(
        "Nome: " + nome1 +
        "\nCategoria:" + categoria1+
        "\nPreço base: R$ " +precoBase.toFixed(2) +
        "\nValor do desconto: R$" + precoDesconto1.toFixed(2);
        "\nPercentual de desconto:" + precoComDesconto1 * 100 + "%" +
        "\nPreço do jogo1: R$" + precoComDesconto1.toFixed(2)+

        "\n\nNome:" + nome2 +
        "\nCategoria:" + categoria2 + 
        "\nPreço base R$" + precoBase2.toFixed(2) +
        "\nValor do desconto R$: " + percentualDesconto2.toFixed(2) +  
        "\nPercentual de desconto:" + percentualDesconto2 * 100 + "%" +
        "\nPreço do jogo: R$" + precoComDesconto2.toFixed(2)+
        "\n\nTotal: R$" + totalPedido.toFixed(2));
    }

    /*
    Ex. 1 