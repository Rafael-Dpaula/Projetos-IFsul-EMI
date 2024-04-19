class AnimalDAO {
    //DAO - data access object
    // objeto de acesso a dados
    constructor(db) {
        this.db = db;
        this.collection = db.collection('animal');
    }

    // metodo para incluir um doc
    async add(animal) {
        var ref = await this.collection.add(animal);
        return ref.id;
    }

    //metodo para alterar um doc
    async update(id, animal) {
        await this.collection.doc(id).update(animal);
    }

    //metodo para excluir um doc
    async remove(id) {
        await this.collection.doc(id).delete();
    }

    //metodo para buscar todos os docs da colecao
    async getAll() {
        var animais = [];
        var querySnapshot = await this.collection.orderBy('nome').get();
        querySnapshot.forEach((doc) => {
            var animal = new Animal(doc.id, doc.data().nome, doc.data().classe, doc.data().nascimento, doc.data().raca, doc.data().porte, doc.data().genero, doc.data().cor, doc.data().peso, doc.data().anamnese, doc.data().tutor, cod.data().alergias);
            animais.push(animal);
        });
        return animais;
    }

    async getById(id){
        var doc = await this.collection.doc(id).get();
        var animal = new Animal(doc.id, doc.data().nome, doc.data().classe, doc.data().nascimento, doc.data().raca, doc.data().porte, doc.data().genero, doc.data().cor, doc.data().peso, doc.data().anamnese, doc.data().tutor, doc.data().alergias);
        return animal;
        
    }

}