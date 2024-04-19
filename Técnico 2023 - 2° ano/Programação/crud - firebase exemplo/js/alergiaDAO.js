class AlergiaDAO {
    //DAO - data access object
    // objeto de acesso a dados
    constructor(db) {
        this.db = db;
        this.collection = db.collection('alergia');
    }

    // metodo para incluir um doc
    async add(alergia) {
        var ref = await this.collection.add(alergia);
        return ref.id;
    }

    //metodo para alterar um doc
    async update(id, alergia) {
        await this.collection.doc(id).update(alergia);
    }

    //metodo para excluir um doc
    async remove(id) {
        await this.collection.doc(id).delete();
    }

    //metodo para buscar todos os docs da colecao
    async getAll() {
        var alergias = [];
        var querySnapshot = await this.collection.get();
        querySnapshot.forEach((doc) => {
            var alergia = new Alergia(doc.id, doc.data().nome);
            alergias.push(alergia)
        });
        return alergias;
    }
    
    async getByid(id) {
        var doc = await this.collection.doc(id).get();
        var alergia = new Alergia(doc.id, doc.data().nome);
        return alergia;
    }

}