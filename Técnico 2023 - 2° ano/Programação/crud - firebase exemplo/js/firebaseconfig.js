
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

//adicionar
/*db.collection('carros').add({
  modelo : 'fiesta',
  marca : 'ford',
  ano : '2020',
  cor : 'azul'
});*/

//alterar
//db.collection('carros').doc('1l2VXLv63bXr9h7Ds5gU').update({modelo : 'fusion'});

//db.collection('carros').doc('1l2VXLv63bXr9h7Ds5gU').delete();