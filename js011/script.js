function verificar (){
    let start = document.querySelector('#start')
    let finish = document.querySelector('#finish')
    let pass = document.querySelector('#pass')
    let res = document.querySelector('#res')
    
    if (start.value.length == 0 || finish.value.length == 0 || pass.value.length == 0 ){
        window.alert('Insira um dado válido')
    }else {
        res.innerHTML = `Contando: `
        let startN = Number(start.value)
        let finishN = Number(finish.value)
        let passN = Number(pass.value)

        for(let c = startN; c <= finishN; c += passN) {
            res.innerHTML += `${c}`
        

        }
    }
}