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
    constructor(id, nome, genero, cpf, dtNascimento, cidade, uf, formaPgto, fone, endereco) {
        super(nome, genero, cpf, dtNascimento, cidade, uf)
        this.id = id;
        this.formaPgto = formaPgto;
        this.fone = fone;
        this.endereco = endereco;
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
    constructor(id, desc ,valorTotal, horaPedido, dtPedido, clientes, produtos) {
        this.id = id;
        this.desc = desc;
        this.valorTotal = valorTotal;
        this.horaPedido = horaPedido;
        this.dtPedido = dtPedido;
        this.clientes = clientes
        this.produtos = produtos;
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

    toString(){
        return{
            desc: this.desc,
            valorTotal: this.valorTotal,
            horaPedido: this.horaPedido,
            dtPedido: this.dtPedido,
            produtos: this.produtos
        };
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
    constructor(id, nome, marca, preco, desconto) {
        this.id = id;
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

    toString(){
        return{
            nome: this.nome,
            marca: this.marca,
            preco: this.preco,
            desconto: this.desconto
        };
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
