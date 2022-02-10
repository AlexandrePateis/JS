let form = document.getElementById('formulario')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inppeso = document.getElementById('input-test1')
    const inpaltura = document.getElementById('input-test2')

    const peso = Number(inppeso.value)
    const altura = Number(inpaltura.value)

    if (!peso) {
        setResultado('Peso Invalido', false)
        return;
    }
    if (!altura) {
        setResultado('Altura Invalido', false)
        return;
    }
    const mensagem = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
    const imc = getImc(peso, altura)

    if (imc < 18.5) {
        setResultado(`Seu IMC e ${imc} ${mensagem[0]}`)
    } else if (imc >= 18.5 && imc <= 24.9) {
        setResultado(`Seu IMC e ${imc} ${mensagem[1]}`)
    } else if (imc >= 25 && imc <= 29.9) {
        setResultado(`Seu IMC e ${imc} ${mensagem[2]}`)
    } else if (imc >= 30 && imc <= 34.9) {
        setResultado(`Seu IMC e ${imc} ${mensagem[3]}`)
    } else if (imc >= 35 && imc <= 39.9) {
        setResultado(`Seu IMC e ${imc} ${mensagem[4]}`)
    } else {
        setResultado(`Seu IMC e ${imc} ${mensagem[5]}`)
    }

});

function getImc(peso, altura) {
    let imc = (peso / (altura * altura)).toFixed(2)
    return imc
}

function criaP() {
    const p = document.createElement('p');

    return p
}

function setResultado(msg, isValid) {
    const resul = document.getElementById('res')
    resul.innerHTML = ''

    const p = criaP()
    p.innerHTML = msg
    p.classList.add('resposta')
    resul.appendChild(p)
    resul.style.textAlign = 'center'

}

