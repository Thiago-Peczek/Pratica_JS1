// Selecionando pelo ID do título
const title = document.getElementById("titulo");

const texto = document.getElementsByClassName("mensagem2");

const criaBotao = document.createElement('button');
criaBotao.textContent = 'Modificar Frases';
document.querySelector('.container').appendChild(criaBotao);

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

// Evento de clique para alterar as frases
criaBotao.addEventListener("click", function(){
    for (let i=0; i<texto.length; i++){
        texto[i].textContent = "Frase " + (i+1) + " alterado pelo JS na moda antiga";
    }
});