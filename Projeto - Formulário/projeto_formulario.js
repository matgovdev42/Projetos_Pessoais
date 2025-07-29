function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fAno.value.length == 1900 || Number (fAno.value) > ano){
        window.alert('[ERRO] Verifique os dados novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 3){
                //bebe
                img.setAttribute('src', 'foto-bebe-mm.jpg')
            } else if (idade < 13) {
                //criança
                img.setAttribute('src', 'foto-crianca-mm.jpg')
            } else if (idade < 23) {
                //adolecente
                img.setAttribute('src', 'foto-adolecente-mm.jpg')
            } else if (idade < 39) {
                //adulto
                img.setAttribute('src', 'foto-adulto-mm.jpg')
            } else if (idade < 55) {
                //adulto2
                img.setAttribute('src', 'foto-adulto2-mm.jpg')
            } else if (idade < 120) {
                //idoso
                img.setAttribute('src', 'foto-idoso-mm.jpg')
            } else {
                //morto
                img.setAttribute('src', 'foto-morto.jpg')
            }
        } else if (fsex[1].checked) { 
                genero = 'Mulher'
            if (idade >= 0 && idade < 3) {
                //bebe
                img.setAttribute('src', 'foto-bebe-ff.jpg')
            } else if (idade < 13) {
                //criança
                img.setAttribute('src', 'foto-crianca-ff.jpg')
            } else if (idade < 23) {
                //adolecente
                img.setAttribute('src', 'foto-adolecente-ff.jpg')
            } else if (idade < 39) {
                //adulto
                img.setAttribute('src', 'foto-adulta-ff.jpg')
            } else if (idade < 55) {
                //adulto2
                img.setAttribute('src', 'foto-adulta2-ff.jpg')
            } else if (idade < 120) {
                //idoso
                img.setAttribute('src', 'foto-idosa-ff.jpg')
            } else {
                //morto
                img.setAttribute('src', 'foto-morto.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        img.style.width = '200px'
        img.style.height = '200px'
        img.style.borderRadius = '8px'
        img.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.371)'
    }
}