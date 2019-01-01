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
var createChar = function(id, data, options) {
    var context = document.getElementById(id).getContext('2d');
    var chart = new Chart(context, {
        type: 'doughnut',
        data: data,
        options: options
    });
    
    return(chart);
}

var params_back_end = getBackEndParam();
var params_front_end = getFrontEndParam();
var params_tools = getToolsParam();

createChar("grafico-back-end", params_back_end.data, params_back_end.options);
createChar("grafico-front-end", params_front_end.data, params_front_end.options);
createChar("grafico-tools", params_tools.data, params_tools.options);