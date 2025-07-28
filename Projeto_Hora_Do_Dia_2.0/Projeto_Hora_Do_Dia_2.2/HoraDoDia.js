function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()

const relogio = setInterval(function time(){
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()

    if (hora < 10) hora = '0' + hora
    if (minutos < 10) minutos = '0' + minutos
    if (segundos < 10) segundos = '0' + segundos

    horas.textContent = hora 
    minutos.textContent = minuto
    segundos.textContent = segundo

     msg.innerHTML = `Agora são:`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'Manhã_Hora_Do_Dia_IMG.jpg'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'Tarde_Hora_Do_Dia_IMG.jpg'
        document.body.style.background = '#C2BBA7'
    } else {
        //BOA NOITE
        img.src = 'Noite_Hora_Do_Dia_IMG.jpg'
        document.body.style.background = '#60727D'
    }
})     
}
