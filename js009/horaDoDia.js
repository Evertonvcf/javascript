function carregar () {
    var msg = window.document.getElementById('msg')
    var manha = window.document.getElementById ("img")
    var hour_now = new Date ()
    //var hour = hour_now.getHours ()
    var hour  = 11
    msg.innerText = `Bom dia. Agora são ${hour} horas.`
    if (hour >= 0 && hour < 12){
        img.src = "imagens/manha_ok.png"
        msg.innerHTML = 'Bom Dia!'
        document.body.style.background = '#FDC25F'
    } else if (hour > 12 && hour <=18) {
        manha.src = "imagens/tarde_ok.png"
        msg.innerText = "Boa tarde!"
        document.body.style.background = '#AF9493'
    } else {
        manha.src = "imagens/noite_ok.png"
        msg.innerText = "Boa Noite!"
        document.body.style.background = '#015282'
    }
   
    

} 