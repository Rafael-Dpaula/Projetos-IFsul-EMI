class ClienteDAO {
    constructor(db) {
        this.db = db;
        this.collection = db.collection('cliente');
    }
    async add(cliente) {
        var ref = await this.collection.add(cliente);
        return ref.id;
    }
    async update(id, cliente) {
        await this.collection.doc(id).update(cliente);
    }
    async remove(id) {
        await this.collection.doc(id).delete();
    }
    async getAll(pesquisa) {
        var clientes = [];
        if (pesquisa != "") {
            var querySnapshot = await this.collection.
                orderBy('nome').startAt(pesquisa).
                endAt(pesquisa + '\uf8ff').get();
            querySnapshot.forEach((doc) => {
                var cliente = new Cliente(doc.id, doc.data().nome, doc.data().cpf,
                    doc.data().genero, doc.data().dtNascimento,
                    doc.data().cidade, doc.data().uf, doc.data().formaPgto,
                    doc.data().fone, doc.data().endereco, doc.data());
                clientes.push(cliente);
            });

        } else {
            var querySnapshot = await this.collection.orderBy('nome').get();
            querySnapshot.forEach((doc) => {
                var cliente = new Cliente(doc.id, doc.data().nome, doc.data().cpf,
                    doc.data().genero, doc.data().dtNascimento,
                    doc.data().cidade, doc.data().uf, doc.data().formaPgto,
                    doc.data().fone, doc.data().endereco, doc.data());
                clientes.push(cliente);
            });
        }
        return clientes;
    }

    async getById(id) {
        var doc = await this.collection.doc(id).get();
        var cliente = new Cliente(doc.id, doc.data().nome, doc.data().cpf,
            doc.data().genero, doc.data().dtNascimento,
            doc.data().cidade, doc.data().uf, doc.data().formaPgto,
            doc.data().fone, doc.data().endereco, doc.data());
        return cliente;
    }
}