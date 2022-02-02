function verificar(){
    var data = new Date()
    var year = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > year){
        window.alert('ERROR, check the data again')
    }else{
        var fsex = document.getElementsByName('radsex')
        var age = year - fano.value
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.padding = '15px'
        if (fsex[0].checked){
            gender = 'Man'
            if(age >=0 && age < 10){
                
                img.setAttribute('src', './images/bebemh.png')
            }else if(age >11 && age < 21){
                img.setAttribute('src', './images/homemjovem.png')
                
            }else if(age >21 && age < 50){
                img.setAttribute('src', './images/homemadulto.png')
                
            }else if(age >50 && age <120){
                img.setAttribute('src', './images/idosohomem.png')
                
            }else{
                window.alert('Impossible to be that age')
            }
                
        }else{
            gender = 'Women'
            if(age >=0 && age < 10){
                img.setAttribute('src', './images/bebemh.png')
                
            }else if(age >11 && age < 21){
                img.setAttribute('src', './images/jovemmulher.png')
                
            }else if(age >21 && age < 50){
                img.setAttribute('src', './images/mulheradulta.png')
                
            }else if (age >50 && age <120){
                img.setAttribute('src', './images/idosamulher.png')
                
            }else{
                window.alert('Impossivel ter essa age')
            }
        }
        res.style.textAlign = 'center'
    }   res.innerHTML = `We detected a ${gender} with ${age} year-old `
        res.appendChild(img)
}