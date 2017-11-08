$(document).ready(function () {
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $(".dropdown-button").dropdown();

    var options = [
        {
            selector: '#id-sobre', offset: 0, repeat: true, callback: function () {
                $("#id-sobre").addClass("active")
                $("#id-projetos").removeClass("active")
                $("#id-artigos").removeClass("active")
                $("#id-contatos").removeClass("active")
            }
        },

        {
            selector: '#id-projetos', offset: 0, repeat: true, callback: function () {
                $("#id-sobre").removeClass("active")
                $("#id-projetos").addClass("active")
                $("#id-artigos").removeClass("active")
                $("#id-contatos").removeClass("active")
            }
        },

        {
            selector: '#id-artigos', offset: 0, repeat: true, callback: function () {
                $("#id-sobre").removeClass("active")
                $("#id-projetos").removeClass("active")
                $("#id-artigos").addClass("active")
                $("#id-contatos").removeClass("active")
            }
        },
        {
            selector: '#id-contatos', offset: 0, repeat: true, callback: function () {
                $("#id-sobre").removeClass("active")
                $("#id-projetos").removeClass("active")
                $("#id-artigos").removeClass("active")
                $("#id-contatos").addClass("active")
            }
        },

    ];
    Materialize.scrollFire(options);
});