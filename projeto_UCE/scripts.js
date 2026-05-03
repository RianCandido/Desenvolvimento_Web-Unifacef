function calcular(){
 
    // ITENS AVULSOS
    let qtdeArroz = Number(document.getElementById("qtdeArroz").value)
    let qtdeArroz1kg = Number(document.getElementById("qtdeArroz1kg").value)
    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value)
    let qtdeFeijao1kg = Number(document.getElementById("qtdeFeijao1kg").value)
    let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value)
    let qtdeOleo = Number(document.getElementById("qtdeOleo").value)
 
    let pontos = (qtdeArroz * 10) + (qtdeArroz1kg * 2) + (qtdeFeijao * 8) + (qtdeFeijao1kg * 4) + (qtdeMacarrao * 2) + (qtdeOleo * 4)
 
    // DEFINIÇÃO DA EQUIPE
    let cor = document.getElementById("cor").value
    let metaKit
 
    if (cor == "amarelo"){
        metaKit = 54
    }
    else if (cor == "cinza"){
        metaKit = 51
    }
    else if (cor == "laranja"){
        metaKit = 21
    }
    else if (cor == "marrom"){
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
 
    // KITS
    let qtdeKits = Number(document.getElementById("qtdeKits").value)
 
    if (qtdeKits >= metaKit){
        pontos += 5000
        if (qtdeKits > metaKit){
            pontos += (qtdeKits - metaKit) * (5000/metaKit)
        }
    } else {
        pontos += qtdeKits * (5000/metaKit)
    }
 
    // SUPLEMENTOS
    let metaSuplemento = Math.ceil(metaKit / 2)
    let qtdeSuplemento = Number(document.getElementById("qtdeSuplemento").value)
 
    if (qtdeSuplemento >= metaSuplemento){
        pontos += 5000
        if (qtdeSuplemento > metaSuplemento){
            pontos += (qtdeSuplemento - metaSuplemento) * (5000/metaSuplemento)
        }
    } else {
        pontos += qtdeSuplemento * (5000/metaSuplemento)
    }
 
    // LEITE
    let metaLeite = metaKit
    let qtdeLeite = Number(document.getElementById("qtdeLeite").value)
 
    if (qtdeLeite >= metaLeite){
        pontos += 5000
        if (qtdeLeite > metaLeite){
            pontos += (qtdeLeite - metaLeite) * (5000/metaLeite)
        }
    } else {
        pontos += qtdeLeite * (5000/metaLeite)
    }
 
    // SANGUE
    let metaSangue = Math.ceil(metaKit / 2)
    let qtdeSangue = Number(document.getElementById("qtdeSangue").value)
 
    if (qtdeSangue >= metaSangue){
        pontos += 5000
        if (qtdeSangue > metaSangue){
            pontos += (qtdeSangue - metaSangue) * (5000/metaSangue)
        }
    } else {
        pontos += qtdeSangue * (5000/metaSangue)
    }
 
    // RESULTADO
    document.getElementById("result").innerText = "Pontuação Total: " + pontos.toFixed(2) + " pontos"
}