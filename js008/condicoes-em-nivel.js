var idade =70
if ( idade < 16){
console.log(`Você tem ${idade} anos não é obrigado a votar`)
} else if (idade < 18 || idade > 65) {
    console.log(`Você tem ${idade} anos seu voto é opcional`)
} else {
    console.log (`Você tem ${idade} anos seu voto é obrigatorio`)
}