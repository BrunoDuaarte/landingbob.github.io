console.log("Arquivo script.js carregado!");

const botaoInscricao = document.querySelector('#hero button');

if (botaoInscricao) {
    botaoInscricao.addEventListener('click', function() {
        alert('Você clicou no botão de inscrição!');
        // Aqui você pode adicionar mais ações, como redirecionar para um formulário.
    });
}