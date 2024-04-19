function teste(){
    let Base = document.getElementById("base").value;
    let Altura = document.getElementById("altura").value;
    let alt = parseFloat(Altura);
    let bas = parseFloat(Base);
    let perim = bas*2+alt*2;
    let area = alt * bas;
    console.log("a area é: "+area);
    console.log("o perimetro é "+perim);
    let v2 = aoQuadrado(bas*2,alt*2);
    
}
function aoQuadrado(bas,alt){
    let perimV2 = bas*2+alt*2;
    let areaV2 = alt*bas;
    console.log("o perimetro com base e altura em dobro é "+perimV2);
    console.log("a area com base e altura ao quadrado em dobro é "+areaV2);
}