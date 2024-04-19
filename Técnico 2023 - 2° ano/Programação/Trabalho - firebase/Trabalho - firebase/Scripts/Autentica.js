function login(event){
    event.preventDefault(); 
    if(frmAutentica.frmAutenticaSubmit.innerHTML == "Acessar" ){
        firebase.auth().signInWithEmailAndPassword(frmAutentica.email.value, frmAutentica.senha.value).then(function(user) {
            alert('acesso realizado');
        }).catch(function(erro) {
            console.log(erro);
            alert('acesso negado');
        });
    }else{ 
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
        console.log(erro)
        alert('falha ao desconectar');
    });
    frmAutentica.email.value = "";
    frmAutentica.senha.value = "";

}

function cadastro() {
frmAutenticaTitulo.innerHTML = "Insira os dados para cadastro";
frmAutentica.frmAutenticaSubmit.innerHTML = "Cadastrar";
registrar.style.display = 'none';
acessar.style.display = 'block';
}

function acesso(){
    frmAutenticaTitulo.innerHTML = "Acesse sua conta";
    frmAutentica.frmAutenticaSubmit.innerHTML = "Acessar";
    registrar.style.display = 'block';
    acessar.style.display = 'none';
}

function pagPedidos(){
    window.location.href = "Pedido.html";
}

function pagProdutos(){
    window.location.href = "Produtos.html";
}

frmAutentica.addEventListener('submit', login);
btnCadastro.addEventListener('click', cadastro);
btnAcesso.addEventListener('click', acesso);
btnSair.addEventListener('click', sair);
btnPedidos.addEventListener('click', pagPedidos);
btnProdutos.addEventListener('click', pagProdutos);