class Alergia{
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
}

class Vacina{
    constructor(id, descricao, valor){
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;
    }
}
class Animal{
    constructor(id, nome, classe, nascimento, raca, porte, genero,
         cor, peso, anamnese, tutor){
        this.id = id;
        this.nome = nome;
        this.classe = classe;
        this.nascimento = nascimento;
        this.raca = raca;
        this.porte = porte;
        this.genero = genero;
        this.cor = cor;
        this.peso = peso;
        this.anamnese = anamnese;
        this.tutor = tutor;
        this.alergias = [];
    }

    addAlergia( alergia ){
        this.alergias.push(alergia);
    }

    listarAlergias(){
        var lista = "";
        this.alergias.forEach(alergia => { 
            lista += alergia.nome + ", ";
        });
        console.log("Alergias de " + this.nome + ": " + lista);
    }
}