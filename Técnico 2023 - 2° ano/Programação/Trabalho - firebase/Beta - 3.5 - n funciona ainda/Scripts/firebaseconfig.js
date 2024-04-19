const firebaseConfig = {
        apiKey: "AIzaSyBkYktCOTjG60tN1pLNt9TVomDEsuC1lyw",
        authDomain: "urubu-797fa.firebaseapp.com",
        projectId: "urubu-797fa",
        storageBucket: "urubu-797fa.appspot.com",
        messagingSenderId: "1024555469361",
        appId: "1:1024555469361:web:0953d9dc5c3f082e4ba310"
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

firebase.auth().onAuthStateChanged(function (user){
        if (user){
                log.style.display = "block";
                usuarioLogadoTitulo.innerHTML = 'usuario autenticado: ' + user.email;
        }else{
                log.style.display = "none";
                if(window.location.pathname != "/index.html"){
                window.location.href = "/index.html";
                }
        }
});