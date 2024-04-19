class VacinaDAO {
    //DAO - data access object
    // objeto de acesso a dados
    constructor(db) {
        this.db = db;
        this.collection = db.collection('vacinas');
    }

    // metodo para incluir um doc
    async add(vacina) {
        var ref = await this.collection.add(vacina);
        return ref.id;
    }

    //metodo para alterar um doc
    async update(id, vacina) {
        await this.collection.doc(id).update(vacina);
    }

    //metodo para excluir um doc
    async remove(id) {
        await this.collection.doc(id).delete();
    }

    //metodo para buscar todos os docs da colecao
    async getAll() {
        var vacinas = [];
        var querySnapshot = await this.collection.get();
        querySnapshot.forEach((doc) => {
            var vacina = new Vacina(doc.id, doc.data().descricao, doc.data().valor);
            vacinas.push(vacina)
        });
        return vacinas;
    }
}