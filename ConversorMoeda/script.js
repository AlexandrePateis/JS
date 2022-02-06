let real = document.getElementById('valorEmReal')
let rees = document.getElementById('res')
function Convert(){
    let moeda = document.getElementsByName('moedaEstrangeira')
    if (real.value == 0){
        window.alert('Error')
    }else{
        if (moeda[0].checked){
            let valor = real.value * 0.19
            rees.innerHTML= `R$${real.value} para dolar sera $${valor.toFixed(2)}`
        }else if (moeda[1].checked){
            let valor = real.value * 0.16
            rees.innerHTML= `R$${real.value} para euro sera Є${valor.toFixed(2)}`
        }else if (moeda[2].checked){
            let valor = real.value * 0.14
            rees.innerHTML= `R$${real.value} para libra sera £${valor.toFixed(2)}`
        }
    }   
}

function Limpar(){
    real.value = ''
    rees.innerHTML = ''
}

function MudaCor(){
    let cor = document.getElementsByName('dark-clear')
    let foot = document.getElementById('footer1')
    if (cor[1].checked){
        document.body.style.background = 'white'
        foot.style.color= 'black'
    }else{
        document.body.style.background = 'black'
        foot.style.color= 'white'
    }
}