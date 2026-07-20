// let numeroSecreto = parseInt(Math.random() * 11)
// let tentativas = 1
// let chute

// alert('Boas vindas ao jogo do número secreto')

// while (chute != numeroSecreto) {
//     let chute = prompt('Escolha um número entre 1 e 10')
//     if (chute == numeroSecreto) {
//         break
//     } else {
//         if (chute > numeroSecreto) {
//             alert('O número secreto é menor')
//         } else {
//             alert('O número secreto é maior')
//         }
//     }
//     tentativas++
// }

// let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' 
// alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa}`)
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Hora do Desafio';
//let texto = document.querySelector('p');
//texto.innerHTML = 'Escolha um número entre 1 e 10';
// 1. DECLARAÇÃO DAS VARIÁVEIS (UMA VEZ SÓ)
// 1. DECLARAÇÃO DAS VARIÁVEIS
let numerosSorteados = []; // Lista para guardar números já sorteados
let numeroSecreto = gerarNumeroAleatorio(1, 10); // GERA UM NÚMERO ALEATÓRIO
let tentativas = 1;
let chute;

// 2. FUNÇÕES AUXILIARES
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    
    // CORREÇÃO: era 'responseveVoice' e faltava fechar a função
    if (responsiveVoice) {
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
    }
} // ← FECHA A FUNÇÃO CORRETAMENTE

// 3. FUNÇÃO PARA GERAR NÚMERO ALEATÓRIO (SEM REPETIR)
function gerarNumeroAleatorio(min, max) {
    let numeroEscolhido = parseInt(Math.random() * (max - min + 1)) + min;
    
    // Verifica se já sorteou todos os números possíveis
    let quantidadeDeNumerosSorteados = numerosSorteados.length; // ← era 'listaDeNumerosSorteados'
    if (quantidadeDeNumerosSorteados >= (max - min + 1)) {
        alert('Todos os números já foram sorteados!');
        return null;
    }
    
    // Se o número já foi sorteado, chama a função de novo (recursão)
    if (numerosSorteados.includes(numeroEscolhido)) { // ← faltava as chaves {}
        return gerarNumeroAleatorio(min, max); // ← faltava fechar o parêntese
    } else {
        numerosSorteados.push(numeroEscolhido); // ← era 'listaDeNumerosSorteados'
        return numeroEscolhido;
    }
}

// 4. FUNÇÃO QUE VERIFICA O CHUTE
function verificarChute() {
    // PEGA O VALOR DO INPUT E CONVERTE PARA NÚMERO
    chute = parseInt(document.querySelector('input').value);
    
    // CONSOLE PARA DEBUG
    console.log(`Número secreto: ${numeroSecreto}`);
    console.log(`Seu chute: ${chute}`);
    
    // Verifica se o usuário digitou algo válido
    if (isNaN(chute) || chute < 1 || chute > 10) {
        exibirTextoNaTela('p', ' Digite um número válido entre 1 e 10!');
        document.querySelector('input').value = '';
        return; // Sai da função
    }
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', ' Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('p', `O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa}!`);
        document.querySelector('#reiniciar').disabled = false;
    } else {    
        tentativas++; // INCREMENTA AS TENTATIVAS A CADA ERRO
        
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', ` O número secreto é MENOR que ${chute}.`);
        } else {
            exibirTextoNaTela('p', ` O número secreto é MAIOR que ${chute}.`);
        }
    }
    
    // LIMPA O INPUT DEPOIS DE VERIFICAR (SÓ UMA VEZ)
    document.querySelector('input').value = '';
}

// 5. FUNÇÃO PARA REINICIAR O JOGO
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(1, 10);
    tentativas = 1;
    chute = undefined;
    exibirTextoNaTela('h1', ' Hora do Desafio');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    document.querySelector('#reiniciar').disabled = true;
    document.querySelector('input').value = '';
    // REMOVI A LINHA DUPLICADA: document.getElementById('reiniciar').removeAttribute('disabled');
}

// 6. MENSAGENS INICIAIS
exibirTextoNaTela('h1', 'Hora do Desafio');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
document.querySelector('#reiniciar').disabled = true;


// 5. FUNÇÕES DOS BOTÕES ADICIONAIS (QUE VOCÊ JÁ TINHA)

// 6. MENSAGENS INICIAIS
function exibirMensagemInicial() {
exibirTextoNaTela('h1', 'Hora do Desafio');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
document.querySelector('#reiniciar').disabled = true;
document.getElementById(reiniciar).setAttribute('disabled', true);
}