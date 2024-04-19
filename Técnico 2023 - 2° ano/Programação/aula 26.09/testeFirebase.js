/* inserir script depois da configuração das classes */

var db = firebase.firestore();

/*Realizar consulta*/
db.collection('animal').get().then((snapshot) => {
    // snapshot contém as referências dos documentos da coleção
    //laço precorre todos os elementos que estão no snapshot
    snapshot.docs.forEach(doc => {
        console.log(doc.data());// doc.data() retorna os dados do documento
    })
})

/*Inserir dados*/
/*Atualizar dados */
/*Remover dados*/