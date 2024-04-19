var valores = [];
function programa(){
    function lervalores(){
        let v = -1;

    do{
        v = parseInt(prompt("informe um valor"));
        if(v != -1 && !isNaN(v)){
            if(busca(v) == -1){ // valor não existe no vetor
                valores.push(v);
            }
            else{ //valor existe no vetor
                alert("Valor já existe no vetor")
            }

    
        }
        else{
            alert("Informe um valor valido");
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
    console.log(valores.join());
    let ant = parseInt(prompt("informe valor antigo:"));
    let nov = parseInt(prompt("informe o valor novo:"));
    troca(ant,nov);
    console.log(valores.join());
}