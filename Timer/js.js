function relogio(){
    function criaHoraSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hours: false,
            timeZone: 'UTC'
        })
    }
    
    const relogio = document.getElementById('timer')
    let segundos = 0
    let timer;
    
    function iniciaRelogio() {
        timer = setInterval(
            function () {
            segundos++
            relogio.innerHTML = criaHoraSegundos(segundos)
        }, 1000)
    }
    
    document.addEventListener('click', function (e) {
        const el = e.target;
    
        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
    
        if (el.classList.contains('pausar')) {
            clearInterval(timer)
            relogio.classList.add('pausado')
        }
    
        if (el.classList.contains('zerar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)
            relogio.innerHTML = '00:00:00'
            segundos = 0
        }
    });
}
relogio()
