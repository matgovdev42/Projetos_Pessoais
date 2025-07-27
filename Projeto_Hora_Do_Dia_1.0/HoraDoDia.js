function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
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
}
