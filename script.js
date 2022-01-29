function somar(){
    var n1 = document.querySelector('input#inp1')
    var n2 = document.querySelector('input#inp2')
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    var s = num1 + num2
    var result = document.querySelector('div#res')
    result.innerHTML = `A soma de ${num1} e ${num2} sera: <strong>${s}</strong>`
}