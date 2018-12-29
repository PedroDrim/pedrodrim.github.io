M.AutoInit();

var bnt_sobre = document.getElementById("btn-sobre");
var bnt_projetos = document.getElementById("btn-projetos");
var bnt_artigos = document.getElementById("btn-artigos");

var goToTab = function() {
    var selector_abas = document.querySelectorAll('.tabs');
    var instance_abas = M.Tabs.getInstance(selector_abas[0]);

    var target = this.id.replace('btn', 'id');
    instance_abas.select(target);
}

bnt_sobre.addEventListener('click', goToTab, false);
bnt_projetos.addEventListener('click', goToTab, false);
bnt_artigos.addEventListener('click', goToTab, false);