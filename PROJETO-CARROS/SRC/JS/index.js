const botoes = document.querySelectorAll('.botao');
const carros = document.querySelectorAll('.carro');

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarCarro();

        botao.classList.add("selecionado");
        carros[indice].classList.add("selecionado");
    });
});

function desselecionarCarro() {
    const carroSelecionado = document.querySelector(".carro.selecionado");
    carroSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}