function login(event){
    event.preventDefault(); // evita a execução do envio do form
    if(frmAutentica.frmAutenticaSubmit.innerHTML == "Acessar" ){
        firebase.auth().signInWithEmailAndPassword(frmAutentica.email.value, frmAutentica.senha.value).then(function(user) {
            alert('acesso realizado');
        }).catch(function(erro) {
            console.log(erro);
            alert('acesso negado');
        });
    }else{ // fazaer o cadastro do novo usuario
        firebase.auth().createUserWithEmailAndPassword(frmAutentica.email.value, frmAutentica.senha.value).then(function(user) {
            alert('Usuario cadastrado');
        }).catch(function(erro) {
            console.log(erro);
            alert('falha no cadastro');
        });
    }
}

function sair(){
    firebase.auth().signOut().then(function() {
        alert('Usuario desconectado');
    }).catch(function(erro) {
        alert('falha ao desconectar');
    });
    frmAutentica.email.value = "";
    frmAutentica.senha.value = "";

}

function cadastro() {
frmAutenticaTitulo.innerHTML = "Insira os dados para cadastro";
frmAutentica.frmAutenticaSubmit.innerHTML = "Cadastrar uma conta";
registrar.style.display = 'none';
acessar.style.display = 'block';
}

function acesso(){
    frmAutenticaTitulo.innerHTML = "Acesse sua conta";
    frmAutentica.frmAutenticaSubmit.innerHTML = "Acessar";
    registrar.style.display = 'block';
    acessar.style.display = 'none';
}

function pagAnimais(){
    window.location.href = "animais.html";
}

function pagAlergias(){
    window.location.href = "alergias.html";
}

frmAutentica.addEventListener('submit', login);
btnCadastro.addEventListener('click', cadastro);
btnAcesso.addEventListener('click', acesso);
btnSair.addEventListener('click', sair);
btnAnimais.addEventListener('click', pagAnimais);
btnAlergias.addEventListener('click', pagAlergias);