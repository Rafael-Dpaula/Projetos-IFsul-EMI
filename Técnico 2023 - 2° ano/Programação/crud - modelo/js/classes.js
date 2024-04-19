class Pessoa {
    constructor(id, nome, nascimento, cpf, fone, endereco, cep, cidade, uf) {
        this.id = id;
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
        return "Olá " + this.nome;
    }
}
// classe Filha
class Cliente extends Pessoa {
    constructor(nome, nascimento, cpf, fone, endereco, cep, cidade, uf,
        dataCadastro, formaPagPreferencia, dataPagPreferencia, email) {
        super(nome, nascimento, cpf, fone, endereco, cep, cidade, uf);
        this.dataCadastro = dataCadastro;
        this.formaPagPreferencia = formaPagPreferencia;
        this.dataPagPreferencia = dataPagPreferencia;
        this.email = email;
    }
    mostrarDados() {
        return this.nome + " - " +
            this.formaPagPreferencia + " - " +
            this.dataPagPreferencia;
    }
}
// classe Filha
class Funcionario extends Pessoa {
    constructor(nome, nascimento, cpf, fone, endereco, cep, cidade, uf,
        dataEntrada, salario, funcao) {
        super(nome, nascimento, cpf, fone, endereco, cep, cidade, uf);
        this.dataEntrada = dataEntrada;
        this.salario = salario;
        this.funcao = funcao;
        this.status = "A"; // A = Ativo | I = Inativo
    }
    mostrarDados() {
        return this.nome + " - " +
            this.dataEntrada + " - " +
            this.salario;
    }
}


class Alergia {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
}

class Vacina {
    constructor(id, descricao, valor) {
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;
    }
}
class Animal {
    constructor(id, nome, classe, nascimento, raca, porte, genero,
        cor, peso, anamnese, tutor) {
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

    addAlergia(alergia) {
        this.alergias.push(alergia);
    }

    listarAlergias() {
        var lista = "";
        this.alergias.forEach(alergia => {
            lista += alergia.nome + ", ";
        });
        console.log("Alergias de " + this.nome + ": " + lista);
    }
}

class Consulta {
    constructor(id, data, hora, descricao, valorConsulta, prescricoes,
        animal, veterinario) {
        this.id = id;
        this.data = data;
        this.hora = hora;
        this.descricao = descricao;
        this.valorConsulta = valorConsulta;
        this.prescricoes = prescricoes;
        this.animal = animal;
        this.veterinario = veterinario;
        this.vacinas = [];
    }

    addVacina(vacina) {
        this.vacinas.push(vacina);
    }

    listaVacinas() {
        var lista = "";
        this.vacinas.forEach(vacina => {
            lista += vacina.descricao + ", ";
        });
        console.log("Vacinas de " + this.animal.nome + ": " + lista);
    }

    calculaTotal() {
        var total = this.valorConsulta;
        this.vacinas.forEach(vacina => { //laço para percorrer as disciplinas do prof
            total += vacina.valor;
        });
        return total;
    }
}

class AgendaBanhos {
    constructor(id, data, hora, tosa, tosaHigienica, valor,
        animal, funcionario) {
        this.id = id;
        this.data = data;
        this.hora = hora;
        this.tosa = tosa;
        this.tosaHigienica = tosaHigienica;
        this.valor = valor;
        this.animal = animal;
        this.funcionario = funcionario;
    }
}


