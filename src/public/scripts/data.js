var httpGet = function(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    var res = xmlHttp.responseText;
    return(JSON.parse(res));
}

var lang = navigator.language || navigator.userLanguage;
var tag = "pt";//lang.match("pt")? "pt-br" : "en";
var GLOBAL_DATA = httpGet("https://pedrodrim-2c007.firebaseio.com/data/" + tag + ".json");
//console.log(JSON.stringify(GLOBAL_DATA));