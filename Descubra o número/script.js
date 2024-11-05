var numero;
var tentativas;

function iniciar_jogo() {
    numero = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    document.getElementById('resultado').textContent = '';
    document.getElementById('tentativa').value = '';
    document.getElementById('reiniciar').style.display = 'none'; // Esconde o botão de reiniciar
}

function testar_numero() {
    var tentativa_usuario = parseInt(document.getElementById('tentativa').value);
    var resultado = document.getElementById('resultado');
    tentativas++;

    if (isNaN(tentativa_usuario) || tentativa_usuario < 1 || tentativa_usuario > 100) {
        resultado.textContent = "Por favor, insira um número válido entre 1 e 100.";
        return;
    }

    if (tentativas < 5) {
        if (tentativa_usuario === numero) {
            resultado.textContent = "Parabéns! Você acertou o número oculto!";
            document.getElementById('reiniciar').style.display = 'block'; // Mostra o botão de reiniciar
        } else if (tentativa_usuario > numero) {
            resultado.textContent = "Esse não é o número... tente um número menor.";
        } else {
            resultado.textContent = "Esse não é o número... tente um número maior.";
        }
    } else {
        resultado.textContent = `Você esgotou suas tentativas. O número era ${numero}.`;
        document.getElementById('reiniciar').style.display = 'block'; // Mostra o botão de reiniciar
    }
}

function reiniciar_jogo() {
    iniciar_jogo();
}

// Iniciar o jogo ao carregar a página
window.onload = iniciar_jogo;
