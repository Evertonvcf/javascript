var agr = new Date ()
var hora = agr.getHours ()
console.log (`agr são exatamente ${hora} horas`)
if ( hora < 12) {
    console.log ('Bom Dia')}
    else if (hora <= 18) {
        console.log ('boa tarde')
    }else {
        console.log ('boa noite')
    }
