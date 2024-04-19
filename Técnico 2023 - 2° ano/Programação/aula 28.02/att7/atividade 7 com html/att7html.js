var valores = [];
function programa(){
    function lervalores(){
        let v = -1;

    do{
        v = parseInt(document.getElementById("a").value);
        if(v != -1 && !isNaN(v)){
            if(busca(v) == -1){ // valor não existe no vetor
                valores.push(v);
                break;
            }
            else{ //valor existe no vetor
                alert("Valor já existe no vetor")
                break;
            }

    
        }
        else{
            alert("Informe um valor valido");
            break;
        }

    }while(v != -1);
    console.log(valores.join()); //mostra os valores do vetor
    } 
    lervalores();


    function busca(valor){
        let flag = -1; // variável para retorno da função

        valores.forEach(function(v, ind){

            if(valor == v){ 
                //se o valor do parâmetro é igual ao valor que esta no vetor
                flag = ind; //muda a flag para o indice do valor
            }

        });
        return flag;
    }

    function troca(antigo, novo){
        let indantigo = busca(antigo);// -1 se nao encontrar
        let indnovo = busca(novo);//-1 se n encontrar

        if(indantigo != -1){//pode fazer a troca
            if(indnovo == -1){//pode fazer a troca
                /////vamos trocar
                valores[indantigo] = novo;
            }else{
                alert("valor antigo não existe no vetor")    
            }
        }else{
            alert("valor antigo não existe no vetor")
        }

    }
    let ant = parseInt(document.getElementById("c").value);
    let nov = parseInt(document.getElementById("b").value);
    troca(ant,nov);
    console.log(valores.join());

    //resultados em html
    let resultplv = document.getElementById("plvresult");
    let result1 = document.getElementById("result1");
    let result2 = document.getElementById("result2");
    let result3 = document.getElementById("result3");
    let result4 = document.getElementById("result4");

    resultplv.innerHTML = "Resultados do programa: ";
    result1.innerHTML = "O valor lido foi: " + parseInt(document.getElementById("a").value);
    result2.innerHTML = "O valor antigo selecionado foi: " + ant;
    result3.innerHTML = "O valor novo selecionado: " + nov;
    result4.innerHTML = "Os elementos do vetor são: " + valores.join();
}