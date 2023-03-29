   let num = document.querySelector('input#txtn')
   let numAdd= document.querySelector('select#numAdd')
   let res = document.querySelector('div#res')
   let valores = []

   function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
        } else {
        return false
        }
    } 

   function inListe(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true 
        } else {
        return false
        }
    }

   function adicionar() {
    if (isNumber(num.value) && !inListe(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text =`Valor ${num.value} adicionado`
        numAdd.appendChild(item)
        res.innerHTML = ''
        } else {
        window.alert('O número digitado não é válido ou já foi adicionado a lista')
        }
        num.value =''
        num.focus()
    } 

    function finish() {
        if (valores == 0) {
            window.alert('Adicione valores antes de finalizar!')
        } else {
            let tot = valores.length
            let maior = valores[0]
            let menor =valores[0]
            let soma = 0
            let media = 0
            for(let pos in valores) {
                soma += valores[pos]
                if (valores[pos] > maior)
                maior = valores[pos]
                if(valores[pos] < menor)
                menor= valores[pos]
            }
            media = soma/tot
            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo, temos ${tot}NÚMEROS cadastrados</p>`
            res.innerHTML += `<p> O maior valor informado foi${maior}</p>`
            res.innerHTML += `<p> O maior valor informado foi${menor}</p>`
            res.innerHTML += `<p>A soma dos valores informados foram${soma}</p>`
            res.innerHTML += `<p>A media  dos valores informados é ${media}</p>`
        }
    }