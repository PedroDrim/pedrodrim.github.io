// Parametros de back-end
var getBackEndParam = function() {

    var params = {
        data: {
            labels: ['Java / Android', 'R / Shiny', 'Ruby', 'Scala', 'Kotlin', 'Typescript / Javascript', 'Python', 'C# / Unity'],
            datasets: [{
                data: [9.0, 9.0, 7.5, 5.0, 5.0, 6.0, 5.0, 7.5],
                backgroundColor: ["#f38b4a", "#56d798", "#ff8397", "#6970d5", "#ff6384", "#76ff03", "#ffee58", "#ffa726"],
                label: 'Back-End'
            }]
        },
        
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Atuação Back-End'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };

    return(params);
}

// Parametros de front-end
var getFrontEndParam = function() {

    var params = {
        data: {
            labels: ['Materialize CSS', 'React', 'HTML', 'CSS', 'UX / UI'],
            datasets: [{
                data: [8.0, 7.0, 7.5, 5.0, 6.0],
                backgroundColor: ["#f38b4a", "#56d798", "#ff8397", "#6970d5", "#ff6384"],
                label: 'Front-End'
            }]
        },
        
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Atuação Front-End'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };

    return(params);
}

// Parametros de ferramentas
var getToolsParam = function() {

    var params = {
        data: {
            labels: ['Firebase', 'Git', 'MySQL', 'MongoDB'],
            datasets: [{
                data: [9.0, 8.5, 8.5, 7.0],
                backgroundColor: ["#f38b4a", "#56d798", "#ff8397", "#6970d5"],
                label: 'Tools'
            }]
        },
        
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Ferramentas'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };

    return(params);
}

// Criar grafico funcional
var createChar = function(data, options) {
    var context = document.getElementById("grafico").getContext('2d');
    var chart = new Chart(context, {
        type: 'doughnut',
        data: data,
        options: options
    });
    
    return(chart);
}

var startChart = function() {    
    var id = this.id;
    var params;

    if(id == "bnt-back-end") {
        params = getBackEndParam();
    } else if(id == "bnt-front-end") {
        params = getFrontEndParam();
    } else {
        params = getToolsParam();
    }

    createChar(params.data, params.options);
}

var bnt_back_end = document.getElementById("bnt-back-end");
var bnt_front_end = document.getElementById("bnt-front-end");
var bnt_tools = document.getElementById("bnt-tools");

bnt_back_end.addEventListener('click', startChart, false);
bnt_front_end.addEventListener('click', startChart, false);
bnt_tools.addEventListener('click', startChart, false);