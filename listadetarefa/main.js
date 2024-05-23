const inputTarefa =  document.querySelector('.input-tarefa');
const btnTarefa =  document.querySelector('.btn-tarefa');
const listTarefa = document.querySelector('.list-tarefa');

function criaLi(){
    const li = document.createElement('li');
    return li;
}
function criaTarefa(textoinput){
    const li = criaLi();

    li.innerText = textoinput;
    listTarefa.appendChild(li); 
    limpaInput();
    criaBtnapagar(li);
    salvarTarefa();
    
}
function criaBtnapagar(li){
    li.innerText += ' ';
    const botao = document.createElement('button');

    botao.innerText = 'Apagar'
    botao.setAttribute('class', 'btn');
    botao.setAttribute('title', 'Apgar essa tarefa?')

    li.appendChild(botao);

}

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    }

});

btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return
    
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('btn')){
        el.parentElement.remove();
        salvarTarefa();
    }
    
})
function salvarTarefa(){
    const liTarefa = listTarefa.querySelectorAll('li');
    const listaTarefa = [];

    for(let tarefa of liTarefa){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '');
        listaTarefa.push(tarefaTexto);
    }
    const tarefaJson = JSON.stringify(listaTarefa);
    localStorage.setItem('tarefas', tarefaJson);
    console.log(tarefaJson);
}

function lerTarefa(){
   const tarefas = localStorage.getItem('tarefas');
   const tarefasArray = JSON.parse(tarefas);

   for(let tarefa of tarefasArray){
    criaTarefa(tarefa);
   }
}
lerTarefa();
