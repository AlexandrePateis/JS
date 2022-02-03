let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let lista_num = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n)<= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
     if(l.indexOf(Number(n)) != -1){
        return true
     }else{
        return false
     }
}

function Adicionar(){
    if (isNumero(num.value) && !inLista(num.value, lista_num)){
        lista_num.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Number ${Number(num.value)} add`
        lista.appendChild(item)
    }else{
        window.alert("We can't add this value")
    }
    num.value = ''
    num.focus()
}  

function somar(l){
    let soma = 0
    for(let i in l){
        soma +=l[i]
    }
    return soma
}

function End () {
    if (lista_num.length == 0){
        window.alert('No')
    }else{
        let soma = somar(lista_num)
        let menor = Math.min.apply(null, lista_num)
        let maior = Math.max.apply(null, lista_num)  
        res.innerHTML = `The highest value was ${maior}<br>`
        res.innerHTML += `The lowest value was ${menor}<br>`
        res.innerHTML += `We have a total of ${lista_num.length} elements in this list.<br>`
        res.innerHTML += `The average of the values ​​was ${soma/lista_num.length}`
        
    }
    

}