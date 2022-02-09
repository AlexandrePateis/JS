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

    const imc = getImc(peso, altura)

    if (imc < 18.5) {
        setResultado(`Seu IMC e ${imc} (Abaixo do peso)`)
    } else if (imc >= 18.5 && imc <= 24.9) {
        setResultado(`Seu IMC e ${imc} (Peso normal)`)
    } else if (imc >= 25 && imc <= 29.9) {
        setResultado(`Seu IMC e ${imc} (Sobrepeso)`)
    } else if (imc >= 30 && imc <= 34.9) {
        setResultado(`Seu IMC e ${imc} (Obesidade grau 1)`)
    } else if (imc >= 35 && imc <= 39.9) {
        setResultado(`Seu IMC e ${imc} (Obesidade grau 2)`)
    } else {
        setResultado(`Seu IMC e ${imc} (Obesidade grau 3)`)
    }

});

function getImc(peso, altura) {
    let imc = (peso / altura).toFixed(2)
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
    resul.appendChild(p)
    resul.style.textAlign = 'center'

}

