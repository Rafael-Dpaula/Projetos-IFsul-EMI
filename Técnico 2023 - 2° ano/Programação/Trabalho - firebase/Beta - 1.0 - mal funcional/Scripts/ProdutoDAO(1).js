class ProdutoDAO {
    constructor(db) {
        this.db = db;
        this.collection = db.collection('produtos');
    }
    async add(produto) {
        var ref = await this.collection.add(produto);
        return ref.id;
    }
    async update(id, produto) {
        await this.collection.doc(id).update(produto);
    }
    async remove(id) {
        await this.collection.doc(id).delete();
    }
    async getAll(pesquisa) {
        var produtos = [];
        if (pesquisa == "") {
            var querySnapshot = await this.collection.orderBy('nome').get();
            querySnapshot.forEach((doc) => {
                var produto = new Produto(doc.id, doc.data().nome, doc.data().marca, doc.data().preco, doc.data().desconto);
                produtos.push(produto);
            });
        } else {
            var querySnapshot = await this.collection.orderBy('nome').startAt(pesquisa).endAt(pesquisa + '\uf8ff').get();
            querySnapshot.forEach((doc) => {
                var produto = new Produto(doc.id, doc.data().nome, doc.data().marca, doc.data().preco, doc.data().desconto);
                produtos.push(produto);
            });
        }
        return produtos;
    }

    async getByID(id) {
        var doc = await this.collection.doc(id).get();
        var produto = new Produto(doc.id, doc.data().nome,
            doc.data().marca, doc.data().preco,
            doc.data().desconto);
        return produto;
    }
}