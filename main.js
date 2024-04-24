const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i=0; i<botoes.length; i++) {
    
    botoes[i].onclick = function(){

        for (let j=0; j<botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}


const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-04-30T23:59:59");
const tempoObjetivo2 = new Date("2024-05-10T23:59:59");
const tempoObjetivo3 = new Date("2024-06-15T23:59:59");
const tempoObjetivo4 = new Date("2024-12-13T23:59:59");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4]

const situacoes = document.querySelectorAll(".situacao");

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    if (tempoFinal > 0) {
        return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos ";
    } else {
        return "Prazo finalizado";
        
    }
    
}

function calculaSituacao(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    if (tempoFinal > 0) {
        return " Ainda há tempo ";
    } else {
        return "Perdeu!!!";
        
    }
    
}

function atualizaSituacao () {
    for (let i = 0; i < situacoes.length; i++) {
        situacoes[i].textContent = calculaSituacao(tempos[i]);
    }
}

function atualizaCronometro() {
    for ( let i = 0; i < contadores.length; i++) {
        contadores[i].textContent = calculaTempo(tempos[i]);
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
atualizaSituacao ();
