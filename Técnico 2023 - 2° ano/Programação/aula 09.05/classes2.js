class Acessorio{
    constructor(nome){
        this.nome = nome;
    }
}

class Cidade{
    constructor(nome, uf){
        this.nome = nome;
        this.uf = uf;
    }
}

class Carro{
    constructor(marca, modelo, placa, chassi, cor, ano, combustivel, tipo, motor){
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.chassi = chassi;
        this.cor = cor;
        this.ano = ano;
        this.combustivel = this.combustivel;
        this.tipo = tipo;
        this.motor = motor;
        this.acessorios = []; // acessorios é um vetor de objetos do tipo acessorio
        // acima representa o relacionamento entre carro e acessorio (0..* ------- 0..*)
    }
    addAcessorio(ace){//ace é um objeto do tipo acessorio
        this.acessorios.push(ace);// inclui ace no vetor acessório
    }
}

class Pessoa{
    constructor(nome, cpf, rg, nascimento, genero, endereco, cidade, uf, fone, carro){
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.nascimento = nascimento;
        this.genero = genero;
        this.endereco = endereco;
        this.uf = uf;
        this.cidade = cidade;
        this.fone = fone;
        this.carro = carro; //carro é um objeto da classe carro
        //acima representa o relacionamento entre carro e pessoa (0..1 ------ 0..1)
    }
}

var ace1 = new Acessorio("air bag");
var ace2 = new Acessorio("ar condicionado");
var ace3 = new Acessorio("rádio");

var carro1 = new Carro("palio", "fiat", "XXX-9090", "3ahfaif3-aisdf9", "azul", 2020, "gasolina", "passeio", 1.6);
var carro2 = new Carro("Fiesta", "ford", "XXX-8888", "shbfuosboaufghapb", "branco", 2021, "flex", "passeio", 1.8);

carro1.addAcessorio(ace1);
carro1.addAcessorio(ace3);
carro2.addAcessorio(ace1);
carro2.addAcessorio(ace3);

var cidade1 = new Cidade("Passo Fundo", "RS");
var pessoa1 = new Pessoa("Maria dos Santos", "9898989898-99", "0909090909", "10/10/1990", "F", "rua das flores, 109", "0909090909", carro1, cidade1);

console.log(carro1);
console.log(carro2);
console.log(pessoa1);