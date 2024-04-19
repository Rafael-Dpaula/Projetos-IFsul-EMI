class Pessoa {
    constructor(nome, nascimento, cpf, fone, endereco, cep, cidade, uf) {
        this.nome = nome;
        this.nascimento = nascimento;
        this.cpf = cpf;
        this.fone = fone;
        this.endereco = endereco;
        this.cep = cep;
        this.cidade = cidade;
        this.uf = uf;
    }
    saudacao() {
        return "Olá" + this.nome;
    }
}
class Vacina {
    constructor(descricao, valor) {
        this.descricao = descricao;
        this.valor = valor;
    }
}

class Alergia {
    constructor(nome) {
        this.nome = nome;
        this.sintoma = [];
    }
    addSintoma(sintoma) {
        this.sintoma.push(sintoma);
    }
    mostrarDescricao() {
        var desc = 'alergia :' + this.nome + '\nSintomas: ';

        this.sintoma.forEach(function (e) {
            desc += e + '\n';
        });
        return desc;
    }
}

class Cliente extends Pessoa {
    constructor(nome, nascimento, cpf, fone, endereco, cep, cidade, uf, dataCadastro, formaPagPreferencia, dataPagPreferencia, email) {
        super(nome, nascimento, cpf, fone, endereco, cep, cidade, uf);
        this.dataCadastro = dataCadastro;
        this.formaPagPreferencia = formaPagPreferencia;
        this.dataPagPreferencia = dataPagPreferencia;
        this.email = email;
        this.animal = []; //relação 0..n Animal
    }
    addAnimal(animal) {
        if (animal instanceof Animal) {// verifica se é um objeto instância de animal
            this.animal.push(animal);
        } else {
            console.log(Animal + " não é um objeto de Animal:");
        }
    }
    listarAnimais() {
        lista = "";
        this.listarAnimais.forEach(ani1 => {
            lista += ani1.nome + ", ";
        });
        return lista;
    }
    //polimorfismo
    // método com mesmo nome da classe pai
    saudacao() {
        return super.saudacao() + " - eu sou cliente!";
    }
}

class Funcionario extends Pessoa {
    constructor(nome, nascimento, cpf, fone, endereco, cep, cidade, uf, funcao, salario) {
        super(nome, nascimento, cpf, fone, endereco, cep, cidade, uf);
        this.dataEntrada = null;
        this.salario = salario;
        this.funcao = funcao;
        this.status = "ATIVO";
    }
    //polimorfismo
    // método com mesmo nome da classe pai
    saudacao() {
        // "super" se refere a classe pai
        return super.saudacao() + " - eu sou funcionário!";
    }
}

class Animal {
    constructor(nome, classe, nascimento, raca, porte, genero, cor, peso, anamnese, tutor) {
        this.nome = nome;
        this.classe = classe;
        this.nascimento = nascimento;
        this.raca = raca;
        this.porte = porte
        this.genero = genero;
        this.cor = cor;
        this.peso = peso;
        this.anamnese = anamnese;
        this.tutor = tutor; /// relação 1 com a classe cliente
        this.alergias = [];
    }

    //metodo pra incluir alergias para o animal
    addAlergia(al) {//recebendo o objeto alergia em al
        this.alergias.push(al);
    }

    listarAlergias() {
        console.log("Animal" + this.nome + "\n");
        this.alergias.forEach(function (alergia) {
            console.log(alergia.mostrarDescricao());
        });
    }


}

class AgendaBanhos {
    constructor(data, hora, tosa, tosahigienica, valor, funcionario, animal) {
        this.data = data;
        this.hora = hora;
        this.tosa = tosa;
        this.tosahigienica = tosahigienica;
        this.valor = valor;
        this.funcionario = funcionario;
        this.animal = animal;
    }
}

class Consulta {
    constructor(data, hora, descricao, valorConsulta, prescricoes, animal, veterinario) {
        this.data = data;
        this.hora = hora;
        this.descricao = descricao;
        this.valorConsulta = valorConsulta;
        this.prescricoes = prescricoes;
        this.animal = animal;
        this.veterinario = veterinario;
        this.valorTotal = valorConsulta;
        this.vacinas = [];
    }

    addVacina(vac) {
        this.vacinas.push(vac);
    }

    listarVacinas() {
        var lista = "";
        this.vacinas.forEach(vacina => {
            lista += vacina.descricao + ", ";
        })
    }

    calcularTotal() {//valor da consulta + valor das vacinas
        this.valorTotal = this.valorConsulta;
        this.vacinas.forEach(vacina => {
            this.valorTotal += vacina.valor;
        })
        return this.valorTotal;
    }
}

//testes//
var cliente = new Cliente("José", 1, 123, "9u998", "ssdfsd", 998898, "pf", "rs");

var v1 = new Vacina("Raiva", 80.00);
var v2 = new Vacina("Gripe", 90.00);
var v3 = new Vacina("Giardia", 70.00);

var a1 = new Alergia("pulga");
var a2 = new Alergia("alimentar");
var a3 = new Alergia("grama");

a1.addSintoma("Coceira");
a1.addSintoma("Vermelhidão");
console.log(a1.mostrarDescricao());

var f1 = new Funcionario("joao das neves", "10/10/1990", "9898989898", "6666666", "rua das flores", "999-00000", "passo fundo", "RS", '10/01/2020', 3.000, "banho");
var f2 = new Funcionario("Anelise Santos", "10/10/1990", "9898989898", "6666666", "rua das flores", "999-00000", "passo fundo", "RS", '10/01/2020', 2.500, "banho");

var animal1 = new Animal("amelie", "canina", "14/11/2012", "shih-tzu", "P", "F", "tricolor", 5, "xxxxx", Cliente);
var animal2 = new Animal("olivia", "canina", "04/11/2020", "shih-tzu", "P", "F", "tricolor", 6, "xxxxx", Cliente);
//adicionar alergias para amelie
animal1.addAlergia(a1);//alergia a pulga
animal1.addAlergia(a2);//alergia alimentar
animal1.listarAlergias();

var cons1 = new Consulta("05/06/2023", "10:00", "revisao alergias e vacinas", 100.00, "exame de sangue", animal1, f1);
cons1.addVacina(v1);
cons1.addVacina(v2);
cons1.listarVacinas();
console.log("Vacinas de " + cons1.animal.nome + ": " + cons1.listarVacinas());
console.log("valor total da consulta: " + cons1.calcularTotal());

cliente.addAnimal(animal2);
var agenda = new AgendaBanhos("06/06/2023", "14:00", "S", "S", 40.00, animal2, f2);
console.log("lista dos animais de " + Cliente.nome + ": " + Cliente.listarAnimais);

console.log(cliente.saudacao());
console.log(f1.saudacao());