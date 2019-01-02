// Inicializando materialize CSS
M.AutoInit();

// Construindo conexão entre abas (portfolio)
var bnt_sobre = document.getElementById("btn-sobre");
var bnt_projetos = document.getElementById("btn-projetos");
var bnt_artigos = document.getElementById("btn-artigos");

var goToTab_portfolio = function() {
    var selector_abas = document.querySelectorAll('.tabs');
    var instance_abas = M.Tabs.getInstance(selector_abas[0]);

    var target = this.id.replace('btn', 'id');
    instance_abas.select(target);
}

bnt_sobre.addEventListener('click', goToTab_portfolio, false);
bnt_projetos.addEventListener('click', goToTab_portfolio, false);
bnt_artigos.addEventListener('click', goToTab_portfolio, false);

var egg = document.getElementById("maker");

var beMaker = function() {
    var audio = new Audio('src/public/audio/title.mp3');
    audio.play();
}

egg.addEventListener('click', beMaker, false);