function Contar(){
    var ini = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var res = document.querySelector('div#res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.length == 0){
        window.alert('[ERRO], information cannot be empty !!')
    }else{
        res.innerHTML = 'Counting... <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p<=0){
            p=1
        }
        if(i<f){
            for (c = i; c<=f;c+=p){
                res.innerHTML += `${c}, `
            }
        }else{
            for (c = i; c>=f;c-=p){
                res.innerHTML += `${c}, `
            }
        }
        res.innerHTML += 'END !'
    }
}