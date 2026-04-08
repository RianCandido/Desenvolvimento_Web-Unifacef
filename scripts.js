
    function calcular(){
        let qtdeArroz = Number(document.getElementById("qtdeArroz").value) // recupera para uma variável do JS a quantidade de arroz digitado pelo user
        let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value) // recupera para uma variável do JS a quantidade de feijão digitado pelo user
        let qtdeOleo = Number(document.getElementById("qtdeOleo").value) // recupera para uma variável do JS a quantidade de óleo digitado pelo user
        let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value) // recupera para uma variável do JS a quantidade de macarrão digitado pelo user
        let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 4) + (qtdeMacarrao * 2) // calcula a pontuação total ao usuário
        document.getElementById("result").innerText = "Pontuação: " + pontos // mostramos a pontuação total ao usuário
 }