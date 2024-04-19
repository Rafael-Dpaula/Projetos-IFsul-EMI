//heranca.html
//heranca.js

class Pessoa{
    constructor(nome, fone, endereco){
        this.nome = nome;
        this.fone = fone;
        this.endereco = endereco;
    }
    saudacao(){
        return "olá"+ " " + this.nome;
    }
}

class Fisica extends Pessoa{//classe Fisica é filha de pessoa
    constructor(nome, fone, endereco, cpf, nascimento, genero, estadoCivil){
        super(nome, fone, endereco);
        this.cpf = cpf;
        this.nascimento = nascimento;
        this.genero = genero;
        this.estadoCivil = estadoCivil;   
    }
    mostrarDados(){
        return this.nome + " - "+
         this.cpf + " - " +
         this.nascimento + " - "+ 
         this.genero + " - "+ 
         this.estadoCivil; 
    }
}
//classe filha
class Juridica extends Pessoa{//classe Juridica é filha de pessoa
    constructor(nome, fone, endereco, cnpj, nomeFantasia, ie){
        super(nome, fone, endereco);
        this.cnpj = cnpj;
        this.nomeFantasia = nomeFantasia;
        this.ie = ie;
    }
    mostrarDados(){
        return this.nome + " - "+ 
        this.cnpj + " - "+ 
        this.nomeFantasia + " - "+ 
        this.ie;
    }
}
let pf1 = new Fisica("Maria da Silva", "9898098", "rua das flores", "989898989898898", "30/11/1998", "F", "S");
let pf2 = new Fisica("João Souza", "76767676767", "rua dos doces", "5454545454545454", "20/10/1995", "M", "C");
let pj1 = new Juridica("ABC Ltda", "888888", "rua XYZ", "6565656565656556", "ABC Flores", "9898989989898");
let pj2 = new Juridica("NOVA LUA Ltda", "888888", "121232", "rua ABC", "123123123", "Nova Lua", "123123123");

console.log(pf1, pf2, pj1, pj2);
console.log(pf1.saudacao(),"  ", pj1.saudacao());

console.log(pf1.mostrarDados());
console.log(pj1.mostrarDados());