class Cliente {
    constructor(id, nome, cpf, genero, dtNascimento, cidade, uf, formaPgto, fone, endereco) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.genero = genero;
        this.dtNascimento = dtNascimento;
        this.cidade = cidade;
        this.uf = uf;
        this.formaPgto = formaPgto;
        this.fone = fone;
        this.endereco = endereco;
    }

    toString() {
        return{
            nome: this.nome,
            cpf: this.cpf,
            genero: this.genero,
            dtNascimento: this.dtNascimento,
            cidade: this.cidade,
            uf: this.uf,
            formaPgto: this.formaPgto,
            fone: this.fone,
            endereco: this.endereco
        };
    }
}

class Pedido {
    constructor(id, desc, valorTotal, horaPedido,
        dtPedido, cliente, produtos) {
        this.id = id;
        this.desc = desc;
        this.valorTotal = valorTotal;
        this.horaPedido = horaPedido;
        this.dtPedido = dtPedido;
        this.produtos = produtos;
        this.cliente = cliente;
    }

    toString() {
        return {
            desc: this.desc,
            valorTotal: this.valorTotal,
            horaPedido: this.horaPedido,
            dtPedido: this.dtPedido,
            produtos: this.produtos,
            cliente: this.cliente
        };
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

    toString() {
        return {
            nome: this.nome,
            marca: this.marca,
            preco: this.preco,
            desconto: this.desconto
        };
    }
}
