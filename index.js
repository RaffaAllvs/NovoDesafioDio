let vilao= "Ganondorf"
let heroi="Link"
console.log("Seja bem vindo herói")
console.log("Sou a fada guãrdia desse mundo,ele está sendo destruido por um homem malvado chamado " + vilao)
console.log("Precisamos da sua ajuda para salvar o nosso mundo,porém antes preciso saber seu nome,como se chama? "+ heroi+",que belo nome")
console.log("ok,vamos começar a aventura")
let xpAtual= 0
console.log("Seu xp atual é "+ xpAtual+" porém para te ajudar na sua aventura, vou te dar um pouco de xp")
xpAtual+=15
console.log("Agora você possui "+ xpAtual+" de xp, espero que isso te ajude herói")
console.log("Ok herói, agora que você começou a sua aventura,você precisa de mais xp, enfrente esse goblins para conseguir mais")
console.log("Se concentre herói para a sua primeira luta,use seu ataque especial,derrotando esse inimigo você conseguira 900 de xp")
xpAtual=915

switch (xpAtual){
    case 915:
    console.log("parabéns,você conseguiu 900 de xp e alcançou o nível Ferro")
    break
    case 1016:
    console.log("parabéns,você conseguiu 1001 de xp e alcançou o nível Bronze")
    case 2016:
    console.log("parabéns,você conseguiu 2001 de xp e alcançou o nível Prata")
    case 5016:
    console.log("parabéns,você conseguiu 3001 de xp e alcançou o nível Ouro")
    case 7016:
    console.log("parabéns,você conseguiu 7001 de xp e alcançou o nível Platina")
    case 8016:
    console.log("parabéns,você conseguiu 8001 de xp e alcançou o nível Ascendente")
    case 9016:
    console.log("parabéns,você conseguiu 9001 de xp e alcançou o nível Imortal")
    case 10016:
    console.log("parabéns,você conseguiu 10001 de xp e alcançou o nível Radiante")
}
console.log("Agora que você está com "+ xpAtual+" de xp,você pode entrar no castelo do vilão e o enfrentar")
console.log("Agora sua batalha final começou "+heroi+" use o seu ataque de 3 rounds, o spin attack para o finalizar")

for(let i=1;i<4;i++){
    console.log("spin attack "+i+" acertou")
}
console.log("Parabéns "+heroi+" o "+ vilao+" foi nocauteado com o seu spin attack, você conseguiu salvar o nosso mundo")
console.log("O Herói de nome "+heroi+" está no nível de "+xpAtual)

