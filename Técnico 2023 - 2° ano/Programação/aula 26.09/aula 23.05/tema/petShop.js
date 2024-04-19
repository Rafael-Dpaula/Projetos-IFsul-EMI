class Pessoa{
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
}

class cliente extends Pessoa{
    constructor(nome, nascimento, cpf, fone, endereco, cep, cidade, uf, formaPag, dataPag, email){
    super(nome, nascimento, cpf, fone, endereco, cep, cidade, uf);
        this.formaPag = formaPag;
        this.dataPag = dataPag;
        this.email = email;
    }
}