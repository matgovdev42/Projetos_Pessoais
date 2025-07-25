//Quadrado A - Azul
var a = document.getElementById('a')
a.addEventListener('click', AzulA)
function AzulA(){
    a.innerText = 'AZUL'
    a.style.background = 'blue'
    a.style.fontSize = '1rem'
    a.style.textShadow = '1px 1px 1px black'
}

//Quadrado B - Amarelo
var b = document.getElementById('b')
b.addEventListener('click', AmareloB)
function AmareloB(){
    b.innerText = 'AMARELO'
    b.style.background = 'yellow'
    b.style.fontSize = '1rem'
    b.style.textShadow = '1px 1px 1px black'
}

//Quadrado C - Azul 
var c = document.getElementById('c')
c.addEventListener('click', AzulC)
function AzulC(){
    c.innerText = 'AZUL'
    c.style.background = 'blue'
    c.style.fontSize = '1rem'
    c.style.textShadow = '1px 1px 1px black'
}

//Quadrado D - Verde 
var d = document.getElementById('d')
d.addEventListener('click', VerdeD)
function VerdeD(){
    d.innerText = 'VERDE'
    d.style.background = 'green'
    d.style.fontSize = '1rem'
    d.style.textShadow = '1px 1px 1px black'
}

//Quadrado E - Vermelho
var e = document.getElementById('e')
e.addEventListener('click', VermelhoE)
function VermelhoE(){
    e.innerText = 'BOMBA!💣'
    e.style.background = 'red'
    e.style.fontSize = '1rem'
    e.style.textShadow = '1px 1px 1px black'
}

//Quadrado F - Verde
var f = document.getElementById('f')
f.addEventListener('click', VerdeF)
function VerdeF(){
    f.innerText = 'VERDE'
    f.style.background = 'green'
    f.style.fontSize = '1rem'
    f.style.textShadow = '1px 1px 1px black'
}

//Quadrado G - Amarelo
var g = document.getElementById('g')
g.addEventListener('click', AmareloG)
function AmareloG(){
    g.innerText = 'AMARELO'
    g.style.background = 'yellow'
    g.style.fontSize = '1rem'
    g.style.textShadow = '1px 1px 1px black'
}

//Quadrado H - Cinza
var h = document.getElementById('h')
h.addEventListener('click', Cinzah)
function Cinzah(){
    h.innerText = 'Cinza'
    h.style.background = 'gray'
    h.style.fontSize = '1rem'
    h.style.textShadow = '1px 1px 1px black'
}

//Quadrado I - Cinza
var i = document.getElementById('i')
i.addEventListener('click', Cinzai)
function Cinzai(){
    i.innerText = 'Cinza'
    i.style.background = 'gray'
    i.style.fontSize = '1rem'
    i.style.textShadow = '1px 1px 1px black'
}

//Botão Reiniciar

function reiniciarJogo(){
    location.reload()
}
document.getElementById('reiniciar').addEventListener('click', reiniciarJogo)