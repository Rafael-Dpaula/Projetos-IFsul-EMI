class AlergiaDAO {
    //DAO - data access object
    // objeto de acesso a dados
    constructor(db) {
        this.db = db;
        this.collection = db.collection('alergia');
    }
    // método para incluir um documento
    async add(alergia) { // adicionar o doc
        var ref = await this.collection.add(alergia);
        return ref.id;
    }
    // método para alterar um documento
    async update(id, alergia) {
        await this.collection.doc(id).update(alergia);
    }
    // método para excluir um documento
    async remove(id) {
        await this.collection.doc(id).delete();
    }
    // método para buscar todos os documentos da coleção
    async getAll(pesquisa) {
        var alergias = [];
        if (pesquisa == "") {
            var querySnapshot = await this.collection.orderBy('nome').get();
            querySnapshot.forEach((doc) => {
                var alergia = new Alergia(doc.id, doc.data().nome);
                alergias.push(alergia);
            });
        }else { ///tem valor pra pesquisa
            var querySnapshot = await this.collection.orderBy('nome').startAt(pesquisa).endAt(pesquisa + '\uf8ff').get();
            querySnapshot.forEach((doc) => {
                var alergia = new Alergia(doc.id, doc.data().nome)
                alergias.push(alergia);
            });
        }
        return alergias;
    }

    async getByID(id) {
        var doc = await this.collection.doc(id).get();
        var alergia = new Alergia(doc.id, doc.data().nome);
        return alergia;
    }
}