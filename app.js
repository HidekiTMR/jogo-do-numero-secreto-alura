sorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
msgInicial()

function msgInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}


function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1', 'Acertou!');
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'Tente novamente!')
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`)
        } else if (chute < numeroSecreto) {
            exibirTextoNaTela('h1', 'Tente novamente!')
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`)
        }
        tentativas += 1
        limparCampo()
        }

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let lenSorteados = sorteados.length;

    if (lenSorteados == numeroLimite ) {
        sorteados = [];
    }

    if (sorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        sorteados.push(numeroEscolhido); // push é o append do Python
        return numeroEscolhido;
    }
    
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}


function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    msgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}