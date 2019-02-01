// Inicializando materialize CSS
M.AutoInit();

// Construindo conexão entre abas (portfolio)
var bnt_sobre = document.getElementById("btn-sobre");
var bnt_professional = document.getElementById("btn-professional");
var bnt_personal = document.getElementById("btn-personal");

var goToTab_portfolio = function() {
    var selector_abas = document.querySelectorAll('.tabs');
    var instance_abas = M.Tabs.getInstance(selector_abas[0]);

    var target = this.id.replace('btn', 'id');
    instance_abas.select(target);
}

bnt_sobre.addEventListener('click', goToTab_portfolio, false);
bnt_professional.addEventListener('click', goToTab_portfolio, false);
bnt_personal.addEventListener('click', goToTab_portfolio, false);

var maker = document.getElementById("maker");

var beMaker = () => {
    if(this.className != "be-maker") {
        
    }

    this.className = "be-maker";
}

maker.addEventListener('click', beMaker, false);