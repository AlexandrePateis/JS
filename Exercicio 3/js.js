const inputTarefa = document.getElementById('input_tarefa');
const btnEnviar = document.getElementById('btn');
const tarefas = document.getElementById('tarefas');


function criaLi(){
    const li = document.createElement('li');
    return li;
}

function limpaInput(){
    inputTarefa.value = ''
    inputTarefa.focus()
}

function criaBotaoApagar(li){
    li.innerHTML += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar essa tarefa')
    li.appendChild(botaoApagar)
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
    }
});

function criaTarefa(texto){
    const li = criaLi();
    li.innerText = texto
    tarefas.appendChild(li)
    limpaInput()
    criaBotaoApagar(li)
}

btnEnviar.addEventListener('click', function() {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
    
});

document.addEventListener('click', function(e){
    const el = e.target
    
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
    }
})