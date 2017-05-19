// flag -> Projetos ou Experimentos

var mountItem = function(objProject, flag){
    
    var indexCard = "#card" + flag + " .row";
    var indexConteudo = "#conteudo" + flag;
    
    //=======[card]===================//
    var card = $(indexCard);
           
    var html = "<div class=\"col-sm-4 portfolio-item\">"
    html += "<div class=\"portfolio-link\" href=\"#portfolioModal2\" data-toggle=\"modal\">"
    html += "<div class=\"caption\">"
    html += "<div class=\"caption-content\">"
    html += "<i class=\"fa fa-search-plus fa-3x\"></i>"
    html += "</div>"
    html += "</div>"
    html += "<img class=\"img-fluid\" src=\"user/projetos/img/cake.png\" alt=\"\">"
    html += "</div>"
    html += "</div>"

    console.log(card);
    card.append(html);
    //=======[card]===================//

    //=======[content]================//
    var conteudoCard = $(indexConteudo);
    
    var html = "<div class=\"portfolio-modal modal fade\" id=\"portfolioModal2\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">"
    html += "<div class=\"modal-dialog\" role=\"document\">"
    html += "<div class=\"modal-content\">"
    html += "<div class=\"close-modal\" data-dismiss=\"modal\">"
    html += "<div class=\"lr\">"
    html += "<div class=\"rl\">"
    html += "</div>"
    html += "</div>"
    html += "</div>"
    html += "<div class=\"container\">"
    html += "<div class=\"row\">"
    html += "<div class=\"col-lg-8 offset-lg-2\">"
    html += "<div class=\"modal-body\">"
    html += "<h2>Project Title</h2>"
    html += "<hr class=\"star-primary\">"
    html += "<img class=\"img-fluid img-centered\" src=\"user/projetos/img/cake.png\" alt=\"\">"
    html += "<p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href=\"https://sellfy.com/p/8Q9P/jV3VZ/\">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>"
    html += "<ul class=\"list-inline item-details\">"
    html += "<li>Client:"
    html += "<strong><a href=\"http://startbootstrap.com\">Start Bootstrap</a>"
    html += "</strong>"
    html += "</li>"
    html += "<li>Date:"
    html += "<strong><a href=\"http://startbootstrap.com\">April 2014</a>"
    html += "</strong>"
    html += "</li>"
    html += "<li>Service:"
    html += "<strong><a href=\"http://startbootstrap.com\">Web Development</a>"
    html += "</strong>"
    html += "</li>"
    html += "</ul>"
    html += "<button class=\"btn btn-success\" type=\"button\" data-dismiss=\"modal\"><i class=\"fa fa-times\"></i> Close</button>"
    html += "</div>"
    html += "</div>"
    html += "</div>"
    html += "</div>"
    html += "</div>"
    html += "</div>"
    html += "</div>"

    conteudoCard.append(html)
//=======[content]================//
}

$(document).ready(function(){
    
    $.getJSON("./user/projetos/projetos.json", function(lista){
        lista.forEach(
            function(objProject){mountItem(objProject,"Projetos")}
        )
    });

});
