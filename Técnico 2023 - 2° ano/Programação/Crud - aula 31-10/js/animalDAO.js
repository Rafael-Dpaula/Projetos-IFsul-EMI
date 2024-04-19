class AnimalDAO {
    //DAO - data access object
    // objeto de acesso a dados
        constructor(db){
            this.db = db;
            this.collection = db.collection('animal');
        }
        // método para incluir um documento
        async add(animal){ // adicionar o doc
            var ref = await this.collection.add(animal);
            return ref.id;
        }
        // método para alterar um documento
        async update(id, animal){
            await this.collection.doc(id).update(animal);
        }
        // método para excluir um documento
        async remove(id){
            await this.collection.doc(id).delete();
        }
        // método para buscar todos os documentos da coleção
        async getAll(){ 
            var animais = [];
            var querySnapshot = await this.collection.orderBy('nome').get();
            querySnapshot.forEach((doc) => {
                var animal = new Animal(doc.id, doc.data().nome,
                doc.data().classe, doc.data().nascimento, doc.data().raca,
                doc.data().porte, doc.data().genero, doc.data().cor, 
                doc.data().peso, doc.data().anamnese,
                 doc.data().tutor, doc.data().alergias);
                
                animais.push(animal);
            });
            return animais;
        }

        async getById(id){
            var doc = await this.collection.doc(id).get();
            var animal = new Animal(doc.id, doc.data().nome,
            doc.data().classe, doc.data().nascimento, doc.data().raca,
            doc.data().porte, doc.data().genero, doc.data().cor, 
            doc.data().peso, doc.data().anamnese, doc.data().tutor,
            doc.data().alergias);
            return animal;
        }
    }