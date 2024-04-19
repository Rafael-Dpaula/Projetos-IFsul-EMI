
// Configuração do Firebase
const firebaseConfig = {
        apiKey: "AIzaSyBkYktCOTjG60tN1pLNt9TVomDEsuC1lyw",
        authDomain: "urubu-797fa.firebaseapp.com",
        projectId: "urubu-797fa",
        storageBucket: "urubu-797fa.appspot.com",
        messagingSenderId: "1024555469361",
        appId: "1:1024555469361:web:0953d9dc5c3f082e4ba310"
};
// Inicialização do Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
/*
//incluir
        db.collection('carros').add({
        modelo : "fiesta",
        marca : "ford",
        ano : "2020",
        cor :"azul"
        });
        */
// alterar
/*      db.collection('carros').doc('FbXw2kxkR3zBtz7k5Krs').update({modelo : "fusion"});

// excluir db.collection('carros').doc('FbXw2kxkR3zBtz7k5Krs').delete();
      */