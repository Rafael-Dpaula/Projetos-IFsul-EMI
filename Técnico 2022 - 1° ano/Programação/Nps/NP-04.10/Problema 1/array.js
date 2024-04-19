var lista = []
function Lista(){
    let cont = 0;
    while(cont<100){
    let random = Math.floor(Math.random() * 20)+1;
    let result = document.getElementById("resultado");
    lista.push(random);
    result.innerHTML = lista;
    console.log(lista);
        cont++;
    }
}