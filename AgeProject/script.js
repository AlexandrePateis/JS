function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || ano.value > ano){
        window.alert('ERROR, check the data again')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.padding = '15px'
        if (fsex[0].checked){
            genero = 'Man'
            if(idade >=0 && idade < 10){
                //Crianca
                img.setAttribute('src', './images/bebemh.png')
            }else if(idade >11 && idade < 21){
                img.setAttribute('src', './images/homemjovem.png')
                //jovem
            }else if(idade >21 && idade < 50){
                img.setAttribute('src', './images/homemadulto.png')
                //Adulto
            }else if(idade >50 && idade <120){
                img.setAttribute('src', './images/idosohomem.png')
                //Idoso
            }else{
                window.alert('Impossible to be that age')
            }
                
        }else{
            genero = 'Women'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', './images/bebemh.png')
                //Crianca
            }else if(idade >11 && idade < 21){
                img.setAttribute('src', './images/jovemmulher.png')
                //jovem
            }else if(idade >21 && idade < 50){
                img.setAttribute('src', './images/mulheeeradulta.png')
                //Adulto
            }else if (idade >50 && idade <120){
                img.setAttribute('src', './images/idosamulher.png')
                //Idoso
            }else{
                window.alert('Impossivel ter essa idade')
            }
        }
        res.style.textAlign = 'center'
    }   res.innerHTML = `We detected a ${genero} with ${idade} year-old `
        res.appendChild(img)
}