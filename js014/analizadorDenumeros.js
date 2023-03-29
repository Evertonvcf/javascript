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
        } else {
        window.alert('O número digitado não é válido ou já foi adicionado a lista')
        }
        num.value =''
        num.focus()
    }