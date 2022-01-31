function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var date = new Date()
    var hora = date.getHours()
    msg.innerHTML = `Agora sao ${hora} horas`
    if (hora >= 0 && hora < 12){
        msg.innerHTML = `Good Morning !! Now are ${hora} a'clock'`
        img.src = 'manha.jpg'
        document.body.style.background = '#b5b6b1'
    }else if (hora >=12 && hora <= 18){
        //Boa tarde
        msg.innerHTML = `Good Aftrnoon !! Now are ${hora} a'clock`
        img.src = 'tarde.jpg'
        document.body.style.background = '#191627'
    }else{
        //Boa noite 
        msg.innerHTML = `Good Night !! Now are ${hora} a'clock`
        img.src = 'noite.jpg'
        document.body.style.background = '#653f74'
    }
}

