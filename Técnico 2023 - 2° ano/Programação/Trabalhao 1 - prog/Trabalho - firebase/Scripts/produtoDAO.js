class ProdutoDAO {
//DAO - data access object
// objeto de acesso a dados
    constructor(db){
        this.db = db;
        this.collection = db.collection('produto');
    }
    // método para incluir um documento
    async add(produto){ // adicionar o doc
        var ref = await this.collection.add(prouto);
        return ref.id;
    }
    // método para alterar um documento
    async update(id, produto){
        await this.collection.doc(id).update(produto);
    }
    // método para excluir um documento
    async remove(id){
        await this.collection.doc(id).delete();
    }
    // método para buscar todos os documentos da coleção
    async getAll(){ 
        var produtos = [];
        var querySnapshot = await this.collection.orderBy('nome').get();
        querySnapshot.forEach((doc) => {
            var produto = new Produto(doc.id, doc.data().nome, doc.data().marca, doc.data().preco, doc.data().desconto, doc.data().precoN, doc.data().descontoN);
            produtos.push(produto);
        });
        return produtos;
    }

    async getByID(id){
        var doc = await this.collection.doc(id).get();
        var produto = new Produto(doc.id, doc.data().nome, doc.data().marca, doc.data().preco, doc.data().desconto, doc.data().precoN, doc.data().descontoN);
        return produto;
    }
}