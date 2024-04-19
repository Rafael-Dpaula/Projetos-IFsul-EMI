// criar classe carro
class carro{
    //constructor é uma função especial que é execitada quando um objeto é criado a partir da classe
    constructor(modelo, marca, cor, chassi, placa, quilometragem, categoria, combustivel, ligado){
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.chassi = chassi;
        this.placa = placa;
        this.quilometragem = quilometragem;
        this.categoria = categoria;
        this.combustivel = combustivel;
        this.ligado = ligado; 
    }
    ligar(){ 
        this.ligado = true;
    }
    desligar(){ 
        this.ligado = false;
    }
    deslocar(km){ 
        this.quilometragem = this.quilometragem + km;
    }
}// fim da classe

// criando um objeto carro 

var carro1 = new carro("Corsa", "chevrolet", "branco", "ATG34322GTRS444","PPP09090", 5000, "passeio", "flex", false);
console.log(carro1);

var carro2 = new carro("Palio", "fiat", "preto", "ATGDDD4234234HHES", "RRR9898", 10000, "passeio", "flex", false);
console.log(carro2);

//executando o método ligar para o objeto carro1
carro1.ligar();
carro2.deslocar(300);