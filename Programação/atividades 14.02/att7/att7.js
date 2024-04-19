function add(){
    var vetor = [];
    let val = parseInt(document.getElementById("num").value);

    vetor.push(val);
    console.log(vetor);
    var promp = parseInt(prompt("digite um Numero..."));
    vetor.push(promp); 
    console.log(vetor);
    while(promp != -1){
        let promp2 = parseInt(prompt("digite um número..."))
        if(promp2 == -1){
            vetor.push(promp2)
            console.log(vetor);
            break
        }
        else{
        vetor.push(promp2);
       console.log(vetor);
        }
    }
    return
}