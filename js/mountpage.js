var mountProjects = function(key){

    var getFileContent = function(file){
        var request = new XMLHttpRequest();
        request.open("GET", file, false);
        request.send(null);
        return request.responseText;
    }

    var fileJson = "user/" + key + "/" + key + ".json";
    var json_object = JSON.parse(getFileContent(fileJson));
    
    var cardTemplate = "vendor/ejs/view/card.ejs";
    cardTemplate = getFileContent(cardTemplate);

    var contentTemplate = "vendor/ejs/view/content.ejs";
    contentTemplate = getFileContent(contentTemplate);

    var card_ejs = ejs.render(cardTemplate, {elementos: json_object});
    var content_ejs = ejs.render(contentTemplate, {elementos: json_object});

    var indexCard = "#card" + key + " .row";
    var indexContent = "#conteudo" + key;
    $(indexCard).html(card_ejs);
    $(indexContent).html(content_ejs);
}

mountProjects("projetos");
mountProjects("experimentos");