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
function criaBotaoConcluido(li){
    li.innerHTML += ' '
    const botaoConcluido = document.createElement('button')
    botaoConcluido.innerText = 'Concluir'
    botaoConcluido.setAttribute('class', 'concluido')
    botaoConcluido.setAttribute('title', 'Concluir essa tarefa')
    li.appendChild(botaoConcluido)
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
    criaBotaoConcluido(li)
    salvarTarefa()
}

btnEnviar.addEventListener('click', function() {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
    
});

document.addEventListener('click', function(e){
    const el = e.target
    
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefa()
    }
})

document.addEventListener('click', function(e){
    const el = e.target
    
    if(el.classList.contains('concluido')){
        el.innerHTML = 'Concluido'
        el.style.backgroundColor = 'yellow'
        el.setAttribute('title', 'Concluido')
    }
})

function salvarTarefa(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        tarefaTexto = tarefaTexto.replace('Concluir', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

function addTarefaSalva(){
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)

    for (let tarefas of listaDeTarefas){
        criaTarefa(tarefas)
    }
}
addTarefaSalva()