function insert(num){
    let numero = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = numero + num
}
function clean(){
    document.getElementById('res').innerHTML = ''
}
function back(){
    let resul = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = resul.substring(0, resul.length -1)
}
function calcular(){
    var resul = document.getElementById('res').innerHTML
    if(resul){
        document.getElementById('res').innerHTML = eval(resul)
    }else{
        document.getElementById('res').innerHTML = 'ERROR'
    }
}