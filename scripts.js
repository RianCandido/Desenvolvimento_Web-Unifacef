
    function calcular(){
        // pontuação dos itens avulsos
        let qtdeArroz = Number(document.getElementById("qtdeArroz").value) // recupera para uma variável do JS a quantidade de arroz digitado pelo user
        let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value) // recupera para uma variável do JS a quantidade de feijão digitado pelo user
        let qtdeOleo = Number(document.getElementById("qtdeOleo").value) // recupera para uma variável do JS a quantidade de óleo digitado pelo user
        let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value) // recupera para uma variável do JS a quantidade de macarrão digitado pelo user
        let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 4) + (qtdeMacarrao * 2) // calcula a pontuação total ao usuário

        // pontuação dos kits de alimentação
        // recupera a cor escolhida pelo usuário
        let cor = document.getElementById("cor").value
        // estrutura de seleção
        let metaKit // meta do kit de alimentação
        if (cor == "amarelo"){
            metaKit = 54
        }
        else if (cor == "cinza"){
            metaKit = 51
        }
        else if (cor == "laranja"){
            metaKit = 24
        }
        else if (cor == "bordo"){
            metaKit = 88
        }
        else if (cor == "preto"){
            metaKit = 60
        }
        else if (cor == "rosa"){
            metaKit = 44
        }
        else if (cor == "roxo"){
            metaKit = 42
        }
        else if (cor == "verde"){
            metaKit = 61
        }
        else if (cor == "vermelho"){
            metaKit = 32
        }
        document.getElementById("result").innerText = "Pontuação: " + pontos // mostramos a pontuação total ao usuário
 }