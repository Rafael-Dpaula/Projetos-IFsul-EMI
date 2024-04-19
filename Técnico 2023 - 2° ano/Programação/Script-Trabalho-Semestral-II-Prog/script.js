class Receita {
    constructor(modoDePreparo) {
        this.modoDePreparo = modoDePreparo;
        this.ingredientes = [];
    }
    addIngrediente(ing) {
        this.ingredientes.push(ing);
    }
    removeIngrediente(ing) {
        for (let i = 0; i < this.ingredientes.length; i++) {
            if (this.ingredientes[i].name.toLowerCase() == ing.name.toLowerCase()) {
                this.ingredientes.splice(i, 1);
                console.log("Ingrediente removido!");
                return;
            }
        }
    }
}

class Pessoa {
    constructor(nome, genero, cpf, dtNascimento, cidade, uf) {
        this.nome = nome;
        this.genero = genero;
        this.cpf = cpf;
        this.dtNascimento = dtNascimento;
        this.cidade = cidade;
        this.uf = uf;
    }
    saudacao() {
        return "Bem Vindo, eu sou o(a) " + this.nome
    }
    mostrarDados() {
        console.log("Nome: " + this.nome);
        console.log("Genero: " + this.genero);
        console.log("CPF: " + this.cpf);
        console.log("Data de Nascimento: " + this.dtNascimento);
        console.log("Cidade: " + this.cidade);
        console.log("UF: " + this.uf);
    }
}

class Cliente extends Pessoa {
    constructor(nome, genero, cpf, dtNascimento, cidade, uf, formaPgto, fone, endereco, pedido) {
        super(nome, genero, cpf, dtNascimento, cidade, uf)
        this.formaPgto = formaPgto;
        this.fone = fone;
        this.endereco = endereco;
        this.pedido = pedido;
    }
    pedir() {
        console.log(this.nome + ":" + " Gostaria de " + this.pedido);
    }
    mostrarPedido() {
        console.log("pedido de " + this.nome + ": " + this.pedido);
    }
    saudacao() {
        return super.saudacao() + ", gostaria de fazer um pedido!";
    }
}

class Pedido {
    constructor(horaPedido, valorTotal, dtPedido) {
        this.horaPedido = horaPedido;
        this.valorTotal = valorTotal;
        this.dtPedido = dtPedido;
        this.produtos = [];
    }
    listarProdutos() {
        console.log("Produtos:");
        for (let i = 0; i < this.produtos.length; i++) {
            console.log("   " + this.produtos[i].nome);
        }
    }
    addProduto(pro) {
        this.produtos.push(pro);
    }
    removeProduto(pro) {
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].nome == pro.nome) {
                console.log("Produto removido!")
                this.produtos.splice(i, 1);
                return;
            }
        }
    }
}

class Funcionario extends Pessoa {
    constructor(nome, genero, cpf, dtNascimento, cidade, uf, cargo, funcao, salario) {
        super(nome, genero, cpf, dtNascimento, cidade, uf);
        this.cargo = cargo;
        this.funcao = funcao;
        this.salario = salario;
    }
    saudacao() {
        return super.saudacao() + ", vou atender você"
    }
    anotarPedido() {
        console.log('Pedido anotado!!');
    }
}

class Produto {
    constructor(nome, marca, preco, desconto) {
        this.nome = nome;
        this.marca = marca;
        this.preco = preco;
        this.desconto = desconto;
    }
    addDesconto() {
        this.preco = this.preco - ((this.desconto / 100) * this.preco);
        console.log("Desconto aplicado com sucesso!!")
    }
    removeDesconto() {
        this.preco = this.preco + ((this.desconto / 100) * this.preco);
        console.log("Desconto removido com êxito!!")
    }
}

class TeleEntrega {
    constructor(endereco, nPedido, tempoEspera, status) {
        this.endereco = endereco;
        this.nPedido = nPedido;
        this.tempoEspera = tempoEspera;
        this.status = status;
    }
    alterarStatus(stat) {
        this.status = stat;
        console.log("Status do pedido atualizado com sucesso!!")
    }
    atualizarEndereco(newEndereco) {
        this.endereco = newEndereco;
        console.log("Endereço do cliente atualizado com sucesso!!")
    }
}

// instancias de teste...

let rec1 = new Receita("adicione farinha, ovos e leite depois bata bem por alguns minutos");
console.log(rec1);
rec1.addIngrediente({ name: "ovos" });
rec1.addIngrediente({ name: "farinha" });
rec1.addIngrediente({ name: "leite" });
let rec2 = new Receita("Coloque a carne na frigideira com óleo, tempere e vire para não queimar de tempo em tempo");
console.log(rec2);
rec2.addIngrediente({ name: "Carne" });
rec2.addIngrediente({ name: "óleo" });
rec2.addIngrediente({ name: "tempero" });
rec2.addIngrediente({ name: "farinha" });
rec2.removeIngrediente({ name: "farinha" }); console.log(" ");

let pes1 = new Pessoa("Paulo Roberto de Paula", "Masculino", "04188729173", "04/07/1972", "Passo Fundo", "RS");
console.log(pes1);
console.log(pes1.saudacao()); console.log(" ");
let pes2 = new Pessoa("Rafael Albuquerque de Paula", "masculino", "04132134173", "26/02/2007", "Passo Fundo", "RS");
console.log(pes2);
pes2.mostrarDados(); console.log(" ");

let cli1 = new Cliente("Guilherme Albuquerque de Paula", "masculino", "02847418693", "07/08/2002", "Passo Fundo", "RS", "Débito", "55 5499313283", "R. josé bilíbio, 103", "um X especial com 1 refrigerante");
console.log(cli1);
console.log(cli1.saudacao());
cli1.pedir(); console.log(" ");
let cli2 = new Cliente("Eliandra Albuquerque de Paula", "Feminino", "90183783734", "08/05/1979", "Passo Fundo", "RS", "Crédito", "55 5499134562", "R. Afonso Pena, 201", "um cachorro quente com uma porção de batatas fritas");
console.log(cli2);
cli2.mostrarPedido(); console.log(" ");


let func1 = new Funcionario("Guilherme Benck de Mello", "Masculino", "26474584669", "11/09/2001", "Passo Fundo", "RS", "Chapeiro", "Assar Carnes", "R$2.450,00");
console.log(func1);
console.log(func1.saudacao()); console.log(" ");
let func2 = new Funcionario("Pedro Lucas Benck de Oliveira", "Masculino", "36546543546", "09/09/2007", "Passo Fundo", "RS", "faxineiro", "Limpeza", "R$1.320,00");
console.log(func2);
func2.anotarPedido(); console.log(" ");

let pro1 = new Produto("X bacon", "X.com", 40.00, 5);
console.log(pro1);
pro1.addDesconto(); console.log(" ");
let pro2 = new Produto("Refrigerante 600ml", "Coca-Cola", 6.00, 3);
console.log(pro2);
pro2.addDesconto();
pro2.removeDesconto(); console.log(" ");

let ped1 = new Pedido("14:15", 15.60, "11/09/2023");
console.log(ped1);
ped1.addProduto(pro1);
ped1.addProduto(pro2);
ped1.removeProduto(pro2); console.log(" ");
let ped2 = new Pedido("20:00", 50.00, "27/06/2023");
console.log(ped2);
ped2.addProduto(pro2);
ped2.listarProdutos(); console.log(" ");

let tele1 = new TeleEntrega("R. pantaleão Bolner, 762", ped1, "50 min", "Pendente");
console.log(tele1);
tele1.alterarStatus("Entregue"); console.log(" ");
let tele2 = new TeleEntrega("R. Paternon, 124", ped2, "20 min", "entregue");
console.log(tele2);
tele2.atualizarEndereco("Guilherme luis Sperry, 205");

ped1.cli1 = cli1;
cli1.ped1 = ped1;

ped2.func2 = func2;
func2.ped2 = ped2;