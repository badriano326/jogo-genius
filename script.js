let ordem = [];
let ordemClicada = [];
let pontuacao = 0;

/*
verde = 0
vermelho = 1
amarelo = 2
azul = 3
*/

const azul = document.querySelector('.azul');
const amarelo = document.querySelector('.amarelo');
const verde = document.querySelector('.verde');
const vermelho = document.querySelector('.vermelho');

let shufflerOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    ordem[ordem.length] = colorOrder;
    ordemClicada = [];

    for(let i in ordem){
        let elemtColor = createColorElement(ordem[i]);
        ligthColor(elemtColor, Number(i) + 1);
    }
}
let ligthColor = (element, number) => {
    number = number * 500;
    setTimeout(()=>{
        element.classList.add('select');
    }, number -100);
    setTimeout(() => {
        element.classList.remove('select');
    });
}

let checkOrdem = () => {
    for(let i in ordemClicada) {
        if(ordemClicada[i] != ordem[i]){
            perdeu();
            break;
        }
    }
    if(ordemClicada.length == ordem.length){
        alert('pontuação: ${pontuacao}\n você acertou! iniciano a proximma fase');
        nextLevel();
    }
}

let click = (color) => {
    ordemClicada[ordemClicada.length] = color;
    createColorElement(color).classList.add('select');

    setTimeout(() =>{
        createColorElement(color).classList.remove('select');
        checkOrdem();
    }, 250);
}

let createColorElement = (color) => {
    if(color == 0){
        return verde;
    } else if(color == 1){
        return vermelho;
    } else if(color == 2){
        return amarelo;
    } else if(color == 3){
        return azul;
    }
}

let nextLevel = ()=>{
    pontuacao++;
    shufflerOrder();
}

let perdeu =  () =>{
    alert('pontuação: ${pontuacao}\n você perdeu o jogo\n cloque em reiniciar para jogar novamente');
    ordem = [];
    ordemClicada = [];

    playGame();
}

let playGame = () => {
    alert('bem vindo');
    pontuacao=0;

    nextLevel();
}

/*verde.addEventListener('click', click(0));
vermelho.addEventListener('click', click(1));
amarelo.addEventListener('click', click(2));
azul.addEventListener('click', click(3));*/

verde.onclick = () => click(0);
vermelho.onclick = () => click(1);
amarelo.onclick = () => click(2);
azul.onclick = () => click(3);

playGame();