function Tabuada(){
    var num = document.querySelector('input#txtn')
    var tab = document.querySelector('select#seltab')
    if (num.value.length == 0){
        window.alert('ERRO, por favor digite um numero.')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c<=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }

}