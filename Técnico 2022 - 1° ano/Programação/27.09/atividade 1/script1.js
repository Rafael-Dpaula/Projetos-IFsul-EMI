function dados(){
    let lado = document.getElementById("quadrado").value;
    let ladoNum = parseFloat(lado);
    let perim = ladoNum * 4;
    console.log("o perimetro é: "+perim);
    let area = ladoNum*ladoNum;
    console.log("a área é de: "+area);
    let result1 = isPar(perim);
    let result2 = isPar(area);
    console.log("o perimetro é: "+result1);
    console.log("a area é: "+result2);
}
function isPar(num){
    if(num%2==0){
        return "é par";
    }
    else{
        return "é ímpar";
    }
}