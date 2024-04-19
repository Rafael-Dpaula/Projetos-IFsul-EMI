function faixa(){
    let idade = document.getElementById("Idade").value
    if(idade > 30){
        console.log("o jogador se enquadra na categoria sênior");
    }
    else if(idade <= 30 && idade > 18){
        console.log("o jogador se enquadra na categoria adulto");
    }
    else if(idade <= 18 && idade >= 16){
        console.log("o jogador se enquadra na catrgoria juvenil 2");
    }
    else if(idade <= 15 && idade >= 13){
        console.log("o jogador se enquadra na categoria juvenil");
    }
    else if(idade < 13 && idade >= 7){
        console.log("o jogador se enquadra na categoria infantil");
    }
    else{
        console.log("o jogador não se enquadra para o torneio");
    }
}