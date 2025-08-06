function calcular(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let tab2 = document.getElementById('seltab2')
    let tab3 = document.getElementById('seltab3')
    let tab4 = document.getElementById('seltab4')
    if (num.value.length == 0){
        window.alert('Por favor digite um número!')
    } else {
        let n = Number(num.value)
        
        tab.innerHTML = ''
        tab2.innerHTML = ''
        tab3.innerHTML = ''
        tab4.innerHTML = ''
        
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} + ${c} = ${n + c}`
            tab.appendChild(item)

            let item2 = document.createElement('option')
            item2.text = `${n} - ${c} = ${n - c}`
            tab2.appendChild(item2)

            let item3 = document.createElement('option')
            item3.text = `${n} x ${c} = ${n * c}`
            tab3.appendChild(item3)

            let item4 = document.createElement('option')
            item4.text = `${n} ÷ ${c} = ${n / c}`
            tab4.appendChild(item4)
        }
    }
}

/*while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++ */