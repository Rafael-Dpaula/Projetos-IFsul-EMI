class PedidoDAO {
    constructor(db) {
        this.db = db;
        this.collection = db.collection('pedido');
    }
    async add(pedido) {
        var ref = await this.collection.add(pedido);
        return ref.id;
    }

    async update(id, pedido) {
        await this.collection.doc(id).update(pedido);
    }

    async remove(id) {
        await this.collection.doc(id).delete();
    }
    async getAll() {
        var pedidos = [];
        var querySnapshot = await this.collection.orderBy('nome').get();
        querySnapshot.forEach((doc) => {
            var pedido = new pedido(doc.id, doc.data().desc,
                doc.data().dtPedido, doc.data().hrPedido, doc.data().cliente,
                doc.data().valorTotal,
                doc.data().produtos);
            pedidos.push(pedido);
        });
        return pedidos;
    }

    async getById(id) {
        var doc = await this.collection.doc(id).get();
        var pedido = new pedido(doc.id, doc.data().desc,
            doc.data().dtPedido, doc.data().hrPedido, doc.data().cliente,
            doc.data().valorTotal,
            doc.data().produtos);
        return pedido;
    }
}