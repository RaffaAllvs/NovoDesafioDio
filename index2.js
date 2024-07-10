
let nome= "Vingador"
let resultado=partidas(150,50)
console.log("o jogador "+nome+" jogou um total de "+ resultado+ " partidas")
function partidas(vit,der){
    let somatorio= vit+der
    return somatorio
}

let resultado2=saldo(150,50)
console.log("o jogador está com o saldo de "+resultado2)
function saldo(vitoria,derrota){
    let somatorio=vitoria-derrota
    return somatorio

}
let elo=nivel("imortal")
function nivel(nivelmaximo){
    console.log("Se vitórias for maior ou igual a 101=imortal")
    console.log("O Herói tem saldo de "+resultado2+" e está no nivel "+nivelmaximo)

}















