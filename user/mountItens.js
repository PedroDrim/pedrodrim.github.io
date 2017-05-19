// flag -> Projetos ou Experimentos

var templateCard = _.template(
    '<div class="col-sm-4 portfolio-item">' +
        '<div class="portfolio-link" href="#<%= i.id %>" data-toggle="modal">' +
            '<div class="caption">' +
                '<div class="caption-content">' +
                    '<i class="fa fa-search-plus fa-3x"></i>' +
                '</div>' +
            '</div>' +
            '<img class="img-fluid" src="user/projetos/<%= i.imagem %>" alt="">' +
        '</div>' +
    '</div>'
);

var templateConteudo = _.template(
    '<div class="portfolio-modal modal fade" id="<%= i.id %>" tabindex="-1" role="dialog" aria-hidden="true">' +
        '<div class="modal-dialog" role="document">' +
            '<div class="modal-content">' +
                '<div class="close-modal" data-dismiss="modal">' +
                    '<div class="lr">' +
                    '<div class="rl">' +
                    '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="container">' +
                    '<div class="row">' +
                    '<div class="col-lg-8 offset-lg-2">' +
                        '<div class="modal-body">' +
                            '<h2><%= i.titulo %></h2>' +
                            '<hr class="star-primary">' +
                            '<img class="img-fluid img-centered" src="user/projetos/<%= i.imagem %>" alt="">' +
                            '<p><%= i.descricao %></p>' +
                            '<ul class="list-inline item-details">' +
                                '<li>Cliente:' +
                                '<strong><a href="<%= i.cliente.url %>"> <%= i.cliente.nome %></a>' +
                                '</strong>' +
                                '</li>' +
                                '<li>Data:' +
                                '<strong><%= i.data %>' +
                                '</strong>' +
                                '</li>' +
                                '<li>Tipo de serviço:' +
                                '<strong><%= i.servico %>' +
                                '</strong>' +
                                '</li>' +
                                '<li>Versão:' +
                                '<strong><a href="<%= i.versao.url %>"><%= i.versao.nome %></a>' +
                                '</strong>' +
                                '</li>' +
                            '</ul>' +
                            '<button class="btn btn-success" type="button" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>' +
                        '</div>' +
                    '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>'
);

var mountItem = function(objProject, flag){
    
    var indexCard = "#card" + flag + " .row";
    var indexConteudo = "#conteudo" + flag;
    
    //=======[card]===================//
    var card = $(indexCard);
    card.html( templateCard({i: objProject}) );
    //=======[card]===================//

    //=======[content]================//
    var conteudoCard = $(indexConteudo);
    conteudoCard.html( templateConteudo({i: objProject}))
//=======[content]================//
}

$(document).ready(function(){
    
    $.getJSON("./user/projetos/projetos.json", function(lista){
        lista.forEach(
            function(objProject){mountItem(objProject,"Projetos")}
        )
    });

});
