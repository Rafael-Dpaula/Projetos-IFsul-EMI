var btnincluir = document.querySelector("#btnincluir");
var btnmostrar = document.querySelector("#btnmostrar");
var tasks = [];
var task = document.querySelector("#task");
function addTask(){
    if(task.value == ""){
        alert("Digite uma tarefa");
    }else{
        tasks.push(task.value);
        console.log("array: "+tasks.join()+",");
    }task.value = "";
}

function mostrarTask(){
    let listatarefas = document.querySelector("#listaTarefas");
    let ol = document.createElement("ol");
    tasks.forEach(function(task, ind){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(task))
        li.setAttribute("class", "task-list");
        ol.appendChild(li);
        task.value = "";
    })
    listatarefas.appendChild(ol);
}

btnincluir.addEventListener("click", addTask);
btnmostrar.addEventListener("click", mostrarTask);
document.addEventListener("keydown",function(event) {   
    if(event.keyCode == 13){
        addTask();
        }
})
